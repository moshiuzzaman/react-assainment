import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { makeOrder } from '../../../Store/Actions/CartAction';

const CartSidebar = () => {
    const history=useHistory()
    const cart = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
    const subtotal = cart.reduce((res, item) => {
        return res + (item.price * item.quantity)
    }, 0).toFixed(2)
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const orderedProducts = cart.map(pd => {
            return {
                id: pd._id,
                quantity: pd.quantity
            }
        })
        if (cart.length > 0) {
            dispatch(makeOrder({ ...data, orderedProducts, total: subtotal }))
            history.push('/')
        } else {
            alert("your cart is empty, at first select products and than order")
        }
    }
    return (
        <Grid item md={4} sm={12} align="center">
            <Paper className="cartSidebar">
                <div className="cart-sidebar">
                    <h5>Subtotal</h5>
                    <h1>${subtotal}</h1>
                    <p>Shipping estimates</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="name" name="name" ref={register({ required: true })} />
                        <input type="text" placeholder="city" name="city" ref={register({ required: true })} />
                        <input type="number" placeholder="mobile" name="mobile" ref={register({ required: true, min: 0, maxLength: 11 })} />
                        <textarea placeholder="comment" name="comment" ref={register} />
                        {
                            errors && <p></p>
                        }
                        <input type="submit" value="order" />
                    </form>
                </div>
            </Paper>
        </Grid>
    );
};

export default CartSidebar;


