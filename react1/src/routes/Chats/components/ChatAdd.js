import { Button, Input } from "@material-ui/core";
import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createChat } from '../../../store/chats/actions'
import { getChatsList } from "../../../store/chats/selectors";


export const ChatAdd = () => {
    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState('')
    const list = useSelector(getChatsList)

    const formReset = useCallback(() => {
        setFormValue('')
    }, []);

    const onChange = (event) => {
        setFormValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(createChat({
            id: Date.now().toString(),
            name: formValue
        }))
        console.log(list);
        formReset()
    };

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