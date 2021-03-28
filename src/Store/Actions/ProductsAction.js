import axios from "axios"

export const PRODUCTS = "PRODUCTS"
export const CREATE_PRODUCTS="CREATE_PRODUCTS"
export const DELETE_PRODUCT="DELETE_PRODUCT"
export const SELECTED_PRODUCT="SELECTED_PRODUCT"
export const PAGINATION_PRODUCTS="PAGINATION_PRODUCTS"

export const getPaginationProducts = (page) => {
    return (dispatch) => {
        axios.get(`http://localhost:7000/products/pagination?page=${page}`)
            .then(res => {
                dispatch({
                    type: PAGINATION_PRODUCTS,
                    payload: res.data
                })
            }).catch(err => {
                console.log(err)
            })
    }
}
export const getProducts = () => {
    return (dispatch) => {
        axios.get(`http://localhost:7000/products`)
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

export const createProduct=(productData)=>{
    return (dispatch) => {
        axios.post('http://localhost:7000/products/add-product',{...productData}, { headers: { token: sessionStorage.getItem("token") } })
            .then(res => {
                dispatch({
                    type: CREATE_PRODUCTS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export const deleteProduct=(productId)=>{
    return (dispatch) => { 
        axios.post('http://localhost:7000/products/delete-product',{productId}, { headers: { token: sessionStorage.getItem("token") } })
       
            .then(res => {
                dispatch({
                    type: DELETE_PRODUCT,
                    payload: res.data
                })
            }).catch(err => {
                console.log(err)
            })
    }
}
export const selectedProduct=(id)=>{
    return (dispatch) => {
        axios.get(`http://localhost:7000/products/selected-product`,{
            params:{
                id
            }
        })
            .then(res => {
                dispatch({
                    type: SELECTED_PRODUCT,
                    payload: res.data
                })
            }).catch(err => {
                console.log(err)
            })
    }
}