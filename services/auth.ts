import { Cookies } from 'react-cookie';

export interface Auth {
    cookies: Cookies;
    login: () => void;
    logout: () => void;
    isLoggedIn: () => boolean;
}

export class AuthService implements Auth {
    cookies: Cookies
    constructor(cookies: Cookies) {
        this.cookies = cookies
    }

    _isClientSide = () => typeof window !== undefined

    login = () => {
        if (this._isClientSide()) {
            this.cookies.set('token', '🤘');
        }
    }

    logout = () => {
        if (this._isClientSide()) {
            this.cookies.remove('token');
        }
    }

    isLoggedIn = () => {
        if (this._isClientSide()) {
            return this.cookies.get('token') === '🤘';
        }

        return false;
    }
}

export default new AuthService(new Cookies());