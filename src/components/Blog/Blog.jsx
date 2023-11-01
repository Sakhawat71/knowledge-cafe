import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog , handelAddBookmark}) => {
    const { cover, title, author, author_img, reading_time, post_date, hashtags } = blog;
    // console.log(blog)

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
                <div className='pr-3 '>
                    <span>{reading_time} min read </span>
                    <button onClick={()=> handelAddBookmark(blog)}><CiBookmark></CiBookmark></button>
                </div>
            </div>

            <h2 className='font-bold text-2xl px-3 mb-3'>{title}</h2>
            {
                hashtags.map((hash, idx) => <span className='pl-3' key={idx}>#{hash}</span>)
            }

            <br />

            <button className='btn py-2 px-3 border rounded-lg ml-3 my-2'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
    handelAddBookmark : PropTypes.func.isRequired
}

export default Blog;