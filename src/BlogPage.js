import React from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { blogdata } from "./blogdata"
import { useAuth } from "./auth"

function BlogPage() {

    const auth = useAuth()

    const navigate = useNavigate()

    const createPost = () => {
        if (auth.user) {
            navigate("/blog/new")
        }
    }

    return (
        <>
            <h1>Blog</h1>
            {auth.user && (
                <button onClick={createPost}>Add post</button>
            )}
            <ul>
            {blogdata.map(post => (
                <BlogLink key={post.slug} post={post} />
            ))}
            </ul>
            <Outlet />
        </>
    )
}

function BlogLink({post}) {
    return (
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
    )
}



export { BlogPage }