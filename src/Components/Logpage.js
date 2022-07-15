import React from 'react'
import { Button } from 'rebass'
import { Input } from '@rebass/forms'

const Logpage = () => {
  return (
    <form className='formContent'>
        <h2 className='formHeading'>Login to pick a challenge</h2>
        
        <div className='formInput'>
        <Input
        id='email'
        name='email'
        type='email'
        placeholder='jane@example.com'
      />
        </div>

        <div className='formInput'>
        <Input
        id='password'
        name='password'
        type='password'
        placeholder='***********'
      />
        </div>

        <Button variant='primary' mr={2} className='btn'>Login</Button>
    </form>

  )
}

export default Logpage