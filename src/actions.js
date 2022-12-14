import { LOGIN,SAVELOG,LOGIN_USER_SUCCESS } from "./actionTypes"

// export const loginUserSuccess = (token) => {
//     return{
//         type: LOGIN_USER_SUCCESS,
//         payload:token
//     }
// }

export const userFetch = (payload) => {
    return{
        type:SAVELOG,
        payload:payload
    }
}