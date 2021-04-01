import { ALL_ORDERS, CHANGE_ORDER_STATUS, DIFFERENT_ORDERS, USER_ORDERS } from "../Actions/OrdersAction"

const initialState = {
    orders: [],
    differentOrders:[],
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
        case DIFFERENT_ORDERS:{
            if(action.payload.message){
                alert(action.payload.message)
            }
            return {...state,differentOrders:action.payload}
        }
        case CHANGE_ORDER_STATUS:{
            if(action.payload.message){
                alert(action.payload.message)
            }
            return {...state, orders: [...action.payload.orders],pendingOrders:[...action.payload.pendingOrders]}
        }
        default:
            return state
    }
}
export default OrdersReducer