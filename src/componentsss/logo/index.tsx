import {Link} from 'react-router-dom';
import {To} from 'history';

// material-ui
import {ButtonBase} from '@mui/material';
import {SxProps} from '@mui/system';

// project import
import {APP_DEFAULT_PATH} from 'config';
import useIsAuthenticated from 'hooks/useIsAuthenticated';

// ==============================|| MAIN LOGO ||============================== //

interface Props {
    reverse?: boolean;
    isIcon?: boolean;
    sx?: SxProps;
    to?: To;
}

const LogoSection = ({ isIcon, sx, to}: Props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <ButtonBase disableRipple {...(isAuthenticated && {component: Link, to: !to ? APP_DEFAULT_PATH : to, sx})}>
            {isIcon ? <img style={{width: 50}} src={"/AmakenLogo.png"}/> :
                <img style={{width: 50}} src={"/AmakenLogo.png"}/>}
        </ButtonBase>
    );
};

export default LogoSection;
