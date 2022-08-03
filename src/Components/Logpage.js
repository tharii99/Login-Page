import React, { useState } from 'react'
import { Button, Box } from 'rebass'
import { Input } from '@rebass/forms'

const Logpage = () => {

  const [mail, setMail] = useState('');       //Mail
  const [Pass, setPass] = useState('');       //Password

  const change = (e) => {
    setMail(e.target.value);
  };

  const passChange = (e) => {
    setPass(e.target.value);
  };

  const show = (e) => {
    alert(mail + ' ' + Pass);
  };

  return (
    <form className='formContent'>
      <h2 className='formHeading'>Login to pick a challenge</h2>

      <div className='formInput'>
        <Input
          id='email'
          name='email'
          type='email'
          onChange={change}
          placeholder='janeDoe@Something.com'
        />
      </div>

      <div className='formInput'>
        <Input
          id='password'
          name='password'
          type='password'
          onChange={passChange}
          placeholder='***********'
        />
      </div>
      <Button variant='primary' className='btn' onClick={show}>Login</Button>
    </form>

  )
}

export default Logpage