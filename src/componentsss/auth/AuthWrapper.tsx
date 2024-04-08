import { ReactNode } from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import AuthCard from './AuthCard';
import AuthBackground from 'assets/images/auth/AuthBackground';
import { Theme } from '@mui/system';

interface Props {
    children: ReactNode;
}

const AuthWrapper = ({ children }: Props) => {
    const isMobile: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

    return (
        <Grid item container xs={12} sx={{ minHeight: '100vh' }}>
            {!isMobile && <Grid item xs={12} md={5}>
                <AuthBackground />
            </Grid>}
            <Grid
                item
                container
                xs={12}
                md={7}
                height='100vh'
            >
                <Grid
                    item
                    xs={12}
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={{ minHeight: { xs: 'calc(100vh - 210px)', sm: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
                >
                    <Grid item>
                        <AuthCard>{children}</AuthCard>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default AuthWrapper;
