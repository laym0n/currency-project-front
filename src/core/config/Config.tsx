import {OpenAPI as openApiBack} from 'src/api/api-back/generated/core/OpenAPI';
import * as process from "process";
import {diContainer} from "src/core/config/DIConfig";
import {AuthenticationService} from "src/core/services/authentication";
import {TYPES} from "src/core/config/Types";

export default function initialize() {
    try {
        const authenticationService = diContainer.get<AuthenticationService>(TYPES.AuthenticationService);
        openApiBack.BASE = process.env.REACT_APP_BACK_BASE_URL as string;
        authenticationService.initialize();
    } catch (e) {
        console.error(e)
    }
};
