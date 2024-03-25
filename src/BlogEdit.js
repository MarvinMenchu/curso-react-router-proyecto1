import React, { useEffect } from "react"
import { useAuth } from "./auth"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { blogdata } from "./blogdata"
function BlogEdit() {
    const navigate = useNavigate()
    const { slug } = useParams()
    const auth = useAuth()

    const blog = {
        title: "",
        slug: "",
        content: ""
    }

    const [data, setData] = React.useState(blog)

    useEffect(() => {
        const bd = blogdata.find(post => post.slug === slug)
        setData(bd)
    }, [])

    const updatePost = (e) => {
        e.preventDefault()
        const index = blogdata.findIndex(post => post.slug === slug)
        blogdata[index] = data
        navigate("/blog")
    }

    if (auth.user){
        return (
            <>
                <h1>Blog Edit</h1>
                <form onSubmit={updatePost}>
                    <label>Title: </label>
                    <input 
                        type="text" 
                        value={data.title}
                        onChange={(e) => setData({ ...data, title: e.target.value})}   />
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
                    <button type="submit">Udpate</button>
                </form>
            </>
        )
    } else {
        return <Navigate to="/login" />
    }
    
}

export { BlogEdit }