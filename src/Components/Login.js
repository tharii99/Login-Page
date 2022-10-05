import React, { useState } from 'react'
import { Button } from 'rebass'
import { Input } from '@rebass/forms'
import PropTypes from 'prop-types';


async function loginUser(credentials) {
    console.log('Inside the login User function')
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


    //form
    const handleSubmit = async e => {

        e.preventDefault();
        // if (mail == 'admin@circles.asia' && Pass == 'cc') {
        const result = await loginUser({
            email: mail,
            password: Pass
        });
        const status = result.status;
        const responseBody = await result.json()

        console.log('token : ', { status, responseBody })


        if (result.status == 200) {
            console.log('booom')
        } else {
            console.log('sad')
        }

        setToken(responseBody.token);
    }
    // }

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


// export default Logpage

