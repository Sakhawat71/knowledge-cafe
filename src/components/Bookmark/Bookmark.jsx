import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    return (
        <div className='bg-white p-4 my-3 rounded-xl'>
            <h2 className='text-xl my-2 font-semibold'>{bookmark.title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark : PropTypes.object,
};

export default Bookmark;