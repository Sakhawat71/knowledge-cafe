/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";



const Blogs = ({handelAddBookmark}) => {

    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="w-2/3">
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    handelAddBookmark={handelAddBookmark} 
                    blog={blog}
                    ></Blog>)
            }
        </div>
    );
};

export default Blogs;