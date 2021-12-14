import { Link } from 'react-router-dom';
import '../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_OPTION } from '../../store/profile/actions';

export const Profile = () => {
    const currenOptionState = useSelector((state) => state.someOption);
    const dispatch = useDispatch();

    console.log(currenOptionState)
    return (
        <div>
            <Link to='/' className='link-nav'> Home </Link> /
            <Link to='/chats' className='link-nav'> Chats </Link>
            <h1>Your Profile</h1>
            <div>
                <input type='checkbox' name="profile_option" onChange={() => {
                    dispatch({
                        type: CHANGE_OPTION,
                    })
                }} />Some Profile Option
            </div>
            <h4>Option selected: {currenOptionState.toString()}</h4>
            <p> Your name:</p>
            <p> Your date of birth:</p>
            <p> Info:</p>
        </div>
    );
}