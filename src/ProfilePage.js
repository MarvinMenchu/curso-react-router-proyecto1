import React from "react"
import { useAuth } from "./auth"

function ProfilePage() {
    const auth = useAuth()

    return (
        <>
            <h1>Profile Page</h1>
            <p>Welcome, {auth.user?.username}</p>
        </>
    )
}

export { ProfilePage }