import {Outlet} from 'react-router-dom';
import GuestGuard from 'routes/route-guard/GuestGuard';

const AuthLayout = () => (
    <GuestGuard>
        <Outlet/>
    </GuestGuard>
);

export default AuthLayout;
