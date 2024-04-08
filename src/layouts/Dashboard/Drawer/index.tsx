import {useMemo} from 'react';

// material-ui
import {useTheme} from '@mui/material/styles';
import {Box, Drawer, useMediaQuery} from '@mui/material';

// project import
import DrawerHeader from './DrawerHeader';
import DrawerContent from './DrawerContent';
import MiniDrawerStyled from './MiniDrawerStyled';

import {DRAWER_WIDTH} from 'config';
import {useGetMenuMaster, useHandlerDrawerOpen} from 'hooks/useMenu';

// ==============================|| MAIN LAYOUT - DRAWER ||============================== //

interface Props {
    window?: () => Window;
}

const MainDrawer = ({window}: Props) => {
    const theme = useTheme();
    const {menuMaster} = useGetMenuMaster();
    const drawerOpen = menuMaster.isDashboardDrawerOpened;
    const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
    const handlerDrawerOpen = useHandlerDrawerOpen()
    // responsive drawer container
    const container = window !== undefined ? () => window().document.body : undefined;
    //const {allContent, firstSectionContent} = useAppRoutes();


    // header content todo check memmo
    //const drawerContent = useMemo(() => <DrawerContent/>, [allContent, firstSectionContent]); //todo 
    const drawerHeader = useMemo(() => <DrawerHeader open={drawerOpen}/>, [drawerOpen]);

    //Reham Elbatal
    return (
        <Box component="nav" sx={{flexShrink: {md: 2}, zIndex: 1200}} aria-label="mailbox folders">
            {!matchDownMD ? (
                <MiniDrawerStyled variant="permanent" open={drawerOpen}>
                    {drawerHeader}
                    <DrawerContent/>
                </MiniDrawerStyled>
            ) : (
                <Drawer
                    container={container}
                    variant="temporary"
                    open={drawerOpen}
                    onClose={() => handlerDrawerOpen(!drawerOpen)}
                    ModalProps={{keepMounted: true}}
                    sx={{
                        display: {xs: 'block', lg: 'none'},
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: DRAWER_WIDTH,
                            borderRight: `1px solid ${theme.palette.divider}`,
                            backgroundImage: 'none',
                            boxShadow: 'inherit'
                        }
                    }}
                >

                    {drawerHeader}
                    <DrawerContent/>
                </Drawer>
            )}
        </Box>
    );
};

export default MainDrawer;
