import {useEffect} from "react";
import {useLayoutContext} from "src/pages/layout/LayoutContext";
import {useNavigate} from "react-router-dom";

export type LayoutViewController = {}

const useLayoutViewController: () => LayoutViewController = () => {
    const layoutContext = useLayoutContext();
    let navigate = useNavigate();
    useEffect(() => {
        if (!layoutContext.isAuthenticated) {
            navigate("/sign-in")
        }
    }, [navigate, layoutContext.isAuthenticated]);
    return {} as LayoutViewController;
}

export default useLayoutViewController;
