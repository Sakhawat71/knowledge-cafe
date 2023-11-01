import './Header.css';
import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className='flex justify-between items-center p-2 m-4 border-b max-w-7xl mx-auto'>
            <h1 className='font-bold text-3xl'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;