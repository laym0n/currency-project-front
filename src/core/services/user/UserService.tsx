import {GetUsersResponse} from "src/api/api-back/generated";

export interface UserService {
    find(parameters: FindUsersParameters): Promise<GetUsersResponse>
}

export type FindUsersParameters = {
    pageNumber: number,
    pageSize: number,
    orderBy?: "balance",
    order: "ASC" | "DESC"
}
