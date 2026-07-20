import React from 'react'
import { useContext } from 'react'
import { MyStore } from '../context/MyContext'
import { children } from 'react'
import { Navigate } from 'react-router'

const PublicRouter = () => {
    const { currentUser } = useContext(MyStore)

    return (
        <div>
            {Object.keys(currentUser).length === 0 ? children : <Navigate to={'/home'} replace />}
        </div>
    )
}

export default PublicRouter