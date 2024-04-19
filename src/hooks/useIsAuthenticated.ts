import {useTypedSelector} from 'state/store';

const useIsAuthenticated = () => {
    const isAuthenticated = useTypedSelector(
        (state) => state.user?.isAuthenticated
    );
    return isAuthenticated;
};

export default useIsAuthenticated;