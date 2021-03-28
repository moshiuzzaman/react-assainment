import { Avatar, Container, Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { singUpUser } from '../../Store/Actions/UsersAction';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Alert from '@material-ui/lab/Alert';



const SingUpForm = ({ setIsLogIn }) => {
    const dispatch = useDispatch()
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        dispatch(singUpUser(data))
        setIsLogIn(true)
    }
    return (
        <Container className="loginSingUP">
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item md={6} align="center">
                    <Avatar >
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign UP
             </Typography>
                </Grid>
                <Grid item md={6} >
                    <div>
                        <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder="name" name="name" ref={register({ required: true })} />
                            <label htmlFor="">User Role</label>
                            <select name="role" ref={register({ required: true })}>
                                <option value="super admin">Super Admin</option>
                                <option value="admin"> Admin</option>
                                <option value="user"> User</option>
                            </select>
                            <label htmlFor="">Email address</label>
                            <input type="email" placeholder="email" name="email" ref={register({
                                required: true, pattern: /\S+@\S+\.\S+/i
                            })} />
                            <label htmlFor="">Password</label>
                            <input type="text" placeholder="password" name="password" ref={register({ required: true })} />
                            {
                                errors.name ?<Alert severity="error">Name fill is required</Alert> :
                                errors.email ? <Alert severity="error">Email fill is required</Alert>  :
                                errors.password && <Alert severity="error">Password fill is required</Alert> 
                            }
                            <input type="submit" />
                        </form>
                        <Grid container>
                            <Grid item md={12}>
                                <Link onClick={() => setIsLogIn(true)} variant="body2">
                                    {"Already have an account? Sign In"}
                                </Link>
                            </Grid>

                        </Grid>
                        
                    </div>
                </Grid>

            </Grid>
        </Container>

    );
};

export default SingUpForm;