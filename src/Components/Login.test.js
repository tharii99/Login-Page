/**
 * @jest-environment jsdom
 */


import {render, screen} from '@testing-library/react'
import Logpage from './Login'
import React from 'react'
import '@testing-library/jest-dom'
// const log = require('./Login')




describe('Login page',() => {
    test('Should have email and password fields', () => { 
        const {getByTestId} = render(<Logpage setToken={() => {     }} />)

        const emailField = getByTestId("email")
        const passwordField = getByTestId("password")
        const button = getByTestId("button")

        
        expect(emailField).not.toBe(null)     
        expect(passwordField).not.toBe(null)       
        expect(button).not.toBe(null)       

    })
})
