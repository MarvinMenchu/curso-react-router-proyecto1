import React from "react"
import { Navigate, useLocation, useNavigate } from "react-router-dom"

const userlist = ["Juan", "Freddy", "Marvin", "Duo"]
const adminList = ["Juan", "Freddy", "Marvin"]
const AuthContext = React.createContext()

function AuthProvider({ children}){
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || -1
    const [user, setUser] = React.useState(null)

    const login = ({ username }) => {
        const isUser = userlist.find(user => user === username)
        const isAdmin = adminList.find(admin => admin === username)
        
        if (isUser) {
            setUser({ username })
            navigate(from, { replace: true })
        } 

        if (isAdmin) {
            setUser({ username, isAdmin: true })
        }
    }

    const logout = () => {
        setUser(null)
        navigate("/")
    }

    const auth = {
        user,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const auth = React.useContext(AuthContext)
    return auth
}

function AuthRoute (props) {
    const location = useLocation()

    const auth = useAuth()

    if (!auth.user) {
        return <Navigate to="/login" state={{from: location}} replace/>
    }

    return props.children
}

export { AuthProvider, useAuth, AuthRoute }