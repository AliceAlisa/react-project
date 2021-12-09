import { List, ListItem } from "@material-ui/core";
import { Link } from 'react-router-dom';
import '../../../App.css';
export const ChatsList = ({ list }) => {
    return (
        <div className="list-chats">
            <h3>Your Chats</h3>
            <List className="chats"> {
                list.map((chat) => <ListItem className="chat_name" key={chat.id}><Link to={'/chats/' + chat.id} className='link-nav'>{chat.name}</Link></ListItem>)
            }
            </List>
        </div>
    );
}