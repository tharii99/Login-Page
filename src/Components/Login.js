import React, { useState } from 'react'
import { Button } from 'rebass'
import { Input } from '@rebass/forms'
import PropTypes from 'prop-types';
import { userFetch } from '../actions';
import { useDispatch } from 'react-redux'

export default function Logpage({ setToken }) {

    const [mail, setMail] = useState('');       //Mail
    const [Pass, setPass] = useState('');       //Password

    const dispatch = useDispatch();
    //form
    const handleSubmit = async e => {

        e.preventDefault();

        const result = ({
            email: mail,
            password: Pass
        })

        const checkIn = dispatch(userFetch(result))
        const token = localStorage.getItem('token');
        console.log("store : ", token);
        setToken(token);
    }



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




