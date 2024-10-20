import React, {ReactNode} from "react";
import {darkTheme} from "src/shared/theme"
import Grid from "@mui/material/Grid2";
import useLayoutViewController from "src/pages/layout/LayoutViewController";
import {LayoutContextProvider} from "src/pages/layout/LayoutContext";
import {Menu} from "src/pages/layout/Menu";

type LayoutProperties = {
    children: ReactNode;
}

export function Layout(props: LayoutProperties) {
    return (
        <LayoutContextProvider>
            <LayoutContent {...props}/>
        </LayoutContextProvider>
    );
}

function LayoutContent(properties: LayoutProperties) {
    useLayoutViewController();
    return (
        <Grid spacing={darkTheme.spacing(3)}
              container
              sx={{
                  maxWidth: "1500px",
                  width: "100%",
                  marginLeft: "auto",
                  marginRight: "auto",
              }}
              padding={theme => theme.spacing(1)}
              justifyContent="center"
              alignItems="center">
            <Grid size="auto">
                <Menu/>
            </Grid>
            <Grid size="grow">
                {properties.children}
            </Grid>
        </Grid>
    );
}
