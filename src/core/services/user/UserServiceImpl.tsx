import {FindUsersParameters, UserService} from "./UserService";
import {injectable} from "inversify";
import {GetUsersResponse} from "/@/components/api/api-back/generated";

// @ts-ignore
@injectable()
export class UserServiceImpl implements UserService {
    find(parameters: FindUsersParameters): Promise<GetUsersResponse> {
        return Promise.resolve({
            users: [{
                id: 'idsdfsdfdsfdsfshjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdf',
                balance: 'balance'
            }, {
                id: 'idsdfsdfdsfdsfshjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdf',
                balance: 'balance'
            }, {
                id: 'idsdfsdfdsfdsfshjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdf',
                balance: 'balance'
            }, {
                id: 'idsdfsdfdsfdsfshjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdf',
                balance: 'balance'
            }, {
                id: 'idsdfsdfdsfdsfshjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdf',
                balance: 'balance'
            }], pagination: {totalNumber: 16, pageNumber: parameters.pageNumber, pageCount: 3, pageSize: 5}
        } as GetUsersResponse);
    }
}
