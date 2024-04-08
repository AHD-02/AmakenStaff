import { CameraOutlined } from '@ant-design/icons';
import { Typography, Stack, CardMedia } from '@mui/material';
import UploadCover from 'assets/images/upload/upload.svg';
import { DropzopType } from '../types/dropzone';

// ==============================|| UPLOAD - PLACEHOLDER ||============================== //

const PlaceholderContent = ({ type }: { type?: string }) => {

  return (
    <>
      {Boolean(type !== DropzopType.standard) && (
        <Stack
          spacing={2}
          alignItems="center"
          justifyContent="center"
          direction={{ xs: 'column', md: 'row' }}
          sx={{ width: 1, textAlign: { xs: 'center', md: 'left' } }}
        >
          <CardMedia component="img" image={UploadCover} sx={{ width: 150 }} />
          <Stack sx={{ p: 3 }} spacing={1}>
            <Typography variant="h5">{'Drag And Drop Or Select a File'}</Typography>

            <Typography color="secondary">
              {'Drop Files Here Or Click'}&nbsp;
              <Typography component="span" color="primary" sx={{ textDecoration: 'underline' }}>
                {'Browse'}
              </Typography>
              &nbsp;{'Thorough Your Machine'}
            </Typography>
          </Stack>
        </Stack>
      )}
      {Boolean(type === DropzopType.standard) && (
        <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
          <CameraOutlined style={{ fontSize: '32px' }} />
        </Stack>
      )}
    </>
  );
}

export default PlaceholderContent