import React from "react";
import {Autocomplete, Button, Dialog, DialogActions, DialogTitle, Stack} from "@mui/material";
import TextField from "@mui/material/TextField";
import usePluginDialogViewController, {PluginDialogProps} from "src/pages/settings/PluginDialogViewController";
import {PluginType} from "../../api/api-back/generated";

export function PluginDialog(props: PluginDialogProps) {
    let {
        initPlugin,
        onOkClick,
        onCloseClick,
        isOpenDialog,
        handleCloseDialog,
        onHostChange,
        onTypeChange,
    } = usePluginDialogViewController(props)

    return (
        <Dialog
            open={isOpenDialog}
            onClose={handleCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" textAlign="center">
                {"Plugin"}
            </DialogTitle>
            <DialogActions>
                <Stack direction="column" spacing={1} width={600}>

                    <TextField
                        id="outlined-multiline-static"
                        label="host"
                        fullWidth
                        placeholder="http://localhost:8080"
                        value={initPlugin.host}
                        onChange={onHostChange}/>
                    <Autocomplete
                        disablePortal
                        options={Object.values(PluginType)}
                        value={initPlugin.type}
                        onChange={onTypeChange}
                        renderInput={(params) => <TextField {...params} label="type"/>}
                    />
                    <Stack direction="row" width='100%' spacing={1}>
                        <Button onClick={onCloseClick}
                                color="error"
                                fullWidth
                                variant="contained">
                            CLOSE
                        </Button>
                        <Button onClick={onOkClick}
                                autoFocus
                                fullWidth
                                variant="contained"
                                color="success">
                            OK
                        </Button>
                    </Stack>
                </Stack>
            </DialogActions>
        </Dialog>
    );
}
