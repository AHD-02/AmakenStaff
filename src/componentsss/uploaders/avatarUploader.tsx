// material-ui
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';

// third-party
import { useDropzone } from 'react-dropzone';

// project import
import RejectionFiles from './components/RejectionFiles';
import ENV from 'env';
import { toBase64 } from 'utils/filesUtils';
import Axios from 'axios';

// assets
import { CameraOutlined } from '@ant-design/icons';

// types
import { CustomFile, UploadAvatarProps } from './types/dropzone';

const RootWrapper = styled('div')(({ theme }) => ({
  width: 124,
  height: 124,
  borderRadius: '50%',
  border: `1px dashed ${theme.palette.primary.main}`,
  background: theme.palette.primary.lighter
}));

const DropzoneWrapper = styled('div')({
  zIndex: 0,
  width: '100%',
  height: '100%',
  outline: 'none',
  display: 'flex',
  overflow: 'hidden',
  borderRadius: '50%',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  '& > *': { width: '100%', height: '100%' },
  '&:hover': {
    cursor: 'pointer',
    '& .placeholder': {
      zIndex: 9
    }
  }
});

const PlaceholderWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: alpha(theme.palette.primary.lighter, 0.75),
  transition: theme.transitions.create('opacity', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  '&:hover': { opacity: 0.85 }
}));

const AvatarUpload = ({ error, setFieldValue, sx, accept, name, img }: UploadAvatarProps) => {
  const theme = useTheme();

  const useUploadAsync = async (filesContainer: File[]) => {
    const uploadImageUrl = `${ENV.AMAKEN_API_BASE_URL}blobs/upload`;
    const base64Promises = filesContainer.map((item) => toBase64(item));
    const base64Array = await Promise.all(base64Promises);

    const res = await Promise.all(
      base64Array.map(async (base64) => {
        const filename = filesContainer[0]?.name ?? '';
        const response = await Axios.post(uploadImageUrl, { base: base64, name: filename });

        return response.data?.location
      })
      );
    
    if (res?.length > 0) {
      setFieldValue(name ?? '', res[0]);
    } else 
      window.alert('ERROR')

    return;
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    accept: {
      ...(accept ? { ...accept } : { 'image/*': [] })
    },
    multiple: false,

    onDrop: (acceptedFile: CustomFile[]) => {useUploadAsync(acceptedFile)},
  });

  const thumb =
    img && (
      <img
        key={img}
        alt={'img'}
        src={img}
        onLoad={() => {
          URL.revokeObjectURL(img!);
        }}
      />)

  return (
    <>
      <RootWrapper
        sx={{
          ...((isDragReject || error) && {
            borderColor: 'error.light'
          }),
          ...sx
        }}
      >
        <DropzoneWrapper {...getRootProps()} sx={{ ...(isDragActive && { opacity: 0.6 }) }}>
          <input {...getInputProps()} />
          {thumb}
          <PlaceholderWrapper
            className="placeholder"
            sx={{
              ...(img && {
                opacity: 0,
                color: 'common.white',
                bgcolor: 'grey.900'
              }),
              ...((isDragReject || error) && {
                bgcolor: 'error.lighter'
              })
            }}
          >
            <Stack spacing={0.5} alignItems="center">
              <CameraOutlined style={{ color: theme.palette.secondary.main, fontSize: '2rem' }} />
              <Typography color="secondary">{img ? 'Update' : 'Upload'}</Typography>
            </Stack>
          </PlaceholderWrapper>
        </DropzoneWrapper>
      </RootWrapper>
      {fileRejections?.length > 0 && <RejectionFiles fileRejections={fileRejections} />}
    </>
  );
};

export default AvatarUpload;
