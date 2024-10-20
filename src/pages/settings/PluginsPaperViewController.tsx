import React, {useCallback, useEffect, useRef, useState} from "react";
import {diContainer, TYPES} from "src/core/config";
import {PluginService} from "src/core/services/plugin";
import {PluginDialogProps, PluginDialogType} from "src/pages/settings/PluginDialogViewController";
import {PluginDto, PluginType} from "../../api/api-back/generated";

export type PluginDetails = {
    id: string,
    host: string,
    typeName: string,
}

export type PluginsPaperViewController = {
    plugins: PluginDetails[],
    onEditHandle: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void,
    onDeleteHandle: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void,
    onAddHandle: (event: React.MouseEvent<HTMLButtonElement>) => void,
    pluginDialogProps: PluginDialogProps,
}


const usePluginPaperViewController: () => PluginsPaperViewController = () => {
    const [plugins, setPlugins] = useState([] as PluginDetails[])
    const [isOpenDialog, setIsOpenDialog] = useState(false)

    const initPlugin = useRef({
        id: undefined,
        host: '',
        type: PluginType.AUTHENTICATION
    } as PluginDto);
    const pluginDialogType = useRef(PluginDialogType.CREATE);

    const onDeleteHandle: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void = useCallback((event, id) => {
        let pluginService = diContainer.get<PluginService>(TYPES.PluginService);
        pluginService.delete(id)
            .then(() => pluginService.find())
            .then((response) => {
                let newPlugins = response.plugins.map(plugin => {
                    return {
                        id: plugin.id,
                        host: plugin.host,
                        typeName: plugin.type,
                    } as PluginDetails
                });
                setPlugins(newPlugins)
            })
    }, []);

    useEffect(() => {
        let pluginService = diContainer.get<PluginService>(TYPES.PluginService);
        pluginService.find()
            .then((response) => {
                let newPlugins = response.plugins.map(plugin => {
                    return {
                        id: plugin.id,
                        host: plugin.host,
                        typeName: plugin.type,
                    } as PluginDetails
                });
                setPlugins(newPlugins)
            })
    }, []);

    const onAddHandle: (event: React.MouseEvent<HTMLButtonElement>) => void = useCallback((event) => {
        initPlugin.current = {
            id: undefined,
            host: '',
            type: PluginType.AUTHENTICATION
        } as PluginDto
        pluginDialogType.current = PluginDialogType.CREATE
        setIsOpenDialog(true)
    }, []);

    const onEditHandle: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void = useCallback((event, id) => {
        let filteredPlugins = plugins
            .filter(plugin => plugin.id === id)
            .map(plugin => {
                return {
                    id: plugin.id,
                    host: plugin.host,
                    type: plugin.typeName,
                } as PluginDto
            });
        if (filteredPlugins.length === 0) {
            return
        }
        initPlugin.current = filteredPlugins[0]
        pluginDialogType.current = PluginDialogType.EDIT;
        setIsOpenDialog(true)
    }, [plugins]);

    const handleCloseDialog = useCallback(() => {
        setIsOpenDialog(false);
    }, []);

    const onUpdatePlugin = useCallback(() => {
        setIsOpenDialog(false)
        let pluginService = diContainer.get<PluginService>(TYPES.PluginService);
        pluginService.find()
            .then((response) => {
                let newPlugins = response.plugins.map(plugin => {
                    return {
                        id: plugin.id,
                        host: plugin.host,
                        typeName: plugin.type,
                    } as PluginDetails
                });
                setPlugins(newPlugins)
            })
    }, []);

    return {
        plugins: plugins,
        onEditHandle: onEditHandle,
        onDeleteHandle: onDeleteHandle,
        onAddHandle: onAddHandle,
        pluginDialogProps: {
            isOpenDialog: isOpenDialog,
            handleCloseDialog: handleCloseDialog,
            onUpdatePlugin: onUpdatePlugin,
            initPlugin: initPlugin.current,
            pluginDialogType: pluginDialogType.current
        },
    } as PluginsPaperViewController;
}

export default usePluginPaperViewController;
