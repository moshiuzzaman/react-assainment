import { Button, Grid, Paper } from '@material-ui/core';
import React, { useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

// iodsguogsiusgggggggggg
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { deleteProduct, getProducts } from '../../../Store/Actions/ProductsAction';

const columns = [
    { id: 'id', label: 'Product id', minWidth: 100 },
    { id: 'name', label: 'Product Name', minWidth: 100 },
    { id: 'image', label: 'Product image', minWidth: 100 },
    { id: 'deleteProduct', label: 'Delete Product', minWidth: 30 },
    
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

const Products = ({setExactRoute}) => {
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

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    const products = useSelector(state => state.products.products)

    const handleDeleteProduct=(productId)=>{
        dispatch(deleteProduct(productId))
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
                                    {products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product) => {
                                        return (
                                            <TableRow key={product._id} hover role="checkbox">
                                                <TableCell>
                                                    {product._id}
                                                </TableCell>
                                                <TableCell>
                                                    {product.title}
                                                </TableCell>
                                                <TableCell>
                                                    <img className="productTableImage" src={product.image} alt=""/>
                                                </TableCell>    
                                                   <TableCell>
                                                    <Button onClick={()=>handleDeleteProduct(product._id)}>Delete</Button>
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
                            count={products.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Grid>
                {/* Recent products */}

            </Grid>
        </div >
    );
};

export default Products;