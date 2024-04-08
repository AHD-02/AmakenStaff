import { Checkbox, Grid, Typography } from "@mui/material";
import { CheckBoxLabel } from "componentsss/style";

interface CheckboxProps {
  name: string
  onClick: (value: boolean) => void
  isChecked: boolean
  isDisabled?: boolean
  children?: React.ReactNode | string
  label?: string
  error?: string
  isLabelOnTheLeft?: boolean
}

const Component = (props: CheckboxProps) => {
  const {
    name,
    isChecked,
    onClick,
    isDisabled = false,
    children,
    label,
    error,
    isLabelOnTheLeft = false,
  } = props;

  return (
    <Grid item container>
      <Grid
        item
        container
        xs={12}
        gap="0.5rem"
        flexWrap="nowrap"
        alignItems={"flex-start"}
        {...(isLabelOnTheLeft
          ? {
              flexDirection: "row-reverse",
              justifyContent: "space-between",
            }
          : {})}
      >
        <Checkbox
          name={name}
          sx={{
            padding: "0px",
            margin: "0px",
            "&.MuiCheckbox-root": {
              color: "#00000029",
              alignSelf: 'center'
            },
            "&.Mui-checked": {
              color: "#0E777A",
            },
          }}
          checked={isChecked}
          onChange={(event) => onClick(event.target.checked)}
          disabled={isDisabled}
        />
        {label ? <CheckBoxLabel alignSelf='center'>{label}</CheckBoxLabel> : children}
      </Grid>
      <Grid item xs={12}>
        <Typography color={"error"} visibility={error ? "visible" : "hidden"}>
          {error}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Component;
