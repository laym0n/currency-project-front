import {AuthenticationRequest, AuthenticationService} from "./AuthenticationService";
import {injectable} from "inversify";
import {AuthClient} from "src/api/api-auth/generated";

// @ts-ignore
@injectable()
export class AuthenticationServiceImpl implements AuthenticationService {
    private IS_AUTHENTICATED = "IS_AUTHENTICATED"

    authenticate(request: AuthenticationRequest): Promise<void> {
        return AuthClient.auth(request).then(value => {
            localStorage[this.IS_AUTHENTICATED] = true
        })
    }

    logOut(): void {
        localStorage[this.IS_AUTHENTICATED] = false
    }

    userAuthenticated(): boolean {
        return localStorage[this.IS_AUTHENTICATED];
    }

}
