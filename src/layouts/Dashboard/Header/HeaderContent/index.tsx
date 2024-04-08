import {Theme} from '@mui/material/styles';
import {Box, useMediaQuery} from '@mui/material';
import Profile from './Profile';
import FullScreen from './FullScreen';
import MobileSection from './MobileSection';
import useConfig from 'hooks/useConfig';
import DrawerHeader from 'layouts/Dashboard/Drawer/DrawerHeader';
import {MenuOrientation} from 'types/config';
import CompanyInfo from "./CompanyInfo.tsx";


const HeaderContent = () => {
    const {menuOrientation} = useConfig();
    const downLG = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));


    return (
        <>
            {menuOrientation === MenuOrientation.HORIZONTAL && !downLG && <DrawerHeader open={true}/>}
            {!downLG && <CompanyInfo/>}
            {downLG && <Box sx={{width: '100%', ml: 1}}/>}
            {!downLG && <FullScreen/>}
            {!downLG && <Profile/>}
            {downLG && <MobileSection/>}
        </>
    );
};

export default HeaderContent;
