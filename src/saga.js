import{call,put,takeEvery, takeLatest} from 'redux-saga/effects'
import { userFetch } from './actions';
import { LOGIN_USER_SUCCESS,SAVELOG } from './actionTypes'

export const loginUserService = async (credentials) => {
  // debugger;
    const LOGIN_API_ENDPOINT = 'http://localhost:8080/login';
  
    const parameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    };
  
    const response = await fetch(LOGIN_API_ENDPOINT, parameters);
    const json = await response.json();
    return json
  };

export function* fetchUser(action){
    console.log('Inside fetch user function')
    const user = yield call(loginUserService,action.payload);
    console.log('After ferching the details ',user)
    yield put({ type: LOGIN_USER_SUCCESS , user:user})
    console.log('After LOGIN_USER_SUCCESS action ',user)
    localStorage.setItem('token', JSON.stringify(user.token));

}

function* mySaga(){
    yield takeLatest(SAVELOG,fetchUser)
}

export default mySaga;




