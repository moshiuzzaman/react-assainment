import { ALL_ORDERS, CHANGE_ORDER_STATUS, PENDING_ORDERS, USER_ORDERS } from "../Actions/OrdersAction"

const initialState = {
    orders: [],
    pendingOrders:[],
    userOrders:[]
}

const OrdersReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ALL_ORDERS:
            if(action.payload.message){
                alert(action.payload.message)
            }
            return {...state,orders:action.payload}
        case USER_ORDERS:
            if(action.payload.message){
                alert(action.payload.message)
            }
            return {...state,userOrders:action.payload}
        case PENDING_ORDERS:{
            if(action.payload.message){
                alert(action.payload.message)
            }
            return {...state,pendingOrders:action.payload}
        }
        case CHANGE_ORDER_STATUS:{
            if(action.payload.message){
                alert(action.payload.message)
            }
            return {...state, orders: [...action.payload.orders]}
        }
        default:
            return state
    }
}
export default OrdersReducer