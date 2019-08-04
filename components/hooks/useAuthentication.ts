import { useState, useEffect } from 'react';
import authService from '../../services/auth';

export interface Authentication {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

const useAuthentication = (): Authentication => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(authService.isLoggedIn());
    }, []);
    
    useEffect(() => {
        if (isLoggedIn) {
          authService.login();
        } else {
          authService.logout();
        }
    }, [isLoggedIn]);

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return {
        isLoggedIn,
        login,
        logout,
    };
}

export default useAuthentication