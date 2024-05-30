import { Button, Grid } from "@mui/material";
import {
  DetailsContainer,
  DetailsGrid,
  DetailsTitle,
  SecondaryBottonContainer,
  VLine,
  BottonContainer,
} from "./styles";

interface IProps {
  startSize?: number;
  startTitle: string;
  startContent: React.ReactNode;
  endSize?: number;
  endTitle: string;
  endContent: React.ReactNode;
  primaryAction?: () => void;
  primaryTitle?: string;
  secondaryAction?: () => void;
  secondaryTitle?: string;
  customStyle?: React.CSSProperties;
  isWithSecondSection?: boolean;
}

const DetailsComponent = ({
  startSize,
  startTitle,
  customStyle,
  startContent,
  endSize,
  endTitle,
  endContent,
  primaryAction,
  primaryTitle,
  secondaryAction,
  secondaryTitle,
  isWithSecondSection = true,
}: IProps) => {
  return (
    <DetailsContainer item container xs={12}>
      <DetailsGrid item container isFitContent xs={12} md={startSize ?? 7}>
        <Grid item xs={12}>
          <DetailsTitle>{startTitle}</DetailsTitle>
        </Grid>
        <Grid item xs={12} md={startSize ?? 12} margin="0.625rem">
          {startContent}
        </Grid>

        <SecondaryBottonContainer
          item
          container
          xs={12}
          md={endSize ?? 12}
          style={customStyle}
          justifyContent={"flex-end"}
        >
          <Grid item>
            {secondaryAction && !isWithSecondSection && (
              <Button onClick={secondaryAction} type="button">
                {secondaryTitle}
              </Button>
            )}
          </Grid>
          <Grid item>
            {primaryAction && !isWithSecondSection && (
              <Button onClick={primaryAction} type="button">
                {primaryTitle}
              </Button>
            )}
          </Grid>
        </SecondaryBottonContainer>
      </DetailsGrid>
      {isWithSecondSection && (
        <>
          <VLine />
          <DetailsGrid item container isFitContent xs={12} md={endSize ?? 4.9}>
            <Grid item md={6} xs={12}>
              <DetailsTitle>{endTitle}</DetailsTitle>
            </Grid>
            <Grid item xs={12} md={endSize ?? 12} margin="0.625rem">
              {endContent}
            </Grid>
            <BottonContainer
              item
              container
              xs={12}
              style={customStyle}
              justifyContent={"flex-end"}
            >
              <Grid
                item
                container
                xs={12}
                justifyContent={"flex-end"}
                columnGap={"1rem"}
              >
                {secondaryAction && (
                  <Button onClick={secondaryAction} type="button">
                    {secondaryTitle}
                  </Button>
                )}
                {primaryAction && (
                  <Button onClick={secondaryAction} type="button">
                    {primaryTitle}
                  </Button>
                )}
              </Grid>
            </BottonContainer>
          </DetailsGrid>
        </>
      )}
    </DetailsContainer>
  );
};

export default DetailsComponent;
