
import { LOGIN_USER_SUCCESS,LOGIN_USER_FAIL } from "../actionTypes";

const initialState = {
    token:null
}


export const loginReducer = function (state = initialState,action){
    switch(action.type) {
        case LOGIN_USER_SUCCESS:
            return {...state,token: action.payload};
        case LOGIN_USER_FAIL:
            return {...state,token: action.payload};
        default:
            return state;    
    }
};