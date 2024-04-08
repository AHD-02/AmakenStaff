import { Box, ListItemAvatar, ListItemText } from "@mui/material";
import Avatar from "components/@extended/Avatar";

const CompanyInfo = () => {
  return (
    <Box
      sx={{
        width: "100%",
        ml: { xs: 0, md: 1 },
        display: "flex",
        alignItems: "center",
      }}
    >
      <ListItemAvatar>
        <Avatar
          alt="Avatar"
          src={''}
          sx={{ ...(true && { width: 46, height: 46 }) }}
        />
      </ListItemAvatar>
      <ListItemText primary={'Item'} />
    </Box>
  );
};

export default CompanyInfo;
