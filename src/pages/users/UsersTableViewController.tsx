import React, {useCallback, useEffect, useState} from "react";
import {diContainer, TYPES} from "src/core/config";
import {UserService} from "src/core/services/user";

export type UserDetails = {
    id: string,
    balance: string,
}

export type UsersTableViewController = {
    orderByField?: string,
    order?: "asc" | "desc",
    changeOrderHandler: (event: React.MouseEvent<unknown>, property: string) => void,
    users: UserDetails[],
    usersTotalCount: number,
    rowsPerPage: number,
    pageNumber: number,
    handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void,
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
    rowsPerPagesOptions: number[],
}

const ORDERABLE_FIELDS = ["balance"]
const ROWS_PER_PAGES_OPTIONS = [5, 10, 25]

const useUsersTableViewController: () => UsersTableViewController = () => {
    const [order, setOrder] = useState<"asc" | "desc" | undefined>(undefined)
    const [orderByField, setOrderByField] = useState<string | undefined>(undefined)
    const [users, setUsers] = useState<UserDetails[]>([] as UserDetails[])
    const [usersTotalCount, setUsersTotalCount] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(ROWS_PER_PAGES_OPTIONS[0])
    const [pageNumber, setPageNumber] = useState(1)
    const changeOrderHandler: (event: React.MouseEvent<string>, property: string) => void = useCallback((event, property) => {
        if (!ORDERABLE_FIELDS.includes(property)) {
            return
        }
        const isAsc = orderByField === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderByField(property)
    }, [order, orderByField]);
    const handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void = useCallback((event, page) => {
        setPageNumber(page)
    }, []);
    const handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void = useCallback((event) => {
        setPageNumber(1)
        setRowsPerPage(parseInt(event.target.value, 10));
    }, []);
    useEffect(() => {
        let userService = diContainer.get<UserService>(TYPES.UserService);
        userService.find({
            pageNumber: pageNumber,
            pageSize: rowsPerPage,
        }).then(response => {
            setUsersTotalCount(response.pagination.totalNumber)
            let userDetails = response.users.map(user => {
                return {
                    id: user.id,
                    balance: user.balance
                } as UserDetails
            });
            setUsers(userDetails)
        })
    }, [pageNumber, rowsPerPage]);
    return {
        orderByField: orderByField,
        order: order,
        changeOrderHandler: changeOrderHandler,
        users: users,
        usersTotalCount: usersTotalCount,
        rowsPerPage: rowsPerPage,
        pageNumber: pageNumber,
        handleChangePage: handleChangePage,
        handleChangeRowsPerPage: handleChangeRowsPerPage,
        rowsPerPagesOptions: ROWS_PER_PAGES_OPTIONS,
    } as UsersTableViewController;
}

export default useUsersTableViewController;
