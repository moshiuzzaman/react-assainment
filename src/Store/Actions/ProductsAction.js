import axios from "axios"

export const PRODUCTS = "PRODUCTS"

export const getProducts = () => {
    return (dispatch) => {
        axios.get('http://localhost:7000/products')
            .then(res => {
                dispatch({
                    type: PRODUCTS,
                    payload: res.data
                })
            }).catch(err => {
                console.log(err)
            })
    }
}
