import '../../App.css';
import { ChatsListWithConnect } from './components/ChatsList.js';
import { Chat } from './components/Chat.js';
import { Switch, Route, Link } from 'react-router-dom';
import { NotFound } from '../../routes';


export const Chats = () => {
    return (
        <>
            <Link to='/' className='link-nav'> Home </Link> /
            <Link to='/profile' className='link-nav'> Profile </Link>
            <div className="chats-list">
                <ChatsListWithConnect />
                <Switch>
                    <Route component={NotFound} path='/404notfound' />
                    <Route render={() => <Chat />} path='/chats/:chatId' />
                </Switch>
            </div>
        </>
    );
}