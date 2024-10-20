export type SignInViewController = {
    onSubmitSignIn: (event: React.FormEvent<HTMLFormElement>) => void;
}

const useSignInViewController: () => SignInViewController = () => {
    return {
        onSubmitSignIn: event => {
        }
    } as SignInViewController;
}

export default useSignInViewController;
