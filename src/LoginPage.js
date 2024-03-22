import React from "react"
import { useAuth } from "./auth"
import { useNavigate } from "react-router-dom"

function LoginPage() {
    
    const auth = useAuth()
    const [username, setUsername] = React.useState()
    const login = (e) => {
        e.preventDefault()
        auth.login({ username })
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
            </form>
        </>
    )
}

export { LoginPage }