import React from 'react'
import {Text} from 'rebass'

const Dashboard = () => {
    return (
        <div>
            <div className='boxLayer'>
                <Text
                    fontSize={[3, 4, 5]}
                    fontWeight='bold'
                    color='primary'>
                    INFORMATION
                </Text>
                <p>Email Address : admin@circles.asia</p>
                <p>Name : Circles</p>
                <p>Location : Colombo</p>
            </div>
        </div>
    )
}

export default Dashboard