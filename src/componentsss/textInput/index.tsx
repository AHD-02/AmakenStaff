import {
  FormHelperText,
  OutlinedInput,
  OutlinedInputProps,
  Stack,
  Typography,
} from "@mui/material";

type Props = {
  errorText?: string;
  handleChange?: (val: string, name?: string) => void;
} & OutlinedInputProps;

const TextInput = (props: Props) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    props.handleChange?.(e.target.value, e.target.name);
    props.onChange?.(e);
  };

  return (
    <Stack spacing={1} width={"100%"}>
      {Boolean(props.label) && (
        <Typography>
          {props.label &&
            `${
              props.label.toString().charAt(0).toUpperCase() +
              props.label.toString().slice(1)
            }${props.required ? "*" : ""}`}
        </Typography>
      )}
      <OutlinedInput
        {...props}
        fullWidth
        error={Boolean(props.error) || Boolean(props.errorText)}
        label={undefined}
        name={props.name}
        onChange={handleChange}
        placeholder={props.placeholder}
      />
      {props.errorText && (
        <FormHelperText error>{props.errorText}</FormHelperText>
      )}
    </Stack>
  );
};

export default TextInput;
