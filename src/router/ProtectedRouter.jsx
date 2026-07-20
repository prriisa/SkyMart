import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { MyStore } from '../context/MyContext'

const ProtectedRouter = ({ children }) => {
    const { currentUser } = useContext(MyStore)

    if (!currentUser) {
        return <Navigate to={"/"} replace />
    }

    return (
        <Outlet />
    )
}

export default ProtectedRouter