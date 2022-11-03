/**
 * @jest-environment jsdom
 */


import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Logpage from './Login'
import React from 'react'
import '@testing-library/jest-dom'
import { response } from 'express'


describe('Login page', () => {
    //Fetch override
    beforeAll(() => {
        global.fetch = jest.fn()
    })
    //Clearring the override
    afterAll(() => {
        global.fetch.mockClear()
    })


    test('Checking if te Login page renders without crashing', () => {
        render(<Logpage setToken={() => { }} />)
    })

    test('Should have email and password fields', () => {
        const { getByTestId } = render(<Logpage setToken={() => { }} />)

        const emailField = getByTestId("email")
        const passwordField = getByTestId("password")
        const button = getByTestId("login-button")


        expect(emailField).not.toBe(null)
        expect(passwordField).not.toBe(null)
        expect(button).not.toBe(null)
    })

    test('Button is enabled and should have Text', () => {
        const { getByTestId } = render(<Logpage setToken={() => { }} />)

        expect(getByTestId('login-button')).not.toBeDisabled()
        expect(getByTestId('login-button')).toHaveTextContent('Login')
    })

    test('check if fields are empty', () => {
        const { getByTestId } = render(<Logpage setToken={() => { }} />)

        const emailField = getByTestId("email")
        const passwordField = getByTestId("password")

        expect(emailField).toHaveTextContent('')
        expect(passwordField).toHaveTextContent('')
    })

    test("checking if email feild has a value", () => {
        const { getByTestId } = render(<Logpage setToken={() => { }} />)
        const emailField = getByTestId("email")

        fireEvent.change(emailField, { target: { value: 'admin@hello.world' } })
        expect(emailField.value).toBe('admin@hello.world')
    })

    test("checking if password feild has a value", () => {
        const { getByTestId } = render(<Logpage setToken={() => { }} />)
        const passwordField = getByTestId("password")

        fireEvent.change(passwordField, { target: { value: 'cc' } })
        expect(passwordField.value).toBe('cc')
    })

    test('Checking if the page renders properly', () => {
        const { getByTestId } = render(<Logpage setToken={() => { emailField, passwordField }} />)
        const emailField = getByTestId("email")
        const passwordField = getByTestId("password")

        fireEvent.change(emailField, { target: { value: 'admin@hello.world' } })
        fireEvent.change(passwordField, { target: { value: 'cc' } })
        userEvent.click(screen.getByTestId('login-button'))
        expect(screen.getByTestId('login-button')).toBeChecked
    })

    test('Calls Login user with correct details', () => {
        const { getByTestId } = render(<Logpage setToken={() => { emailField, passwordField }} />)
        const emailField = getByTestId("email")
        const passwordField = getByTestId("password")

        fireEvent.change(emailField, { target: { value: 'admin@hello.world' } })
        fireEvent.change(passwordField, { target: { value: 'cc' } })

        global.fetch.mockImplementation(() => {
            return Promise.resolve({
                json: () => {
                    return Promise.resolve('fdasf')
                }
            })
        })
        fireEvent.click(screen.getByTestId('login-button'))
        expect(global.fetch).toBeCalled()
    })

    test('For valid login API details it should call set token method', async () => {
        
        const setTokenMock = jest.fn()
        const { getByTestId } = render(<Logpage setToken={setTokenMock} />)
        const emailField = getByTestId("email")
        const passwordField = getByTestId("password")

        fireEvent.change(emailField, { target: { value: 'admin@hello.world' } })
        fireEvent.change(passwordField, { target: { value: 'cc' } })

        global.fetch.mockImplementation(() => {
            return Promise.resolve({
                json: () => {
                    return Promise.resolve('fdasf')
                }
            })
        })
        fireEvent.click(screen.getByTestId('login-button'))
        await sleepFor(1000) //1000 = 1 Second
        expect(setTokenMock).toBeCalled()
    }) 

    test('Checking if 200 status code is returned', async () => {
        
        const setTokenMock = jest.fn()
        const { getByTestId } = render(<Logpage setToken={setTokenMock} />)
        const emailField = getByTestId("email")
        const passwordField = getByTestId("password")

        fireEvent.change(emailField, { target: { value: 'admin@hello.world' } })
        fireEvent.change(passwordField, { target: { value: 'cc' } })

        global.fetch.mockImplementation(() => {
            return Promise.resolve({
                json: () => {
                    return Promise.resolve('fdasf')
                }
            })
        })                                       
        
        fireEvent.click(screen.getByTestId('login-button'))
        await sleepFor(1000)
        //Statuscode 200 means success
        expect(response.statusCode).toBe(200)
        expect(setTokenMock).toBeCalled()    
        
    }) 
})

async function sleepFor (timeInMS){
    return new Promise((resolve) => {
        setTimeout(resolve,timeInMS)
    })
}