import { useState } from 'react'
import './App.css'
import Blogs from './components/Header/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks';

function App() {

    const [bookmarks, setBookmarks] = useState([]);
    const [readingTime,setReadingTime] = useState(0);

    const handelAddBookmark = blog => {
        const newBookmark = [...bookmarks,blog];
        setBookmarks(newBookmark);
    }
    const handelMarkAsRead = time =>{
        setReadingTime(readingTime + time);
    }

    
    
    return (
        <>
            <Header></Header>
            <div className='md:flex max-w-7xl mx-auto'>
                
                <Blogs 
                handelAddBookmark={handelAddBookmark}
                handelMarkAsRead={handelMarkAsRead}
                ></Blogs>
                
                <Bookmarks 
                bookmarks={bookmarks}
                readingTime={readingTime}
                ></Bookmarks>
            </div>
        </>
    )
}

export default App
