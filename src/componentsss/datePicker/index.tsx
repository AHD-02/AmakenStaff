import { TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { DateTimeFormatter } from "utils/DatetimeUtil";

interface DatePickerProps {
  label: string;
  inputFormat?: string;
  handleChange: (value: string) => any;
  value: Date | undefined | string;
  error?: string;
  disabled?: boolean;
  min?: Date;
  max?: Date;
  placeholder?: string;
  customStyle?: React.CSSProperties;
}

const Component = (props: DatePickerProps) => {
  const {
    label,
    error,
    value,
    customStyle,
    handleChange,
    disabled,
    min,
    max,
    placeholder,
  } = props;

  const { getFormattedDateForDatePicker } = DateTimeFormatter;
  return (
    <Stack spacing={1}>
      {Boolean(label) && (
        <Typography>
          {label &&
            `${
              label.toString().charAt(0).toUpperCase() +
              label.toString().slice(1)
            }`}
        </Typography>
      )}
      <TextField
        style={customStyle}
        id="date"
        fullWidth
        type="date"
        value={value ? getFormattedDateForDatePicker(value?.toString()) : ""}
        InputProps={{
          sx: {
            width: "100%",
            height: "40px",
          },
        }}
        onChange={(e) => handleChange(e.target.value)}
        InputLabelProps={{ shrink: true }}
        disabled={disabled}
        inputProps={{
          min: min?.toISOString().split("T")[0],
          max: max?.toISOString().split("T")[0],
        }}
        placeholder={placeholder}
      />
      {error && (
        <Typography color={"error"} visibility={error ? "visible" : "hidden"}>
          {error}
        </Typography>
      )}
    </Stack>
  );
};

export default Component;
