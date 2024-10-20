import {FindUsersParameters, UserService} from "./UserService";
import {injectable} from "inversify";
import {GetUsersResponse, UsersClient} from "src/api/api-back/generated";

// @ts-ignore
@injectable()
export class UserServiceImpl implements UserService {
    find(parameters: FindUsersParameters): Promise<GetUsersResponse> {
        return UsersClient.findUsers(parameters.pageNumber, parameters.pageSize, parameters.orderBy, parameters.order);
    }
}
