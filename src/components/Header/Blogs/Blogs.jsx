/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Blog from "../../Blog/Blog";
import PropTypes from 'prop-types';



const Blogs = ({ handelAddBookmark ,handelMarkAsRead}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="w-2/3">
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    handelAddBookmark={handelAddBookmark}
                    blog={blog}
                    handelMarkAsRead={handelMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handelAddBookmark: PropTypes.func,
    handelMarkAsRead: PropTypes.func
}

export default Blogs;