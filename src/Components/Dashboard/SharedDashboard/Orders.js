import {  Grid,  Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { allOrders, changeOrderStatus } from '../../../Store/Actions/OrdersAction';
import clsx from 'clsx';

// iodsguogsiusgggggggggg
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Dropdown, SplitButton } from 'react-bootstrap';

const columns = [
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'userId', label: 'User Id', minWidth: 50 },
    {
        id: 'city',
        label: 'Address',
        minWidth: 100,
    },
    {
        id: 'total',
        label: 'Total Price',
        minWidth: 100,
        // format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'ProductsIdAndQuantity',
        label: 'Products Id And Quantity',
        minWidth: 350,
    },
    {
        id: 'status',
        label: 'Order Status',
        minWidth: 150,
    },
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

const Orders = () => {

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const handleClose = (status, id) => {
        dispatch(changeOrderStatus(status, id))
        
    };



    const paperRoot= clsx(classes.paper, classes.root);

    const orders = useSelector(state => state.orders.orders)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allOrders())
    }, [dispatch])
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
                                    {orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order) => {
                                        return (
                                            <TableRow key={order._id} hover role="checkbox">
                                                <TableCell>
                                                    {order.name}
                                                </TableCell>
                                                <TableCell>
                                                    {order._id}
                                                </TableCell>
                                                <TableCell>
                                                    {order.city}
                                                </TableCell>
                                                <TableCell>
                                                    $ {order.total}
                                                </TableCell>
                                                <TableCell className="ordered-products-cell">
                                                    {
                                                        order.orderedProducts.map(
                                                            pd =>
                                                                <p key={pd.id} className="ordered-products">
                                                                    | <span> Product ID: </span>
                                                                    {pd.id}
                                                                    <span> Quantity: </span>
                                                                    {pd.quantity} |
                                                                </p>)
                                                    }
                                                </TableCell>
                                                <TableCell>
                                                    <SplitButton
                                                        className={`statusButton-${order.status}`}
                                                        title={order.status}
                                                    >
                                                        <Dropdown.Item className='pending-dropdownItem' onClick={() => handleClose('pending', order._id)}>Pending</Dropdown.Item>
                                                        <Dropdown.Item className='ongoing-dropdownItem' onClick={() => handleClose('ongoing', order._id)}>Ongoing</Dropdown.Item>
                                                        <Dropdown.Item className='done-dropdownItem' onClick={() => handleClose('done', order._id)}>Done</Dropdown.Item>
                                                    </SplitButton>
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
                            count={orders.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Grid>
                {/* Recent Orders */}

            </Grid>
        </div >
    );
};

export default Orders;