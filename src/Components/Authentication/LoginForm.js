import { Container } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { loginUser } from '../../Store/Actions/UsersAction';

import Avatar from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Alert } from '@material-ui/lab';



const LoginForm = ({ setIsLogIn }) => {
    const history = useHistory()
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const dispatch = useDispatch()
    const users = useSelector(state => state.login)
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async (data) => {
        await dispatch(loginUser(data))
    };
    if (users.isLogIn) {
        history.replace(from);
        window.location.reload();
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
                    <Avatar>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography
                        component="h1"
                        variant="h5">
                        Sign in
                 </Typography>
                </Grid>
                <Grid
                    item
                    md={6} >
                    <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="">Email address</label>
                        <input
                            type="email"
                            placeholder="email"
                            name="email"
                            ref={register({ required: true, pattern: /\S+@\S+\.\S+/i })}
                        />
                        <label htmlFor="">Password</label>
                        <input
                            type="password"
                            placeholder="password"
                            name="password"
                            ref={register({ required: true })}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        {
                            errors.email ? <Alert severity="error">Email fill is required</Alert> :
                                errors.password && <Alert severity="error">Password fill is required</Alert>
                        }
                        <input type="submit" />

                        <Grid container>
                            <Grid item md={12}>
                                <Link onClick={() => setIsLogIn(false)} variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>

                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Container>

    );
};


export default LoginForm;