import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled, Theme, useTheme } from "@mui/material/styles";
import {
  Box,
  IconButton,
  IconButtonProps,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { useGetMenuMaster } from "hooks/useMenu";
import { RightOutlined } from "@ant-design/icons";
import { useAppDispatch } from "state/store";
import { logout } from "state/user";
import Avatar from "Components/@extended/Avatar";

interface ExpandMoreProps extends IconButtonProps {
  theme: Theme;
  expand: boolean;
  drawerOpen: boolean;
}

const ExpandMore = styled(IconButton, {
  shouldForwardProp: (prop) =>
    prop !== "theme" && prop !== "expand" && prop !== "drawerOpen",
})(({ theme, expand, drawerOpen }: ExpandMoreProps) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(-90deg)",
  marginLeft: "auto",
  color: theme.palette.secondary.dark,
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  ...(!drawerOpen && {
    opacity: 0,
    width: 50,
    height: 50,
  }),
}));

const NavUser = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const d = useAppDispatch();
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  const handleLogout = async () => {
    d(logout());
    navigate("/");
    window.location.reload();
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        p: 1.25,
        px: !drawerOpen ? 1.25 : 3,
        borderTop: `2px solid ${theme.palette.divider}`,
      }}
    >
      <List disablePadding>
        <ListItem
          disablePadding
          secondaryAction={
            <ExpandMore
              theme={theme}
              expand={open}
              drawerOpen={drawerOpen}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              aria-label="show more"
            >
              <RightOutlined style={{ fontSize: "0.625rem" }} />
            </ExpandMore>
          }
          sx={{
            "& .MuiListItemSecondaryAction-root": {
              right: !drawerOpen ? -20 : -16,
            },
          }}
        >
          <ListItemAvatar>
            <Avatar
              alt="Avatar"
              src={""}
              sx={{ ...(drawerOpen && { width: 46, height: 46 }) }}
            />
          </ListItemAvatar>
          <ListItemText primary={`Ahmad Z`} secondary={"Main Admin"} />
        </ListItem>
      </List>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default NavUser;
