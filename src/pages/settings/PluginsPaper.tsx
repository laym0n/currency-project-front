import React from "react";

import {ButtonGroup, IconButton, List, ListItem, ListItemText, Paper, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import usePluginPaperViewController from "src/pages/settings/PluginsPaperViewController";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import {PluginDialog} from "src/pages/settings/PluginDialog";

export function PluginsPaper() {
    let {plugins, onEditHandle, onDeleteHandle, onAddHandle, pluginDialogProps} = usePluginPaperViewController();
    return (
        <Paper sx={{width: "100%"}}>
            <Stack>
                <PluginDialog {...pluginDialogProps}/>
                <Typography margin="15px" variant="body2">Requests pipeline</Typography>
                <List sx={{background: "#191919"}}>
                    {plugins.map((plugin) => {
                        return (
                            <ListItem
                                key={plugin.id}
                                secondaryAction={
                                    <Stack spacing={2} direction="row">
                                        <IconButton color="primary" aria-label="edit" size="large"
                                                    onClick={(event) => onEditHandle(event, plugin.id)}>
                                            <EditIcon/>
                                        </IconButton>
                                        <IconButton aria-label="delete" color="primary" size="large"
                                                    onClick={(event) => onDeleteHandle(event, plugin.id)}>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </Stack>
                                }
                            >
                                <ListItemText primary={plugin.typeName}/>
                            </ListItem>)
                    })}
                </List>
                <ButtonGroup sx={{padding: "15px"}}>
                    <IconButton aria-label="add" color="primary" size="large" onClick={(event) => onAddHandle(event)}>
                        <AddIcon/>
                    </IconButton>
                </ButtonGroup>
            </Stack>
        </Paper>
    );
}
