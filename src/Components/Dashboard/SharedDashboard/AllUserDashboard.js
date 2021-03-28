import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../Store/Actions/UsersAction';
import { Alert } from '@material-ui/lab';



const AllUserDashboard = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, errors } = useForm();
    const onSubmit =( data,e )=> {
        dispatch(updateUser(data))
        e.target.reset();
    }
    return (
        <Container className="updateUser" component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">
                Update User
          </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Name</label>
                <input type="text" placeholder="name" name="name" ref={register({ required: true })} />
                
                <label htmlFor="">Email address</label>
                <input type="email" placeholder="email" name="email" ref={register({
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
        </Container>
    );
};

export default AllUserDashboard;