import { useContext } from 'react'
import { Navigate } from 'react-router'
import { MyStore } from '../context/MyContext'

const ProtectedRouter = ({ children }) => {
    const { currentUser } = useContext(MyStore)

    
    return (
        <div>
            {Object.keys(currentUser).length === 0 ? <Navigate to={"/"} replace /> : children}
        </div>
    )
}

export default ProtectedRouter