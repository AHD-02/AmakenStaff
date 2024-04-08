// material-ui
import { Box } from '@mui/material';

// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {

  return (
    <Box
      boxShadow={"1"}
      sx={{
        backgroundSize: "contain",
        position: "sticky",
        background: "url(/login-bg.png)no-repeat padding-box",
      }}
      px={13}
      bgcolor={"#0E777A10"}
      height={"100vh"}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "#0E777A21",
        }}
      />
      <Box
        component="img"
        sx={{
          objectFit: "contain",
          width: 220,
          height: "200px",
        }}
        alt="shanab"
        src={"/AmakenLogo.png"}
      />
    </Box>
  );
};

export default AuthBackground;
