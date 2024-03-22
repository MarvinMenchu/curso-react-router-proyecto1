import React from "react"
import { NavLink } from "react-router-dom"
import { useAuth } from "./auth"

function Menu() {

    const auth = useAuth()


    return (
        <nav>
            <ul>
                {routes.map(route => {
                    if (route.publicOnly && auth.user) return null
                    if (route.private && !auth.user) return null
                    return (
                        (
                            <li key={route.id}>
                                <NavLink
                                    to={route.to}
                                    style={({isActive}) => ({color: isActive ? 'red' : 'blue'})}
                                >
                                    {route.text}
                                </NavLink>
                            </li>
                        )
                    )
                })}
                {/* <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li> */}
                {/* <li>
                <NavLink
                    //className={(isActive) => ''}
                    style={({isActive}) => ({color: isActive ? 'red' : 'blue'})}
                    to="/"
                >Home</NavLink>
                </li>
                <li>
                <NavLink 
                    style={({isActive}) => ({color: isActive ? 'red' : 'blue'})}
                    to="/blog"
                >Blog</NavLink>
                </li>
                <li>
                <NavLink
                    style={({isActive}) => ({color: isActive ? 'red' : 'blue'})}
                    to="/profile"
                >Profile</NavLink>
                </li> */}
                
            </ul>
        </nav>
    )
}

const routes = []
routes.push({id: 1, to: '/', text: 'Home', private: false})
routes.push({id: 2,to: '/blog', text: 'Blog', private: false})
routes.push({id: 3,to: '/profile', text: 'Profile', private: true})
routes.push({id: 4,to: '/login', text: 'Login', private: false, publicOnly: true})
routes.push({id: 5,to: '/logout', text: 'Logout', private: true})

export { Menu }