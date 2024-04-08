import { Grid, Typography, styled } from "@mui/material";

export const CheckBoxLabel = styled(Typography)(() => ({
  color: "#ABAFB3",
  fontSize: "16px",
}));

export const StyledWizardTableData = styled(Grid)(() => ({
  color: "#6A707E",
  fontSize: "14px",
  fontWeight: 600
}));

export const TableContainer = styled(Grid)(() => ({
  backgroundColor: "#EDEDED",
  boxShadow: "2px 3px 10px #7777771A",
  borderRadius: "15px",
  padding: "3rem 5rem",
}));