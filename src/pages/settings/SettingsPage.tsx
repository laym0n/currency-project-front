import React from "react";

import {Stack} from "@mui/material";
import useUsersViewController from "src/pages/users/UsersViewController";
import {Layout} from "src/pages/layout";
import {SnackbarProvider} from "notistack";
import Typography from "@mui/material/Typography";
import {PluginsPaper} from "src/pages/settings/PluginsPaper";

export function SettingsPage() {
    return (
        <Layout>
            <SnackbarProvider maxSnack={5}>
                <SettingsPageContent/>
            </SnackbarProvider>
        </Layout>
    );
}

export function SettingsPageContent() {
    useUsersViewController();
    return (
        <Stack>
            <Typography textAlign="center" variant="h1">Settings</Typography>
            <PluginsPaper/>
        </Stack>
    );
}
