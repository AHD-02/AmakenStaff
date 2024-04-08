import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import IconButton from '@mui/material/IconButton';

interface IconButtonProps {
  icon:ReactJSXElement;
  onClick:()=>void
  color?:"inherit" | "primary" | "default" | "secondary" | "error" | "info" | "success" | "warning";
  //Change this later
  style?:  any;
}

const IconButtonComponent = (props: IconButtonProps) => {
    const {icon,color,onClick, style} = props;
  return (
      <IconButton 
      color={color} 
      aria-label="icon-button" 
      onClick={onClick}
      style={style}
      >
       {icon}
      </IconButton>
  );
}
export default IconButtonComponent;