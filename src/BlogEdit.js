import React from "react"
import { useAuth } from "./auth"
import { Navigate, useParams } from "react-router-dom"
import { blogdata } from "./blogdata"
function BlogEdit() {

    const { slug } = useParams()
    const auth = useAuth()

    const [data, setData] = React.useState({
        title: "",
        slug: "",
        content: ""
    })

    const bd = blogdata.find(post => post.slug === slug)
    console.log(bd)
    setData(bd)

    const updatePost = (e) => {
        e.preventDefault()
        const index = blogdata.findIndex(post => post.slug === slug)
        blogdata[index] = data
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
                    <button type="submit">Udpate</button>
                </form>
            </>
        )
    } else {
        return <Navigate to="/login" />
    }
    
}

export { BlogEdit }