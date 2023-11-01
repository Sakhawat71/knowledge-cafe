import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { cover, title, author, author_img, reading_time, post_date, hashtags} = blog;
    console.log(blog)

    return (
        <div className='border my-3 mx-10 rounded-md'>
            <figure >
                <img className='rounded-md' src={cover} alt={`cover pic of the titel ${title}`} />
            </figure>
            <div className='flex justify-between items-center mt-5 mb-3 px-3'>
                <div className='flex gap-6 justify-center items-center'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3>{author}</h3>
                        <p className='text-[#11111199]'>{post_date}</p>
                    </div>
                </div>
                <div className='pr-3'>
                    <p>{reading_time} min read</p>
                </div>
            </div>

            <h2 className='font-bold text-2xl px-3 mb-3'>{title}</h2>
            {
                hashtags.map((hash,idx)=> <span key={idx}> #{hash}</span>)
            }
            <br />
            <a href="#">Mark as read</a>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object
}

export default Blog;