import '../../App.css';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className='home-container'>
            <div className='nav'>
                <Link to='/profile' className='link-nav'> Profile </Link> /
                <Link to='/chats' className='link-nav'> Chats </Link> /
                <Link to='/news' className='link-nav'> News </Link> /
                <Link to='/login' className='link-nav'> Login </Link> /
                <Link to='/signup' className='link-nav'> Sing Up </Link>
            </div>
            <h1 style={{ textAlign: 'center' }}>Home page</h1>
        </div>
    );
}