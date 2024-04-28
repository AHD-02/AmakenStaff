import { Button, Divider, Fade, CardContent, Modal, Stack, Backdrop } from '@mui/material';
import MainCard from 'componentsss/MainCard';
import { ModalProps } from './types';


const ModalComponent = (props: ModalProps) => {
  const isPrimaryButtonShown = Boolean(props.primaryButtonAction && props.primaryButtonTitle)
  const isSecondaryButtonShown = Boolean(props.secondaryButtonAction && props.secondaryButtonTitle)

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.isOpen}
      onClose={props.onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500
        }
      }}
    >
      <Fade in={props.isOpen}>
        <MainCard title={props.title} modal darkTitle content={false}>
          <CardContent>
            {props.children}
          </CardContent>
          <Divider />
          <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ px: 2.5, py: 2 }}>
            {isSecondaryButtonShown &&
              <Button color="error" size="small" onClick={props.secondaryButtonAction}>
                {props.secondaryButtonTitle}
              </Button>
            }
            {isPrimaryButtonShown &&
              <Button variant="contained" size="small" onClick={props.primaryButtonAction}>
                {props.primaryButtonTitle}
              </Button>
            }
          </Stack>
        </MainCard>
      </Fade>
    </Modal>
  );
}

export default ModalComponent