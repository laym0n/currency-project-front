export interface AuthenticationService {
    userAuthenticated(): boolean;

    authenticate(request: AuthenticationRequest): Promise<void>;

    refreshAuthorize(): Promise<void>;

    tryRefreshAuthorize(): Promise<void>;

    logOut(): void;

    initialize(): void;

    getUser(): UserInfoDto;
}

export type UserInfoDto = {
    login: string
}

export type AuthenticationRequest = {
    login: string,
    password: string,
}