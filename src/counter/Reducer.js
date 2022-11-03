
import { LOGIN } from "../actionTypes";

const initialState = {
    token:null
}


export const loginReducer = function (state = initialState,action){
    switch(action.type) {
        case LOGIN:
            return {...state,token: action.payload};

        default:
            return state;    
    }
};