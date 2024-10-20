import React from "react";

import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel
} from "@mui/material";
import useUsersTableViewController from "src/pages/users/UsersTableViewController";

const NUMBER_COLUMN_KEY = "№";
const ID_COLUMN_KEY = "id";
const BALANCE_COLUMN_KEY = "balance";

export function UsersTable() {
    let {
        orderByField,
        order,
        changeOrderHandler,
        users,
        usersTotalCount,
        rowsPerPage,
        pageNumber,
        handleChangePage,
        handleChangeRowsPerPage,
        rowsPerPagesOptions,
    } = useUsersTableViewController();

    const createSortHandler =
        (property: string) => (event: React.MouseEvent<unknown>) => {
            changeOrderHandler(event, property);
        };
    return (
        <Paper sx={{width: "100%"}}>
            <TableContainer>
                <Table
                    aria-labelledby="Users"
                    size='medium'
                >
                    <TableHead>
                        <TableRow sx={{background: "black"}}>
                            <TableCell width="4%" key={NUMBER_COLUMN_KEY} align='center'>№</TableCell>
                            <TableCell width="48%" key={ID_COLUMN_KEY} align='center'>id</TableCell>
                            <TableCell width="48%" key={BALANCE_COLUMN_KEY} align='center'>
                                <TableSortLabel
                                    active={orderByField === BALANCE_COLUMN_KEY}
                                    direction={orderByField === BALANCE_COLUMN_KEY ? order : 'desc'}
                                    onClick={createSortHandler(BALANCE_COLUMN_KEY)}
                                >
                                    balance
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user, index) => {
                            return (
                                <TableRow key={user.id} sx={{background: "#191919"}}>
                                    <TableCell align='center'>{1 + index + pageNumber * rowsPerPage}</TableCell>
                                    <TableCell align='center'>{user.id}</TableCell>
                                    <TableCell align='center'>{user.balance}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={rowsPerPagesOptions}
                component="div"
                count={usersTotalCount}
                rowsPerPage={rowsPerPage}
                page={pageNumber}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                colSpan={3}
            />
        </Paper>
    );
}
