import { useEffect, useCallback } from 'react';
import { Button, List, ListItem } from "@material-ui/core";
import { Link } from 'react-router-dom';
import '../../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getChatsList } from "../../../store/chats/selectors";
import { deleteChatWithThunk, offTrackingDeleteChatWithThunk, onTrackingDeleteChatWithThunk } from "../../../store/chats/actions";
import { ChatAdd } from './ChatAdd.js'
import { deleteMessagesWithThunk } from '../../../store/messages/actions';


export const ChatsList = () => {
    const chats = useSelector(getChatsList);
    const dispatch = useDispatch();

    const onDelete = useCallback((id) => {
        dispatch(deleteChatWithThunk(id))
        dispatch(deleteMessagesWithThunk(id))
    }, []);

    useEffect(() => {
        dispatch(onTrackingDeleteChatWithThunk);
        return () => {
            dispatch(offTrackingDeleteChatWithThunk)
        }
    }, [])

    return (
        <div className="list-chats">
            <h3>Your Chats</h3>
            <List className="chats"> {
                chats?.map((chat) => <ListItem className="chat_name" key={chat.id}>
                    <Link to={'/chats/' + chat.id} className='link-nav'>{chat.name}</Link>
                    <Button onClick={() => {
                        onDelete(chat.id);
                    }}>-</Button>
                </ListItem>)
            }
            </List>
            <ChatAdd />
        </div>
    );
}