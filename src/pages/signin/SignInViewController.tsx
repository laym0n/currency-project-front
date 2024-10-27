import {diContainer, TYPES} from "src/core/config";
import {AuthenticationRequest, AuthenticationService} from "src/core/services/authentication";
import {useNavigate} from "react-router-dom";
import {USERS_ENDPOINT} from "src/shared";

export type SignInViewController = {
    onSubmitSignIn: (event: React.FormEvent<HTMLFormElement>) => void;
}

const useSignInViewController: () => SignInViewController = () => {
    let authenticationService = diContainer.get<AuthenticationService>(TYPES.AuthenticationService);
    let navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let request: AuthenticationRequest = {
            login: data.get('login')!!.toString(),
            password: data.get('password')!!.toString(),
        }
        authenticationService.authenticate(request)
            .then(() => {
                navigate(USERS_ENDPOINT)
            });

    };
    return {
        onSubmitSignIn: handleSubmit
    } as SignInViewController;
}

export default useSignInViewController;
