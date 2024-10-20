import {PluginService} from "./PluginService";
import {injectable} from "inversify";
import {GetPluginsResponse, PluginDto, PluginType} from "src/api/api-back/generated";

// @ts-ignore
@injectable()
export class PluginServiceImpl implements PluginService {
    add(request: PluginDto): Promise<PluginDto> {
        return Promise.resolve({} as PluginDto);
    }

    find(type?: PluginType): Promise<GetPluginsResponse> {
        return Promise.resolve({
            plugins: [{
                id: "id",
                type: PluginType.AUTHENTICATION,
                host: "host"
            }]
        } as GetPluginsResponse);
    }

    update(request: PluginDto): Promise<PluginDto> {
        return Promise.resolve({} as PluginDto);
    }

    delete(id: string): Promise<void> {
        return Promise.resolve();
    }
}
