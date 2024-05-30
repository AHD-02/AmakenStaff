import { AddRounded } from "@mui/icons-material";
import { Grid, Button } from "@mui/material";
import { AddIconContainer, StyledStepTitle } from "componentsss/style";

interface IProps {
  title: string;
  buttonTitle?: string;
  onClick?: () => void;
}

const AboveHeaderComponent = ({ buttonTitle, onClick, title }: IProps) => {
  return (
    <Grid item container justifyContent={"space-between"} alignItems={"center"}>
      <StyledStepTitle xs={"auto"}>{title}</StyledStepTitle>

      {buttonTitle && (
        <Grid item xs={"auto"}>
          <Button
            onClick={() => onClick?.()}
            startIcon={
              <AddIconContainer item container>
                <AddRounded fontSize="inherit" />
              </AddIconContainer>
            }
          >
            {buttonTitle}
          </Button>
        </Grid>
      )}
    </Grid>
  );
};
export default AboveHeaderComponent;
