import axios from "axios"

export const SEARCH_BY_NAME="SEARCH_BY_NAME"

export const searchByName=(value="")=>{
    console.log(value)
    return (dispatch) => {
        axios.get(`http://localhost:7000/products/search-by-name`,{
            params:{
                value
            }
        })
            .then(res => {
                dispatch({
                    type: SEARCH_BY_NAME,
                    payload: res.data
                })
            }).catch(err => {
                console.log(err)
            })
    }
}