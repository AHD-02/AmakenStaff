import { Grid } from "@mui/material";
import { ReactNode } from "react";
import { DataTypo, StyledDataSection } from "./detailsComponent/styles";

type IProps = {
  label?: string;
  value?: string;
  icon?: ReactNode;
  istransparent?: boolean;
  valueFontSize?: string;
};

const DataWidget = ({
  label,
  icon,
  value,
  istransparent = false,
  valueFontSize,
}: IProps) => {
  return (
    <Grid item container>
      <Grid item xs={12} marginBottom={"5px"}>
        {label && <DataTypo>{label}</DataTypo>}
      </Grid>
      <StyledDataSection
        item
        container
        justifyContent={"space-between"}
        istransparent={istransparent}
      >
        <Grid item xs={10}>
          <DataTypo valueFontSize={valueFontSize}>{value ?? "-"}</DataTypo>
        </Grid>
        {icon && (
          <Grid item container xs={2} justifyContent={"flex-end"}>
            {icon}
          </Grid>
        )}
      </StyledDataSection>
    </Grid>
  );
};
export default DataWidget;
