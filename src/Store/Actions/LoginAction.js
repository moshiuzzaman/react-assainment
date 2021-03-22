import axios from "axios"

export const LOGIN_USER = "LOGIN_USER"

export const loginUser = (userObj) => {
    return (dispatch) => {
        axios.post('http://localhost:7000/login', { userObj })
            .then(res => {
                dispatch({
                    type: LOGIN_USER,
                    payload: res.data
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }
}

