import React from "react";

import {Stack} from "@mui/material";
import useMainViewController from "src/pages/users/UsersViewController";
import {Layout} from "src/pages/layout";
import {SnackbarProvider} from "notistack";
import {UsersTable} from "src/pages/users/UsersTable";
import Typography from "@mui/material/Typography";

export function UsersPage() {
    return (
        <Layout>
            <SnackbarProvider maxSnack={5}>
                <SearchPageContent/>
            </SnackbarProvider>
        </Layout>
    );
}

export function SearchPageContent() {
    useMainViewController();
    return (
        <Stack>
            <Typography textAlign="center" variant="h1">Users</Typography>
            <UsersTable/>
        </Stack>
    );
}
