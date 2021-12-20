import { nanoid } from 'nanoid'
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

export const addMessageWithThunk = (chatId, author, text) => (dispatch) => {

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
}