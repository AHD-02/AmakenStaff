import {
  StyledTitle,
  uploaderModalMobileStyle,
  uploaderModalStyle,
} from "./styles";
import { Box, Button, Grid, Modal, Theme, useMediaQuery } from "@mui/material";

interface ModalProps {
  children: JSX.Element;
  isOpen: boolean;
  onClose?: () => void;
  primaryButtonTitle?: string;
  primaryButtonAction?: () => void;
  primaryButtonIsDisabled?: boolean;
  secondaryButtonTitle?: string;
  secondaryButtonAction?: () => void;
  secondaryButtonIsDisabled?: boolean;
  title?: string;
  customWidth?: string | number;
}

const Component = (props: ModalProps) => {
  const {
    children,
    isOpen,
    onClose,
    primaryButtonAction,
    primaryButtonTitle,
    secondaryButtonAction,
    secondaryButtonTitle,
    primaryButtonIsDisabled = false,
    secondaryButtonIsDisabled = false,
    title,
    customWidth,
  } = props;
  const mobileView = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const handleClose = () => {
    onClose && onClose();
  };

  return (
    <Modal open={isOpen ?? false} onClose={handleClose}>
      <Grid
        item
        container
        {...(mobileView
          ? {
              sx: uploaderModalMobileStyle,
            }
          : {
              sx: uploaderModalStyle,
              ...{ ...(customWidth ? { style: { width: customWidth } } : {}) },
            })}
      >
        {Boolean(props.onClose) && (
          <Grid
            item
            container
            md={12}
            alignItems="center"
            justifyContent={"flex-end"}
          >
            <Box
              component="img"
              onClick={handleClose}
              sx={{
                objectFit: "inherit",
                height: "5x",
                cursor: "pointer",
                marginBottom: "10px",
              }}
              alt=""
              src={"/close.svg"}
            />
          </Grid>
        )}

        <Grid item container marginX={"3rem"}>
          {title && <StyledTitle> {title}</StyledTitle>}
        </Grid>

        <Grid item container marginX={"4rem"}>
          {children}
        </Grid>

        <Grid
          item
          container
          xs={12}
          justifyContent="center"
          gap={"10px"}
          marginTop={"15px"}
        >
          <Grid item md={4}>
            <Button
              onClick={primaryButtonAction}
              disabled={primaryButtonIsDisabled}
              style={{ width: "100%" }}
            >
              {primaryButtonTitle}
            </Button>
          </Grid>
          <Grid item md={4}>
            <Button
              style={{ width: "100%" }}
              disabled={secondaryButtonIsDisabled}
              variant={"outlined"}
              onClick={secondaryButtonAction}
            >
              {secondaryButtonTitle}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default Component;
