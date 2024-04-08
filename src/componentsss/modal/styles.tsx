import { styled, Box } from "@mui/material";

export const uploaderModalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'white',
  p: 4,
  maxHeight: '95%',
  overflowY: 'auto',
  borderRadius: "25px",
  boxShadow: "5px 10px 6px #00000029"
};

export const uploaderModalMobileStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: "5px 10px 6px #00000029",
  p: 1,
  maxHeight: '95%',
  borderRadius: '25px',
};

export const StyledTitle = styled(Box)<{}>(({ theme }) => ({
	color: theme.palette.primary.main,
	fontWeight: "700",
	fontSize: "1.375rem",

}));
export const StyledCheckInOut = styled(Box)<{}>(() => ({
  borderRadius:'10px',
  display:'flex',
  alignItems:'center',
  columnGap:'.5rem',
  backgroundColor:'#EAF6F7',
  padding:'.5rem 1rem',
  width:'290px',
  boxShadow:' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  cursor:'pointer',
}))
