import React from "react"
import { Link, NavLink } from "react-router-dom"

function Menu() {
    return (
        <nav>
            <ul>
                {routes.map(route => (
                    <li key={route.id}>
                        <NavLink
                            to={route.to}
                            style={({isActive}) => ({color: isActive ? 'red' : 'blue'})}
                        >
                            {route.text}
                        </NavLink>
                    </li>
                ))}
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
routes.push({id: 1, to: '/', text: 'Home'})
routes.push({id: 2,to: '/blog', text: 'Blog'})
routes.push({id: 3,to: '/profile', text: 'Profile'})
routes.push({id: 4,to: '/login', text: 'Login'})
routes.push({id: 5,to: '/logout', text: 'Logout'})

export { Menu }