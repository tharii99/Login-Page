/**
 * @jest-environment jsdom
 */


import React from 'react'
import '@testing-library/jest-dom'
import Dashboard from './Dashboard'
import {render} from '@testing-library/react'

describe('Dashboard',() => {
    test('Checking if te Login page renders without crashing', () => {
        render(<Dashboard />)
    })
})