// material-ui
// import {useTheme} from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const LogoMain = ({}: { reverse?: boolean }) => {
   // const theme = useTheme();
    return (
        <img src={'/AmakenLogo.png'} alt="Amaken" width="100"/>
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={theme.palette.mode === ThemeMode.DARK ? logoDark : logo} alt="Mantis" width="100" />
         *
         */

    );
};

export default LogoMain;
