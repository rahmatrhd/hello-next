export interface Auth {
    login: () => void;
    logout: () => void;
    isLoggedIn: () => boolean;
}

export class AuthService implements Auth {
    authKey: string
    constructor(authKey: string) {
        this.authKey = authKey
    }

    login = () => {
        window.localStorage.setItem(this.authKey, '1');
    }

    logout = () => {
        window.localStorage.setItem(this.authKey, '0');
    }

    isLoggedIn = () => {
        return window.localStorage.getItem(this.authKey) === '1'
    }
}

export default new AuthService('pokemon_is_logged_in');