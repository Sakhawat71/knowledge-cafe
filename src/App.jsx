import { useState } from 'react'
import './App.css'
import Blogs from './components/Header/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks';

function App() {

    const [bookmarks, setBookmarks] = useState([]);
    const handelAddBookmark = blog => {
        const newBookmark = [...bookmarks,blog];
        setBookmarks(newBookmark);
    }
    console.log(bookmarks)
    return (
        <>
            <Header></Header>
            <div className='md:flex max-w-7xl mx-auto'>
                <Blogs handelAddBookmark={handelAddBookmark}></Blogs>
                <Bookmarks bookmarks={bookmarks}></Bookmarks>
            </div>
        </>
    )
}

export default App
