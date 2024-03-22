import React from "react"
import { useAuth } from "./auth"

function LogoutPage() {
    const auth = useAuth()
    const logout = (e) => {
        e.preventDefault()
        auth.logout()
    }
    return (
        <>
            <form onSubmit={logout}>
                <label>Segura de que quieres salir?</label>
                <button type="submit">Salir</button>
            </form>
        </>
    )
}

export { LogoutPage }