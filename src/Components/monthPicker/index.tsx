import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Typography } from "@mui/material";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

interface IProps {
  label: string;
  value: string;
  handleChange: (value: string) => void;
  error?: string;
}

const MonthDatePicker = ({ handleChange, label, value, error }: IProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        <DatePicker
          label={label}
          openTo="month"
          views={["month", "day"]}
          sx={{ width: "100%" }}
          value={dayjs.utc(value)}
          onChange={(val) => handleChange(val?.toString() ?? "")}
        />
        {error && (
          <Typography color={"error"} visibility={error ? "visible" : "hidden"}>
            {error}
          </Typography>
        )}
      </DemoContainer>
    </LocalizationProvider>
  );
};
export default MonthDatePicker;
