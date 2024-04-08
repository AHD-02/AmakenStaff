import {Outlet} from 'react-router-dom';
import GuestGuard from 'utils/route-guard/GuestGuard';


const AuthLayout = () => (
    <GuestGuard>
        <Outlet/>
    </GuestGuard>
);

export default AuthLayout;
