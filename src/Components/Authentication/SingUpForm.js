import React from 'react';
import { useForm } from 'react-hook-form';
const SingUpForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Name</label>
                <input type="text" placeholder="name" name="name" ref={register({ required: true })} />
                <label htmlFor="">User Role</label>
                <select name="role" ref={register({ required: true })}>
                    <option value="Super Admin">Super Admin</option>
                    <option value=" Admin"> Admin</option>
                    <option value=" User"> User</option>
                </select>
                <label htmlFor="">Email address</label>
                <input type="email" placeholder="email" name="email" ref={register({
                    required: true, pattern: /\S+@\S+\.\S+/i
                })} />
                <label htmlFor="">Password</label>
                <input type="text" placeholder="password" name="password" ref={register({ required: true })} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default SingUpForm;