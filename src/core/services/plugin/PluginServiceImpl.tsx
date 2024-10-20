import {PluginService} from "./PluginService";
import {injectable} from "inversify";
import {GetPluginsResponse, PluginDto, PluginsClient, PluginType} from "src/api/api-back/generated";

// @ts-ignore
@injectable()
export class PluginServiceImpl implements PluginService {
    add(request: PluginDto): Promise<PluginDto> {
        return PluginsClient.add(request);
    }

    find(type?: PluginType): Promise<GetPluginsResponse> {
        return PluginsClient.findPlugins(type);
    }

    update(request: PluginDto): Promise<PluginDto> {
        return PluginsClient.update(request);
    }

    delete(id: string): Promise<void> {
        return PluginsClient.delete(id);
    }
}
