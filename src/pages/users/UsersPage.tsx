import React from "react";

import {Paper} from "@mui/material";
import useMainViewController from "src/pages/users/UsersViewController";
import {Layout} from "src/pages/layout";
import {SnackbarProvider} from "notistack";

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
        <Paper>some</Paper>
    );
}
