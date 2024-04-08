import { Autocomplete, FormControl, Grid, TextField, Typography, } from "@mui/material";
import DropDownProps from "components/dropDownProps";
import { useMemo } from "react";

const Component = (props: DropDownProps) => {
  const {
    options,
    label,
    value,
    onChange,
    error,
    placeholder,
    required = false,
    disableClearable,
    className,
    isDisabled,
    isLoading = false,
    isNotVisible = false
  } = props;
  let selectedOption = useMemo(() => {
    return options?.find((option) => option?.value === value);
  }, [options, value]);
  return (
    <FormControl
      className={className}
      sx={{width: "100%", visibility: isNotVisible ? 'hidden' : 'visible', gap: 1}}
      variant="outlined"
    >
      {label && (
        <Typography
        >
          {label &&
            `${label.charAt(0).toUpperCase() + label.slice(1)}${
              required ? "*" : ""
            }`}
        </Typography>
      )}
      <Grid item xs={12}>
        <Autocomplete
          disableClearable={disableClearable}
          value={selectedOption || null}
          onChange={(_, newValue: any) => onChange(newValue)}
          disabled={isDisabled}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={
                placeholder &&
                `${
                  placeholder?.charAt(0).toUpperCase() +
                  placeholder?.slice(1).toLowerCase()
                }`
              }
              InputLabelProps={{shrink: true}}
              disabled={isDisabled}
            />
          )}
          filterOptions={(options, {inputValue}) =>
            options.filter((option) =>
              option.label.toLowerCase().startsWith(inputValue.toLowerCase())
            )
          }
          options={options}
          getOptionLabel={(option) => option?.label ?? ""}
          loading={isLoading}
        />
      </Grid>
      {error && <Grid item xs={12}>
        <Typography color="error">
          {error}
        </Typography>
      </Grid>}
    </FormControl>
  );
};
export default Component;
