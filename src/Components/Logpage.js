import React from 'react'
import { Button } from 'rebass'
import { Input } from '@rebass/forms'
import { Route, Routes } from 'react-router-dom'

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
        <Button variant='primary' className='btn' >Login</Button>
    </form>

  )

  // function show (){
  //   <Routes>
  //       <Route path="/" element={<Logpage />}></Route>
  //   </Routes>
  // }
}

export default Logpage