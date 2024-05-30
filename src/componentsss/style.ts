import { Box, Grid, Typography, styled } from "@mui/material";

export const CheckBoxLabel = styled(Typography)(() => ({
  color: "#ABAFB3",
  fontSize: "16px",
}));

export const StyledWizardTableData = styled(Grid)(() => ({
  color: "#6A707E",
  fontSize: "14px",
  fontWeight: 600,
}));

export const TableContainer = styled(Grid)(() => ({
  backgroundColor: "#EDEDED",
  boxShadow: "2px 3px 10px #7777771A",
  borderRadius: "15px",
  padding: "3rem 5rem",
}));

export const StyledStepTitle = styled(Grid)<{ htmlColor?: string }>(
  ({ htmlColor }) => ({
    color: htmlColor ? htmlColor : "#0E777A",
    fontSize: "19px",
    fontWeight: "bold",
  })
);

export const AddIconContainer = styled(Grid)(() => ({
  width: "25px",
  height: "25px",
  background: "white",
  color: "#DD8800",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "0.5rem",
  "&:hover, &.hovered": {
    color: "#0E777A",
  },
}));

export const StyledImage = styled(Grid)<{}>(({ theme }) => ({
  background: theme.palette.secondary?.[100],
  border: `1px dashed ${theme.palette.secondary?.[100]}`,
  borderRadius: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "131px",
  height: "109px",
  cursor: "pointer",
  position: "relative",
  backgroundSize: "cover",
}));

export const ImageGrid = styled(Box)<{
  component: string;
  alt: string;
  src: string;
}>(() => ({
  objectFit: "contain",
  height: "100%",
  width: "100%",
  borderRadius: "16px",
  postion: "absolute",
}));
