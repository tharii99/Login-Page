import { LOGIN } from "./actionTypes"

export const login = (token) => {
    return{
        type: LOGIN,
        payload:token
    }
}