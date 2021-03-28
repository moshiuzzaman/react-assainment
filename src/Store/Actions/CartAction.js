import axios from "axios"

export const ADD_TO_CART = "ADD_TO_CART"
export const INCREASE_QUANTITY = "INCREASE_QUANTITY"
export const DECREASE_QUANTITY = "DECREASE_QUANTITY"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const MAKE_ORDER = "MAKE_ORDER"

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}
export const increaseQuantity = (id) => {
    return {
        type: INCREASE_QUANTITY,
        payload: id
    }
}
export const decreaseQuantity = (id) => {
    return {
        type: DECREASE_QUANTITY,
        payload: id
    }
}
export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}

export const makeOrder = (orderData) => {
    return (dispatch) => {
        axios.post('http://localhost:7000/orders/make-order',{orderData}, { headers: { token: sessionStorage.getItem("token") } })
            .then(res => {
                dispatch({
                    type: MAKE_ORDER,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}