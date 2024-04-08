import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, Stack } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import PlaceholderContent from './components/PlaceholderContent';
import RejectionFiles from './components/RejectionFiles';
import { CustomFile, UploadProps } from './types/dropzone';

const DropzoneWrapper = styled('div')(({ theme }) => ({
  outline: 'none',
  overflow: 'hidden',
  position: 'relative',
  padding: theme.spacing(5, 1),
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create('padding'),
  backgroundColor: theme.palette.background.paper,
  border: `1px dashed ${theme.palette.secondary.main}`,
  '&:hover': { opacity: 0.72, cursor: 'pointer' }
}));


const SingleFileUpload = ({ error, file, setFieldValue, sx, accept, onRemoveFile }: UploadProps) => {
  const theme = useTheme();

  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    accept: {
      ...accept
    },
    multiple: false,
    onDrop: setFieldValue
  });

  const thumbs =
    file &&
    file.map((item: CustomFile) => (
      <img
        key={item.name}
        alt={item.name}
        src={'excelIcon.png'}
        style={{
          top: 8,
          left: 8,
          borderRadius: 2,
          width: 'calc(100% - 16px)',
          height: 'calc(100% - 16px)',
          background: theme.palette.background.paper
        }}
        
      />
    ));

  return (
    <Box sx={{ width: '100%', ...sx }}>
      <DropzoneWrapper
        {...getRootProps()}
        sx={{
          ...(isDragActive && { opacity: 0.72 }),
          ...((isDragReject || error) && {
            color: 'error.main',
            borderColor: 'error.light',
            bgcolor: 'error.lighter'
          }),
          ...(file && {
            padding: '12% 0'
          })
        }}
      >
        <input {...getInputProps()} />
        <PlaceholderContent />
        {thumbs}
      </DropzoneWrapper>

      {fileRejections?.length > 0 && <RejectionFiles fileRejections={fileRejections} />}

      {file && file?.length > 0 && (
        <Stack direction="row" justifyContent="flex-end" sx={{ mt: 1.5 }}>
          <Button variant="contained" color="error" onClick={onRemoveFile}>
            {'Remove'}
          </Button>
        </Stack>
      )}
    </Box>
  );
};

export default SingleFileUpload;