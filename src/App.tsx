import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import {UsersPage} from "src/pages/users";
import SignInPage from "src/pages/signin/SignInPage";
import {darkTheme} from "src/shared/theme";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import initialize from "src/core/config/Config";
import {DASHBOARD_ENDPOINT, SETTINGS_ENDPOINT, SIGN_IN_ENDPOINT, USERS_ENDPOINT} from "src/shared";
import {SettingsPage} from "src/pages/settings";

initialize();

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <BrowserRouter>
                <Routes>
                    <Route path={SIGN_IN_ENDPOINT} element={<SignInPage/>}/>
                    <Route path={USERS_ENDPOINT} element={<UsersPage/>}/>
                    <Route path={DASHBOARD_ENDPOINT} element={<UsersPage/>}/>
                    <Route path={SETTINGS_ENDPOINT} element={<SettingsPage/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
