import {OpenAPI as openApiBack} from 'src/api/api-back/generated/core/OpenAPI';
import {OpenAPI as openApiAuth} from 'src/api/api-auth/generated/core/OpenAPI';
import * as process from "process";

export default function initialize() {
    try {
        openApiBack.BASE = process.env.REACT_APP_BACK_BASE_URL as string;
        openApiAuth.BASE = process.env.REACT_APP_AUTH_BASE_URL as string;
    } catch (e) {
        console.error(e)
    }
};
