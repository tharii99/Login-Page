import React, { useState } from 'react'
import { Button } from 'rebass'
import { Input } from '@rebass/forms'
import PropTypes from 'prop-types';


async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Logpage({ setToken }) {

    const [mail, setMail] = useState('');       //Mail
    const [Pass, setPass] = useState('');       //Password


    //form
    const handleSubmit = async e => {

        e.preventDefault();
        if (mail == 'admin@circles.asia' && Pass == 'cc') {
            const token = await loginUser({
                email:mail,
                password:Pass
            });

            setToken(token);
        }
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
            <Button variant='primary' data-testid='button' className='btn' type='submit'>Login</Button>
        </form>

    )

}

Logpage.propTypes = {
    setToken: PropTypes.func.isRequired
};


// export default Logpage

