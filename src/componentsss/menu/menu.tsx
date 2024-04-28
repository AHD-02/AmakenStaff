import { useState } from "react";
import { Menu, MenuItem, Grid, IconButton } from "@mui/material";
import MenuProps from "libs/menuProps";

const MenuComponent = (props: MenuProps) => {
  const { items, icon, onClick } = props;
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const resolveColor = (label: string) => {
  // 	switch (label) {
  // 		case "Delete":
  // 		case "Remove From Company":
  // 			return theme.palette.error.light;
  // 		default:
  // 			theme.palette.text.secondary;
  // 	}
  // };

  return (
    <Grid>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {icon}
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {items?.map((item, index) => (
          <MenuItem
            key={`${item?.label}-${index}`}
            value={item?.value}
            onClick={() => {
              onClick(item.value);
              handleClose();
            }}
          >
            {item?.label}
          </MenuItem>
        ))}
      </Menu>
    </Grid>
  );
};
export default MenuComponent;
