import React from 'react'
import UserContext from './userContext'

const ComponentD = () => {
    return (
        <UserContext.Consumer>
            {user => {
                return <h1>Hello {user}</h1>
            }}
        </UserContext.Consumer>
    )
}

export default ComponentD