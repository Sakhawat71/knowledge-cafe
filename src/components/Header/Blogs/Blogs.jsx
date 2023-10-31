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
        <div>
            <h3>{blogs.length}</h3>
        </div>
    );
};

export default Blogs;