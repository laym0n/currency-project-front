import {AuthenticationRequest, AuthenticationService, UserInfoDto} from "./AuthenticationService";
import {injectable} from "inversify";

// @ts-ignore
@injectable()
export class AuthenticationServiceImpl implements AuthenticationService {
    private isAuthenticated = true;

    authenticate(request: AuthenticationRequest): Promise<void> {
        return Promise.resolve(undefined);
    }

    getUser(): UserInfoDto {
        return {login: "login"} as UserInfoDto;
    }

    initialize(): void {
    }

    logOut(): void {
        this.isAuthenticated = false;
    }

    refreshAuthorize(): Promise<void> {
        return Promise.resolve(undefined);
    }

    tryRefreshAuthorize(): Promise<void> {
        return Promise.resolve(undefined);
    }

    userAuthenticated(): boolean {
        return this.isAuthenticated;
    }

}
