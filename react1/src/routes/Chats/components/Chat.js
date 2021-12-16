import '../../../App.css';
import { useEffect, useState, useRef } from 'react';
import { TextField, Button, List, ListItem } from "@material-ui/core";
import { Redirect, useParams } from 'react-router-dom';
import { getChatsList } from "../../../store/chats/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getMessagesByChatId } from '../../../store/messages/selectors'
import { newMessage } from '../../../store/messages/actions';

export const Chat = () => {
    const [value, setValue] = useState('');
    const focusedRef = useRef();
    const { chatId } = useParams();
    const dispatch = useDispatch();

    const ChatsList = useSelector(getChatsList)
    const messages = useSelector(getMessagesByChatId([chatId])) || [];

    useEffect(() => {
        const checkMessage = () => {
            if (messages.length > 0 && messages[messages.length - 1].author === 'user') {
                dispatch(newMessage([chatId], {
                    author: 'bot',
                    text: 'hello! I am bot',
                    id: Date.now()
                }))
            }
            return
        };

        const timerAnswer = setTimeout(() => {
            checkMessage();
        }, 1500);

        return () => {
            clearTimeout(timerAnswer);
        }
    });

    useEffect(() => {
        focusText();
    }, [chatId]);

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(newMessage([chatId], {
            author: 'user',
            text: value,
            id: Date.now()
        }))
        setValue('');
        focusText();
        console.log(messages)
    };

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