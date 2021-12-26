import { Button, Input } from "@material-ui/core";
import { useState, useCallback, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { createChat, createChatWithThunk, offTrackingCreateChatWithThunk, onTrackingCreateChatWithThunk } from '../../../store/chats/actions'

export const ChatAdd = () => {
    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState('')

    const formReset = useCallback(() => {
        setFormValue('')
    }, []);

    const onChange = (event) => {
        setFormValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(createChatWithThunk(createChat(formValue)))
        formReset()
    };

    useEffect(() => {
        dispatch(onTrackingCreateChatWithThunk);
        return () => {
            dispatch(offTrackingCreateChatWithThunk)
        }
    }, [])

    return (
        <div className="new_chat">
            <form onSubmit={onSubmit} action="" className="message_form">
                <Input
                    className="input_chat"
                    style={{ margin: '20px' }}
                    onChange={onChange}
                    value={formValue}
                    autoFocus
                />
                <Button className="submit_button" type="submit" variant="outlined" style={{ border: 'none', backgroundColor: 'rgb(14, 50, 168)', color: 'white' }}>Add</Button>
            </form>
        </div>
    );
}