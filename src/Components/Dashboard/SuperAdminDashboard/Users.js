import { Button, Grid, Paper } from '@material-ui/core';
import React, { useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { allUsers,deleteUser } from '../../../Store/Actions/UsersAction';

const columns = [
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'email', label: 'Email', minWidth: 100 },
    { id: 'role', label: 'Role', minWidth: 50 },
    { id: 'deleteUser', label: 'Delete User', minWidth: 30 },
    
];


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        minHeight: '120px'
    },
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 540,
    },
}));

const Users = ({setExactRoute}) => {
    const classes = useStyles();
    const paperRoot= clsx(classes.paper, classes.root);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const users = useSelector(state => state.login.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allUsers())
        
    }, [dispatch])

    const handleDeleteUser=(userId)=>{
        dispatch(deleteUser(userId))
    }
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12} md={12} lg={12}>
                    <Paper className={paperRoot}>
                        <TableContainer className={classes.container}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => {
                                        return (
                                            <TableRow key={user._id} hover role="checkbox">
                                                <TableCell>
                                                    {user.name}
                                                </TableCell>
                                                <TableCell>
                                                    {user.email}
                                                </TableCell>
                                                <TableCell>
                                                    {user.role}
                                                </TableCell>    
                                                   <TableCell>
                                                    <Button onClick={()=>handleDeleteUser(user._id)}>Delete</Button>
                                                </TableCell>    
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 20]}
                            component="div"
                            count={users.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Grid>
                {/* Recent users */}

            </Grid>
        </div >
    );
};

export default Users;