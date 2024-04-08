// material-ui
import { Button, CardMedia, Link, Stack, Typography } from "@mui/material";

// project import
import MainCard from "components/MainCard";

// assets
import avatar from "assets/images/users/avatar-group.png";
import AnimateButton from "components/@extended/AnimateButton";

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const NavCard = () => {

  return (
    <MainCard sx={{ bgcolor: "grey.50", m: 3 }}>
      <Stack alignItems="center" spacing={2.5}>
        <CardMedia component="img" image={avatar} />
        <Stack alignItems="center">
          <Typography variant="h5">{'Help?'}</Typography>
          <Typography variant="h6" color="secondary">
            {'Get to resolve'}
          </Typography>
        </Stack>
        <AnimateButton>
          <Button
            variant="shadow"
            size="small"
            component={Link}
            href="mailto:info@Amaken.com"
          >
            {'Support'}
          </Button>
        </AnimateButton>
      </Stack>
    </MainCard>
  );
};
export default NavCard;
