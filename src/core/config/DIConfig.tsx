import {Container} from "inversify";
import "reflect-metadata";
import {TYPES} from "./Types";
import {PluginService, PluginServiceImpl} from "src/core/services/plugin";
import {AuthenticationService, AuthenticationServiceImpl} from "src/core/services/authentication";

const diContainer = new Container();
diContainer.bind<AuthenticationService>(TYPES.AuthenticationService).to(AuthenticationServiceImpl);
diContainer.bind<PluginService>(TYPES.PluginService).to(PluginServiceImpl);

export {diContainer};
