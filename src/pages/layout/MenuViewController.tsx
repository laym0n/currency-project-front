import React, {useCallback, useMemo} from "react";
import {useLayoutContext} from "src/pages/layout/LayoutContext";
import {diContainer, TYPES} from "src/core/config";
import {AuthenticationService} from "src/core/services/authentication";
import {useLocation, useNavigate} from "react-router-dom";
import {DASHBOARD_ENDPOINT, METRICS_ENDPOINT, SETTINGS_ENDPOINT, USERS_ENDPOINT} from "src/shared";

export type MenuViewController = {
    onDashboardClick: (event: React.FormEvent<HTMLButtonElement>) => void,
    onMetricsClick: (event: React.FormEvent<HTMLButtonElement>) => void,
    onUsersClick: (event: React.FormEvent<HTMLButtonElement>) => void,
    onSettingsClick: (event: React.FormEvent<HTMLButtonElement>) => void,
    onLogOutClick: (event: React.FormEvent<HTMLButtonElement>) => void,
    selectedItem: SelectedItem | undefined,
    login: string,
}

export enum SelectedItem {
    USERS,
    METRICS,
    DASHBOARD,
    SETTINGS
}

const useMenuViewController: () => MenuViewController = () => {
    const {setIsAuthenticated} = useLayoutContext();
    let navigate = useNavigate();
    let {pathname} = useLocation();

    const onDashboardClick: (event: React.FormEvent<HTMLButtonElement>) => void = useCallback(() => {
        navigate(DASHBOARD_ENDPOINT)
    }, [navigate])

    const onMetricsClick: (event: React.FormEvent<HTMLButtonElement>) => void = useCallback(() => {
        navigate(METRICS_ENDPOINT)
    }, [navigate])

    const onUsersClick: (event: React.FormEvent<HTMLButtonElement>) => void = useCallback(() => {
        navigate(USERS_ENDPOINT)
    }, [navigate])

    const onSettingsClick: (event: React.FormEvent<HTMLButtonElement>) => void = useCallback(() => {
        navigate(SETTINGS_ENDPOINT)
    }, [navigate])

    const onLogOutClick: (event: React.FormEvent<HTMLButtonElement>) => void = useCallback(() => {
        let authenticationService = diContainer.get<AuthenticationService>(TYPES.AuthenticationService);
        authenticationService.logOut();
        setIsAuthenticated(curValue => !curValue);
    }, [setIsAuthenticated])

    let selectedItem: SelectedItem | undefined = useMemo(() => {
        switch (pathname) {
            case SETTINGS_ENDPOINT:
                return SelectedItem.SETTINGS;
            case DASHBOARD_ENDPOINT:
                return SelectedItem.DASHBOARD;
            case USERS_ENDPOINT:
                return SelectedItem.USERS;
            case METRICS_ENDPOINT:
                return SelectedItem.METRICS;
            default:
                return undefined;
        }
    }, [pathname])
    return {
        onDashboardClick: onDashboardClick,
        onMetricsClick: onMetricsClick,
        onUsersClick: onUsersClick,
        onSettingsClick: onSettingsClick,
        onLogOutClick: onLogOutClick,
        selectedItem: selectedItem,
        login: "login"
    } as MenuViewController;
}

export default useMenuViewController;
