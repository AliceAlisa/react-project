import '../App.css';
import { useEffect, useState, useRef } from 'react';
import { TextField, Button, List, ListItem } from "@material-ui/core";

export const Chat = ({ props }) => {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState('');
    const focusedRef = useRef();

    useEffect(() => {
        const checkMessage = () => {
            if (messageList.length > 0 && messageList[messageList.length - 1].author === 'user') {
                setMessageList((state) => {
                    const copyState = [...state];
                    copyState.push({
                        author: 'bot',
                        text: 'hello! I am bot',
                        id: Date.now()
                    })
                    return copyState;
                })
            }
            return
        };

        const timerAnswer = setTimeout(() => {
            checkMessage();
        }, 1500);

        return () => {
            clearTimeout(timerAnswer);
        }
    }, [messageList]);

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const copyMessages = [...messageList];
        copyMessages.push({ author: 'user', text: value, id: Date.now() });
        setMessageList(copyMessages);
        setValue('');
        focusText();
    };

    const focusText = () => {
        focusedRef.current.focus();
    };

    return (
        <div className="messages-container">
            <List className="messages"> {
                messageList.map((message) => <ListItem className="message_text" key={message.id}><span className="author">{message.author}</span> : {message.text}</ListItem>)
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