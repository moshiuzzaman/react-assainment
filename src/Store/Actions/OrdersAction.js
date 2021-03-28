import axios from "axios"

export const ALL_ORDERS = "ALL_ORDERS"
export const CHANGE_ORDER_STATUS = "CHANGE_ORDER_STATUS"
export const PENDING_ORDERS="PENDING_ORDERS"
export const USER_ORDERS="USER_ORDERS"

export const allOrders = () => {
    return (dispatch) => {
        axios.get('http://localhost:7000/orders', { headers: { token: sessionStorage.getItem("token") } })
            .then(res => {
                dispatch({
                    type: ALL_ORDERS,
                    payload: res.data
                })
            }).catch(err => {
                console.log(err)
            })
    }
}
export const userOrders=()=>{
    return (dispatch) => {
        axios.get('http://localhost:7000/orders/user-orders', { headers: { token: sessionStorage.getItem("token") } })
            .then(res => {
                dispatch({
                    type: USER_ORDERS,
                    payload: res.data
                })
            }).catch(err => {
                console.log(err)
            })
    }
}
export const changeOrderStatus = (status,id) => {
    return (dispatch) => {
        axios.patch('http://localhost:7000/orders/update-status',{status,id}, { headers: { token: sessionStorage.getItem("token") } })
            .then(res => {
                dispatch({
                    type: CHANGE_ORDER_STATUS,
                    payload: res.data
                })
            }).catch(err => {
                console.log(err)
            })
    }
}
export const pendingOrders = () => {
    return (dispatch) => {
        axios.get('http://localhost:7000/orders/pending-orders', { headers: { token: sessionStorage.getItem("token") } })
            .then(res => {
                dispatch({
                    type: PENDING_ORDERS,
                    payload: res.data
                })
            }).catch(err => {
                console.log(err)
            })
    }
}