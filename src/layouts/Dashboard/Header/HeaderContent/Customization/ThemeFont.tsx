import { ChangeEvent } from "react";
import {
  Box,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import MainCard from "Components/MainCard";
import useConfig from "hooks/useConfig";
import { FontFamily } from "types/config";

const ThemeFont = () => {
  const { fontFamily, onChangeFontFamily } = useConfig();

  const handleFontChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeFontFamily(event.target.value as FontFamily);
  };

  const fonts = [
    {
      id: "inter",
      value: `'Inter', sans-serif`,
      label: "Inter",
    },
    {
      id: "roboto",
      value: `'Roboto', sans-serif`,
      label: "Roboto",
    },
    {
      id: "poppins",
      value: `'Poppins', sans-serif`,
      label: "Poppins",
    },
    {
      id: "public-sans",
      value: `'Public Sans', sans-serif`,
      label: "Public Sans",
    },
  ];

  return (
    <RadioGroup
      row
      aria-label="payment-card"
      name="payment-card"
      value={fontFamily}
      onChange={handleFontChange}
    >
      <Grid container spacing={1.75} sx={{ ml: 0 }}>
        {fonts.map((item, index) => (
          <Grid item key={index}>
            <FormControlLabel
              control={<Radio value={item.value} sx={{ display: "none" }} />}
              sx={{
                display: "flex",
                "& .MuiFormControlLabel-label": { flex: 1 },
              }}
              label={
                <MainCard
                  content={false}
                  sx={{
                    bgcolor:
                      fontFamily === item.value
                        ? "primary.lighter"
                        : "secondary.lighter",
                    p: 1,
                  }}
                  border={false}
                  {...(fontFamily === item.value && {
                    boxShadow: true,
                  })}
                >
                  <Box
                    sx={{
                      minWidth: 60,
                      bgcolor: "background.paper",
                      p: 1,
                      "&:hover": { bgcolor: "background.paper" },
                    }}
                  >
                    <Stack spacing={0.5} alignItems="center">
                      <Typography
                        variant="h5"
                        color="textPrimary"
                        sx={{ fontFamily: item.value }}
                      >
                        Aa
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        {item.label}
                      </Typography>
                    </Stack>
                  </Box>
                </MainCard>
              }
            />
          </Grid>
        ))}
      </Grid>
    </RadioGroup>
  );
};

export default ThemeFont;
