import '../../App.css';
import { ChatsList } from './components/ChatsList.js';
import { Chat } from './components/Chat.js';
import { Switch, Route, Link } from 'react-router-dom';
import { NotFound } from '../../routes';


export const Chats = () => {
    const chatList = [
        {
            id: '1',
            name: 'Chat one'
        },
        {
            id: '2',
            name: 'Chat two'
        },
        {
            id: '3',
            name: 'Chat tree'
        },
        {
            id: '4',
            name: 'Chat four'
        },
    ];
    return (
        <>
            <Link to='/' className='link-nav'> Home </Link> /
            <Link to='/profile' className='link-nav'> Profile </Link>
            <div className="chats-list">
                <ChatsList list={chatList} />
                <Switch>
                    <Route component={NotFound} path='/404notfound' />
                    <Route render={() => <Chat list={chatList} />} path='/chats/:chatId' />
                </Switch>
            </div>
        </>
    );
}