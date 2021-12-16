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