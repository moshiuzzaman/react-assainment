import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { loginUser } from '../../Store/Actions/LoginAction';
const LoginForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const users = useSelector(state => state.login)

    console.log(users.isLogIN)
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        dispatch(loginUser(data))

    };
    if (users.isLogIN) {
        console.log('faiafyhaofhioah')
        history.push('/all')
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Email address</label>
                <input type="email" placeholder="email" name="email" ref={register({ required: true, pattern: /\S+@\S+\.\S+/i })} />
                <label htmlFor="">Password</label>
                <input type="password" placeholder="password" name="password" ref={register({ required: true })} />
                <input type="submit" />
            </form>
        </div>
    );
};


export default LoginForm;