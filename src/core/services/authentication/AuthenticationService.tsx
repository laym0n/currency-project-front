export interface AuthenticationService {
    userAuthenticated(): boolean;

    authenticate(request: AuthenticationRequest): Promise<void>;

    logOut(): void;
}

export type UserInfoDto = {
    login: string
}

export type AuthenticationRequest = {
    login: string,
    password: string,
}