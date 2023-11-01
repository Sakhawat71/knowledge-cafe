import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    return (
        <div>
            <h2>{bookmark.title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark : PropTypes.object,
};

export default Bookmark;