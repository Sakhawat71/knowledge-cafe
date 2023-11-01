import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {

    return (
        <div className="md:w-1/3 space-y-2 ">

            <div className=' text-center py-4 rounded-xl bg-[#1111110D] sticky top-0'>
                <h2 className='text-2xl font-bold text-[#6047EC]'>Spent time on read : {readingTime} min</h2>
            </div>

            <div className=' bg-[#1111110D] px-6 py-2 rounded-lg sticky top-20'>
                <h2 className="text-2xl font-bold text-center my-3">Bookmarked Blogs : {bookmarks.length}</h2>

                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;