import './App.css'
import Bookmark from './components/Bookmark/Bookmark'
import Blogs from './components/Header/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {

    return (
        <>
            <Header></Header>
            <div className='md:flex'>
            <Blogs></Blogs>
            <Bookmark></Bookmark>
            </div>
        </>
    )
}

export default App
