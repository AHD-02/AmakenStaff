import { Divider, Grid, Typography, styled } from "@mui/material";

export const DetailsContainer = styled(Grid)(() => ({
  border: `1px solid #f0fdfb`,
  borderRadius: "14px",
  marginBottom: "2rem",
}));

export const DetailsTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "1.2em",
  fontWeight: 600,
  marginTop: "0.25rem",
}));

export const DetailsGrid = styled(Grid)<{ isFitContent: boolean }>(
  ({ isFitContent }) => ({
    padding: "1rem",
    flexWrap: "wrap",
    height: isFitContent ? "fit-content" : "",
  })
);

export const BottonContainer = styled(Grid)(() => ({
  marginTop: "auto",
}));

export const SecondaryBottonContainer = styled(Grid)(() => ({
  marginTop: "1rem",
  gap: "1rem",
}));

export const VLine = styled(Grid)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.secondary[500]}`,
}));

export const StyledDataSection = styled(Grid)<{ istransparent?: boolean }>(
  ({ istransparent }) => ({
    borderRadius: "13px",
    minHeight: "55px",
    backgroundColor: !istransparent ? "#FAF9F6" : "transparent",
    width: "100%",
    padding: "16px",
    alignItems: "center",
    border: istransparent ? "1px solid #E3E4E8" : "none",
  })
);

export const DataTypo = styled(Typography)<{ valueFontSize?: string }>(
  ({ valueFontSize }) => ({
    color: "#212121",
    fontWeight: 600,
    fontSize: valueFontSize ? valueFontSize : "12px",
  })
);

export const ShadowedCard = styled(Grid)(() => ({
  borderRadius: "17px",
  backgroundColor: "white",
  padding: "16px",
  gap: "16px",
  boxShadow: "0px 3px 41px rgba(4, 6, 15, 0.05)",
}));

export const HDivider = styled(Divider)(() => ({
  color: "#E0E0E0",
  width: "100%",
}));
