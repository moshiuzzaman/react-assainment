import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../Store/Actions/UsersAction';
import { Alert } from '@material-ui/lab';
import { Avatar, Box, Button, Grid, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import { IoMdCreate } from 'react-icons/io';
import { FcViewDetails } from 'react-icons/fc';


const AllUserDashboard = () => {
    const [editUser, setEditUser] = useState(false)
    const dispatch = useDispatch()
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, e) => {
        dispatch(updateUser(data))
        setEditUser(false)
        e.target.reset();
        window.location.reload()
    }

    var user = JSON.parse(sessionStorage.user);
    return (
        <Container className="updateUser" component="main" maxWidth="xs">
            {
                !editUser && <div >
                    <div
                        align="center">
                        <Avatar>
                            <FcViewDetails />
                        </Avatar>
                        <Typography
                            component="h1"
                            variant="h5">
                            Your details
                        </Typography>
                    </div>
                    <TableContainer >
                        <Table aria-label="simple table">
                            <TableBody>
                                <TableRow >
                                    <TableCell><b>Name</b></TableCell>
                                    <TableCell >{user.name}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell><b>ID</b></TableCell>
                                    <TableCell >{user._id}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell><b>Role</b></TableCell>
                                    <TableCell >{user.role}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell><b>Email</b></TableCell>
                                    <TableCell >{user.email}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box pt={4}>
                        <Grid container justify="center" >
                            <Button 
                            variant="outlined" 
                            color="secondary" 
                            onClick={() => setEditUser(true)}
                            className="full-width-button"
                            >
                                Edit Details
                            </Button>
                        </Grid>
                    </Box>
                </div>
            }
            {
                editUser && <>
                    <div
                        align="center">
                        <Avatar>
                            <IoMdCreate />
                        </Avatar>
                        <Typography
                            component="h1"
                            variant="h5">
                            Update Your details
                        </Typography>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="name" name="name" defaultValue={user.name} ref={register({ required: true })} />

                        <label htmlFor="">Email address</label>
                        <input type="email" placeholder="email" name="email" defaultValue={user.email} ref={register({
                            required: true, pattern: /\S+@\S+\.\S+/i
                        })} />
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder="password" name="password" ref={register({ required: true })} />
                        {
                            errors.name ? <Alert severity="error">Name fill is required</Alert> :
                                errors.email ? <Alert severity="error">Email fill is required</Alert> :
                                    errors.password && <Alert severity="error">Password fill is required</Alert>
                        }
                        <input type="submit" />
                    </form>
                    <Button
                        variant="contained"
                        color="primary"
                        className="full-width-button"
                        onClick={() => setEditUser(false)}
                    >
                        Go Back
                    </Button>
                </>
            }

        </Container>
    );
};

export default AllUserDashboard;