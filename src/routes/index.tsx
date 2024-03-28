import {createBrowserRouter} from 'react-router-dom';
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';


const router = createBrowserRouter(
    [
        LoginRoutes,
        MainRoutes
    ],
    {basename: "/"}
);

export default router;
