/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="w-2/3">
            <h2 className="text-3xl">Blogs</h2>
            <h3>Total blogs: {blogs.length}</h3>
        </div>
    );
};

export default Blogs;