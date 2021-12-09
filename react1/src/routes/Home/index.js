import '../../App.css';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className='home-container'>
            <div className='nav'>
                <Link to='/profile' className='link-nav'> Profile </Link> /
                <Link to='/chats' className='link-nav'> Chats </Link>
            </div>
            <h1 style={{ textAlign: 'center' }}>Home page</h1>
        </div>
    );
}