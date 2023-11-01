
import PropTypes from 'prop-types'

const Bookmark = ({ bookmarks }) => {
    return (
        <div className="w-1/3">
            <h2 className="text-2xl font-bold">Bookmarked Blogs : {bookmarks.length}</h2>
        </div>
    )
}

Bookmark.propTypes = {
    bookmarks : PropTypes.array
}

export default Bookmark