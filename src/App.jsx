import { useState } from 'react'
import './App.css'
import Bookmark from './components/Bookmark/Bookmark'
import Blogs from './components/Header/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {

    const [bookmarks, setBookmarks] = useState([]);
    const handelAddBookmark = blog => {
        const newBookmark = [...bookmarks,blog];
        setBookmarks(newBookmark);
    }

    console.log(bookmarks);
    return (
        <>
            <Header></Header>
            <div className='md:flex max-w-7xl mx-auto'>
                <Blogs handelAddBookmark={handelAddBookmark}></Blogs>
                <Bookmark></Bookmark>
            </div>
        </>
    )
}

export default App
