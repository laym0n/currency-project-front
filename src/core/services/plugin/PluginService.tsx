import {GetPluginsResponse, PluginDto, PluginType} from "src/api/api-back/generated";

export interface PluginService {
    add(request: PluginDto): Promise<PluginDto>

    delete(id: string): Promise<void>

    update(request: PluginDto): Promise<PluginDto>

    find(type?: PluginType): Promise<GetPluginsResponse>
}
