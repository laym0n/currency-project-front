import React from "react";
import {Chip, Paper, Stack, SxProps, Theme} from "@mui/material";
import {darkTheme} from "../../shared/theme";
import useMenuViewController, {SelectedItem} from "src/pages/layout/MenuViewController";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function Menu() {
    let viewController = useMenuViewController();
    let buttonStyles: SxProps<Theme> = {
        padding: theme => theme.spacing(2)
    }
    return (
        <Grid sx={{width: "200px"}} spacing={darkTheme.spacing(2)}>
            <Stack spacing={darkTheme.spacing(2)}>
                <Chip sx={{
                    padding: theme => theme.spacing(3),
                    background: theme => theme.palette.background.paper
                }}
                      icon={<AccountCircleIcon/>} label={viewController.login}/>
                <Paper>
                    <Stack>
                        <Button onClick={viewController.onDashboardClick}
                                sx={buttonStyles}
                                variant={viewController.selectedItem === SelectedItem.DASHBOARD ? "contained" : "text"}
                                color={viewController.selectedItem === SelectedItem.DASHBOARD ? "primary" : "secondary"}>Dashboard</Button>
                        <Button onClick={viewController.onUsersClick}
                                sx={buttonStyles}
                                variant={viewController.selectedItem === SelectedItem.USERS ? "contained" : "text"}
                                color={viewController.selectedItem === SelectedItem.USERS ? "primary" : "secondary"}>Users</Button>
                        <Button onClick={viewController.onMetricsClick}
                                sx={buttonStyles}
                                variant={viewController.selectedItem === SelectedItem.METRICS ? "contained" : "text"}
                                color={viewController.selectedItem === SelectedItem.METRICS ? "primary" : "secondary"}>Metrics</Button>
                        <Button onClick={viewController.onSettingsClick}
                                sx={buttonStyles}
                                variant={viewController.selectedItem === SelectedItem.SETTINGS ? "contained" : "text"}
                                color={viewController.selectedItem === SelectedItem.SETTINGS ? "primary" : "secondary"}>Settings</Button>
                        <Button onClick={viewController.onLogOutClick}
                                sx={buttonStyles}
                                color="secondary">LogOut</Button>
                    </Stack>
                </Paper>
            </Stack>
        </Grid>
    );
}
