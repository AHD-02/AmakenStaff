import { Box, Switch, Typography } from "@mui/material";

interface IProps {
  isChecked: boolean
  onChange: (value: boolean) => void
  label?: string
}

const SwitchComponent = ({isChecked, onChange, label}: IProps) => {
  return (
    <Box display={"flex"} alignItems={"center"}>
      <Typography>
        {label}
      </Typography>

      <Switch
        size={"small"}
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked)}
        inputProps={{'aria-label': 'controlled'}}
      />
    </Box>

  )
}
export default SwitchComponent