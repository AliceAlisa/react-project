//import { nanoid } from 'nanoid'
import { messagesRef } from '../../firebase'
export const NEW_MESSAGE = 'NEW_MESSAGE'
export const DEL_MESSAGES = 'DEL_MESSAGES'


export const newMessage = (chatId, message) => ({
    type: NEW_MESSAGE,
    payload: {
        chatId,
        message
    },
})

export const deleteMessages = (chatId) => ({
    type: DEL_MESSAGES,
    payload: chatId
})

/*export const addMessageWithThunk = (chatId, author, text) => (dispatch) => {

    const userMessage = {
        author: author,
        text: text,
        id: nanoid()
    };

    dispatch(newMessage(chatId, userMessage));

    if (author === 'bot') {
        return
    }

    const botMessage = {
        author: 'bot',
        text: 'hello! I am bot',
        id: nanoid()
    }
    // setTimeout(() => dispatch(newMessage(chatId, botMessage)), 2000);

    dispatch(newMessage(chatId, botMessage));
}*/

export const newMessageWithThunk = (chatId, message) => () => {
    messagesRef.child(chatId).push(message)
}

export const deleteMessagesWithThunk = (chatId) => () => {
    messagesRef.child(chatId).remove(() => {
    })
}

export const onTrackingNewMessageWithThunk = (chatId) => (dispatch) => {
    messagesRef.child(chatId).on('child_added', (snapshot) => {
        console.log(snapshot.val())

        dispatch(newMessage(chatId, {

            ...snapshot.val(),

            id: snapshot.key
        }))
    })
}

export const onTrackingDeleteMessagesWithThunk = (chatId) => (dispatch) => {
    messagesRef.child(chatId).on('child_removed', () => {
        dispatch(deleteMessages(chatId))
    })
}

export const offTrackingNewMessageWithThunk = (chatId) => () => {
    messagesRef.child(chatId).off('child_added')
}

export const offTrackingDeleteMessagesWithThunk = (chatId) => () => {
    messagesRef.child(chatId).off('child_removed')
}