import React from "react"
import { useAuth } from "./auth"
import { Navigate, useNavigate } from "react-router-dom"

function LoginPage() {
    const navigate = useNavigate()
    const auth = useAuth()
    const [username, setUsername] = React.useState()
    const [result, setResult] = React.useState()
    const login = (e) => {
        e.preventDefault()
        auth.login({ username })
        navigate(-1)
        if (!!!auth.user){
            setResult("Usuario no encontrado")
        }
    }

    if (auth.user) {
        return <Navigate to="/profile" />
    }

    return (
        <>
            <form onSubmit={login}>
                <label>Escribe tu nombre de usuario:</label>
                <input 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Entrar</button>
                <br/>
                <span>{result}</span>
            </form>
        </>
    )
}

export { LoginPage }