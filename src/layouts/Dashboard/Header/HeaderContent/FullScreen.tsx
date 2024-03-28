import { useCallback, useState } from "react";
import { Box, Tooltip } from "@mui/material";
import IconButton from "Components/@extended/IconButton";
import { FullscreenExitOutlined, FullscreenOutlined } from "@ant-design/icons";

const FullScreen = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
    if (document && !document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }, []);

  const iconBackColorOpen = "grey.100";
  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <Tooltip title={open ? "Exit Fullscreen" : "Fullscreen"}>
        <IconButton
          color="secondary"
          variant="light"
          sx={{
            color: "text.primary",
            bgcolor: open ? iconBackColorOpen : "transparent",
          }}
          aria-label="fullscreen toggler"
          onClick={handleToggle}
        >
          {open ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default FullScreen;
