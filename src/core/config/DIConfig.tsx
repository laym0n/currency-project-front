import {Container} from "inversify";
import "reflect-metadata";
import {TYPES} from "./Types";
import {PluginService, PluginServiceImpl} from "src/core/services/plugin";
import {AuthenticationService, AuthenticationServiceImpl} from "src/core/services/authentication";
import {UserService, UserServiceImpl} from "src/core/services/user";

const diContainer = new Container();
diContainer.bind<AuthenticationService>(TYPES.AuthenticationService).to(AuthenticationServiceImpl);
diContainer.bind<PluginService>(TYPES.PluginService).to(PluginServiceImpl);
diContainer.bind<UserService>(TYPES.UserService).to(UserServiceImpl);

export {diContainer};
