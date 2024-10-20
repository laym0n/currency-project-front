import React, {useCallback, useEffect, useState} from "react";
import {diContainer, TYPES} from "src/core/config";
import {PluginService} from "src/core/services/plugin";
import {PluginDto, PluginType} from "../../api/api-back/generated";

export type PluginDialogViewController = {
    onOkClick: React.MouseEventHandler<HTMLButtonElement>,
    onCloseClick: React.MouseEventHandler<HTMLButtonElement>,
    handleCloseDialog: () => void,
    isOpenDialog: boolean,
    initPlugin: PluginDto,
    onHostChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
    onTypeChange: (event: React.SyntheticEvent, value: PluginType | null) => void,
}

export enum PluginDialogType {
    EDIT,
    CREATE
}

export type PluginDialogProps = {
    onUpdatePlugin: (plugin: PluginDto) => void,
    pluginDialogType: PluginDialogType,
    initPlugin?: PluginDto,
    handleCloseDialog: () => void,
    isOpenDialog: boolean,
}

const usePluginDialogViewController: (props: PluginDialogProps) => PluginDialogViewController = (props) => {
    const {onUpdatePlugin, pluginDialogType, initPlugin, handleCloseDialog, isOpenDialog} = props;
    // const editablePlugin = useRef<PluginDto>(initPlugin || {} as PluginDto);
    const [editablePlugin, setEditablePlugin] = useState(initPlugin || {
        id: undefined,
        host: '',
        type: PluginType.AUTHENTICATION
    } as PluginDto)

    useEffect(() => {
        setEditablePlugin(initPlugin || {
            id: undefined,
            host: '',
            type: PluginType.AUTHENTICATION
        } as PluginDto)
    }, [initPlugin]);

    const onOkClick: React.MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
        let pluginService = diContainer.get<PluginService>(TYPES.PluginService);
        (pluginDialogType === PluginDialogType.CREATE ? pluginService.add(editablePlugin) : pluginService.update(editablePlugin))
            .then((updatedPlugin) => onUpdatePlugin(updatedPlugin))
    }, [onUpdatePlugin, pluginDialogType, editablePlugin]);

    const onCloseClick: React.MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
        handleCloseDialog();
    }, [handleCloseDialog]);

    const onHostChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void = useCallback((event) => {
        setEditablePlugin({
            ...editablePlugin,
            host: event.target.value
        })
    }, [editablePlugin]);

    const onTypeChange: (event: React.SyntheticEvent, value: PluginType | null) => void = useCallback((event, value) => {
        if (value === null) {
            return
        }
        setEditablePlugin({
            ...editablePlugin,
            type: value
        })
    }, [editablePlugin]);

    return {
        onOkClick: onOkClick,
        onCloseClick: onCloseClick,
        handleCloseDialog: handleCloseDialog,
        isOpenDialog: isOpenDialog,
        initPlugin: editablePlugin,
        onHostChange: onHostChange,
        onTypeChange: onTypeChange,
    } as PluginDialogViewController;
}

export default usePluginDialogViewController;
