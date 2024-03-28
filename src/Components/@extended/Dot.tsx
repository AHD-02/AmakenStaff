import {Theme, useTheme} from '@mui/material/styles';
import {Box} from '@mui/material';
import {ColorProps} from 'types/extended';
import getColors from 'utils/getColors';
import {SxProps} from "@mui/system";

interface Props {
    color?: ColorProps;
    size?: number;
    variant?: string;
    sx?: SxProps<Theme>;
}

const DotComponent = ({color, size, variant, sx}: Props) => {
    const theme = useTheme();
    const colors = getColors(theme, color || 'primary');
    const {main} = colors;

    return (
        <Box
            component="span"
            sx={{
                width: size || 8,
                height: size || 8,
                borderRadius: '50%',
                bgcolor: variant === 'outlined' ? '' : main,
                ...(variant === 'outlined' && {
                    border: `1px solid ${main}`
                }),
                ...sx
            }}
        />
    );
};

export default DotComponent;
