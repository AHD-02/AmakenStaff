import React, {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import {APP_DEFAULT_PATH} from 'config';
import useIsAuthenticated from 'hooks/useIsAuthenticated';

//TODO: return URL

// ==============================|| GUEST GUARD ||============================== //

const GuestGuard = ({children}: { children: React.ReactElement }) => {
    const isAuthenticated: boolean | undefined = useIsAuthenticated();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
         if (isAuthenticated) {
            navigate(location?.state?.from ? location?.state?.from : APP_DEFAULT_PATH, {
                state: {
                    from: ''
                },
                replace: true
            });
        }
    }, [ isAuthenticated, navigate, location]);

    return children;
};

export default GuestGuard;
