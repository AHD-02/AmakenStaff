import React, {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import useIsAuthenticated from 'hooks/useIsAuthenticated';

const AuthGuard = ({children}: { children: React.ReactElement }) => {
    const isAutheneticated = useIsAuthenticated();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!isAutheneticated) {
            navigate('auth/login', {
                state: {
                    from: location.pathname
                },
                replace: true
            });
        }
    }, [isAutheneticated, location.pathname]);

    return children;
};

export default AuthGuard;
