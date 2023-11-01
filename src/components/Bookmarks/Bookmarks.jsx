import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
    console.log(bookmarks)
    return (
        <div className="w-1/3 bg-[#1111110D] px-6 py-2 rounded-lg">
            <h2 className="text-2xl font-bold text-center my-3">Bookmarked Blogs : {bookmarks.length}</h2>

            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
}

export default Bookmarks;