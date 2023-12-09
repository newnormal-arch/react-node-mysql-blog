import React, { useEffect, useState } from 'react';
import axios from "axios";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const FetchAllBlogs = async () => {
            try {
                const res = await axios.get("http://localhost:3000/blogs");
                setBlogs(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        FetchAllBlogs();
    }, [])
  return (
    <div>
        <h1>All Blogs</h1>
        <div className="blogs">
            {blogs.map((blog) => (
                <div className="blog" key={blog.id}>
                    {blog.image && <img src={blog.image} alt='Blog Feature'/>}
                    <h2>{blog.title}</h2>
                    <p>{blog.desc}</p>
                </div>
            ))}
        </div>
        <button>Create New Post</button>
    </div>
  )
}

export default Blogs