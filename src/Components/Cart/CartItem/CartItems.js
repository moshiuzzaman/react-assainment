import { Button, ButtonGroup, Grid } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../../Store/Actions/CartAction';

const CartItems = () => {
    const cart = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
    return (
        <Grid item md={8} sm={12} className="cart-items ">
            {
                cart.length !== 0 ? cart.map(pd =>
                    <Grid
                        container
                        key={pd._id}
                        className="single-cart-item pb-3 mb-3 align-items-center"
                    >
                        <Grid item sm={2}>
                            <div align="center" className="cart-item-image">
                                <img className="w-75 "
                                    src={pd.image}
                                    alt={"cart product Img"}
                                    width="100%"
                                />
                            </div>
                        </Grid>
                        <Grid
                            item
                            sm={7}
                            className="cart-item-details"
                        >
                            <p className="cart-item-name font-weight-bold">
                                {pd.title}
                            </p>
                            <p className="">
                                Category : {pd.category}
                            </p>
                            <p className="text-info">
                                Price : ${pd.price}
                            </p>
                        </Grid>
                        <Grid item sm={3}>
                            <ButtonGroup
                                className="m-1"
                                size="large"
                                color="primary"
                                aria-label="large outlined primary button group"
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => dispatch(decreaseQuantity(pd._id))}
                                >-</Button>
                                <Button>{pd.quantity}</Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => dispatch(increaseQuantity(pd._id))}
                                >+</Button>
                            </ButtonGroup>

                            <Button
                                className="m-1"
                                variant="outlined"
                                color="secondary"
                                onClick={() => dispatch(removeFromCart(pd._id))}
                            >
                                Remove
                            </Button>
                        </Grid>
                    </Grid>
                ) : <h1>Cart empty</h1>
            }
        </Grid>
    );
};

export default CartItems;