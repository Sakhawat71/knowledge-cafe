import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
    console.log(bookmarks)
    return (
        <div className="w-1/3">
            <h2 className="text-2xl font-bold">Bookmarked Blogs : {bookmarks.length}</h2>

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