import { Button, List, ListItem } from "@material-ui/core";
import { Link } from 'react-router-dom';
import '../../../App.css';
import { connect } from 'react-redux';
import { getChatsList } from "../../../store/chats/selectors";
import { deleteChat } from "../../../store/chats/actions";
import { ChatAdd } from './ChatAdd.js'
import { deleteMessages } from '../../../store/messages/actions';


export const ChatsListRender = ({ deleteChat, deleteMessages, chats }) => {

    return (
        <div className="list-chats">
            <h3>Your Chats</h3>
            <List className="chats"> {
                chats.map((chat) => <ListItem className="chat_name" key={chat.id}>
                    <Link to={'/chats/' + chat.id} className='link-nav'>{chat.name}</Link>
                    <Button onClick={() => {
                        deleteChat(chat.id);
                        deleteMessages(chat.id)
                    }}>-</Button>
                </ListItem>)
            }
            </List>
            <ChatAdd />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        chats: getChatsList(state),
    }
};
const mapDispatchToProps = {
    deleteChat,
    deleteMessages
};
export const ChatsList = connect(mapStateToProps, mapDispatchToProps)(ChatsListRender);