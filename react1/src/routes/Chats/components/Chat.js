import '../../../App.css';
import { useEffect, useState, useRef, useCallback } from 'react';
import { TextField, Button, List, ListItem } from "@material-ui/core";
import { Redirect, useParams } from 'react-router-dom';
import { getChatsList } from "../../../store/chats/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getMessagesByChatId } from '../../../store/messages/selectors'
import { addMessageWithThunk } from '../../../store/messages/actions';

export const Chat = () => {
    const [value, setValue] = useState('');
    const focusedRef = useRef();
    const { chatId } = useParams();
    const dispatch = useDispatch();

    const ChatsList = useSelector(getChatsList)
    const messages = useSelector(getMessagesByChatId([chatId])) || [];

    const onSubmit = useCallback(() => {
        dispatch(addMessageWithThunk(chatId, 'user', value));
        setValue('');
        focusText();
    }, [chatId, dispatch, value]);

    useEffect(() => {
        focusText();
    }, [chatId]);

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const focusText = () => {
        focusedRef.current.focus();
    };

    if (!ChatsList.find(({ id }) => id === chatId)) {
        return <Redirect to='/404notfound' />
    };

    return (
        <div className="messages-container">
            <List className="messages"> {
                messages.map((message) => <ListItem className="message_text" key={message.id}><span className="author">{message.author}</span> : {message.text}</ListItem>)
            }
            </List>
            <form onSubmit={onSubmit} action="" className="message_form">
                <TextField
                    inputRef={focusedRef}
                    className="text_area"
                    style={{ margin: '20px' }}
                    id="outlined-basic"
                    label="Message"
                    variant="outlined"
                    onChange={onChange}
                    value={value}
                    autoFocus
                />
                <Button className="submit_button" type="submit" variant="outlined" style={{ border: 'none', backgroundColor: 'rgb(14, 50, 168)', color: 'white' }}>Send</Button>
            </form>
        </div>
    );
}