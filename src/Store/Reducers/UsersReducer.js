
import { ADD_USER, ALL_USERS, DELETE_USER, LOGIN_USER, LOGOUT_USER, SING_UP_USER, UPDATE_USER, UPDATE_USER_ROLE } from "../Actions/UsersAction"

const initialState = {
    isLogIn: false,
    user: {},
    message: '',
    users:[]
}
const AuthenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            if(action.payload.code===202){
                sessionStorage.setItem("token", action.payload.token)
                sessionStorage.setItem('user', JSON.stringify(action.payload.user))
            }
            alert(action.payload.message)
            return {...state,...action.payload }
        case SING_UP_USER :
        alert(action.payload)
        return state
        case ADD_USER :
        alert(action.payload)
        return state
        
        case UPDATE_USER:
            if(action.payload.code===200){
                let user= JSON.parse(sessionStorage.user);
                user.name=action.payload.name
                user.email=action.payload.email
                sessionStorage.setItem('user', JSON.stringify(user))
            }
             alert(action.payload.message)
             return state
        case DELETE_USER:
             alert(action.payload.message)
             return {...state, users: [...action.payload.users] }
        case ALL_USERS:{
            return {...state, users: [...action.payload] }
        }
        case LOGOUT_USER:{
            return{...state, isLogIn: false}
        }
        case UPDATE_USER_ROLE:{
            if(action.payload.message){
                alert(action.payload.message)
            }
            return {...state, users: [...action.payload.users]}
        }
        default:
            return state
    }
}

export default AuthenticationReducer