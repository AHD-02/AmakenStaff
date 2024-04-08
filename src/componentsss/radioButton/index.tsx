import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { RadioButtonOptionsType } from "types";


interface IProps {
  title?: string;
  value: string | number | boolean;
  handleChange: (value: string) => void;
  options: Array<RadioButtonOptionsType>;
  isHorizontal?: boolean;
}

const RadioButtonInput = (props: IProps) => {
  return (
    <FormControl>
      {props?.title && <FormLabel id="demo-controlled-radio-buttons-group">
        {props.title}
      </FormLabel>}
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={props.value}
        onChange={(e) => props.handleChange(e.target.value)}
        row={props?.isHorizontal ?? false}
      >
        {props.options?.map((x) => (
          <FormControlLabel
            key={x.value?.toString()}
            sx={{ marginTop: "10px", paddingInline: "3px" }}
            value={x.value}
            control={<Radio />}
            label={
              <div style={{ display: "grid" }}>
                <span>
                  {x.label}
                </span>
                {x?.description && <span>
                  {x.description}
                </span>}
              </div>
            }
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default RadioButtonInput;
