import React from "react"
import { useAuth } from "./auth"
import { blogdata } from "./blogdata"
import { Navigate, useNavigate } from "react-router-dom"

function BlogCreate() {
    const navigate = useNavigate()
    const auth = useAuth()
    const [data, setData] = React.useState({
        title: "",
        slug: "",
        content: "",
        author: auth.user.username
    })

    const createPost = (e) => {
        e.preventDefault()
        if (auth.user) {
            blogdata.push(data)
            navigate("/blog")
        } 
    }


    if (auth.user) {
        return (
            <>
                <h1>Create a new blog post</h1>
                <form onSubmit={createPost}>
                    <label>Title: </label>
                    <input 
                        type="text" 
                        value={data.title}
                        onChange={(e) => setData({ ...data, title: e.target.value})} />
                    <br/>
                    <label>Slug: </label>
                    <input 
                        type="text"
                        value={data.slug}
                        onChange={(e) => setData({ ...data, slug: e.target.value})} />
                    <br/>
                    <label>Content: </label>
                    <textarea 
                        value={data.content}
                        onChange={(e) => setData({ ...data, content: e.target.value})}
                    />
                    <br/>
                    <br/>
                    <button type="submit">Create</button>
                </form>
            </>
        )
    } else {
        return <Navigate to="/login" />
    }

    
}

export { BlogCreate }