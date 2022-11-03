import React, { useState } from 'react'
import { Button } from 'rebass'
import { Input } from '@rebass/forms'
import PropTypes from 'prop-types';
import { login } from '../actions';
import { useSelector, useDispatch } from 'react-redux'
import { loginReducer } from '../counter/Reducer'
import { connect } from 'react-redux';



async function loginUser(credentials) {
    // console.log('Inside the login User function')
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
}

export default function Logpage({ setToken }) {

    const [mail, setMail] = useState('');       //Mail
    const [Pass, setPass] = useState('');       //Password

    const dispatch = useDispatch();
    //form
    const handleSubmit = async e => {

        e.preventDefault();

        const result = await loginUser({
            email: mail,
            password: Pass
        });

        const status = result.status;

        const responseBody = await result.json()

        // connect(mapStateToProps)(Logpage)
        dispatch(login(responseBody.token))

        console.log('token : ', { status , responseBody })

        setToken(responseBody.token);

    }


    const state = useSelector((token) => token)
    if (state.loginReducer.token != null){
        console.log("store : ", state.loginReducer);
    }
    // console.log("Rendering")


    // const state = useSelector((token) => token);
    // console.log("store : ",state.loginReducer);

    return (
        <form className='formContent' onSubmit={handleSubmit} action="/login" method="post">
            <h2 className='formHeading'>Login to pick a challenge</h2>

            <div className='formInput'>
                <Input
                    id='email'
                    data-testid='email'
                    name='email'
                    type='email'
                    onChange={e => setMail(e.target.value)}
                    placeholder='janeDoe@Something.com'
                />
            </div>

            <div className='formInput'>
                <Input
                    id='password'
                    data-testid='password'
                    name='password'
                    type='password'
                    onChange={e => setPass(e.target.value)}
                    placeholder='***********'
                />
            </div>
            <Button variant='primary' data-testid='login-button' className='btn' type='submit'>Login</Button>
        </form>
    )
}

Logpage.propTypes = {
    setToken: PropTypes.func.isRequired
};



const mapStateToProps = (state) => {
    return {
      setToken: state.loginReducer
    };
 };

    connect(mapStateToProps)(Logpage)
