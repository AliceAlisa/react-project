import { Link } from 'react-router-dom';
import '../../App.css';

export const Profile = () => {
    return (
        <div>
            <Link to='/' className='link-nav'> Home </Link> /
            <Link to='/chats' className='link-nav'> Chats </Link>
            <h1>Your Profile</h1>
            <p> Your name:</p>
            <p> Your date of birth:</p>
            <p> Info:</p>
        </div>
    );
}