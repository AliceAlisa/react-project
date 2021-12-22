import '../../App.css';
import { ChatsList } from './components/ChatsList.js';
import { Chat } from './components/Chat.js';
import { Switch, Route, Link } from 'react-router-dom';
import { NotFound } from '../../routes';


export const Chats = () => {
    return (
        <>
            <Link to='/' className='link-nav'> Home </Link> /
            <Link to='/profile' className='link-nav'> Profile </Link> /
            <Link to='/news' className='link-nav'> News </Link>
            <div className="chats-list">
                <ChatsList />
                <Switch>
                    <Route component={NotFound} path='/404notfound' />
                    <Route render={() => <Chat />} path='/chats/:chatId' />
                </Switch>
            </div>
        </>
    );
}