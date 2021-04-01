import { Avatar, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Alert from '@material-ui/lab/Alert';
import { addUser } from '../../../Store/Actions/UsersAction';

const MakeUser = ({setExactRoute}) => {
    const dispatch = useDispatch()
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        dispatch(addUser(data))
        setExactRoute("Users")
    }
    return (
        <Container >
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item md={6} align="center">
                    <Avatar >
                        <PersonAddIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Add A User
             </Typography>
                </Grid>
                <Grid item md={6} >
                    <div>
                        <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="">Name</label>
                            <input
                                type="text"
                                placeholder="name"
                                name="name"
                                ref={register({ required: true })} />

                            <label htmlFor="">Email address</label>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                ref={register({
                                    required: true, pattern: /\S+@\S+\.\S+/i
                                })}
                            />
                            <label htmlFor="">User Role</label>
                            <select name="role" ref={register({ required: true })}>
                                <option value="admin">Admin</option>
                                <option value="super admin"> Super Admin</option>
                            </select>
                            <label htmlFor="">Password</label>
                            <input
                                type="text"
                                placeholder="password"
                                name="password"
                                ref={register({ required: true })}
                            />
                            {
                                errors.name ? <Alert severity="error">Name fill is required</Alert>
                                    : errors.email
                                        ? <Alert severity="error">Email fill is required</Alert>
                                        : errors.password
                                        && <Alert severity="error">Password fill is required</Alert>
                            }
                            <input type="submit" />
                        </form>

                    </div>
                </Grid>
            </Grid>
        </Container>

    );
};
export default MakeUser;