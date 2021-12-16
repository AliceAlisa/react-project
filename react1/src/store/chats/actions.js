export const CREATE_CHAT = 'CREATE_CHAT'
export const DELETE_CHAT = 'DELETE_CHAT'

/**
 * 
 * @param {Object} chat 
 * @param {string} chat.id 
 * @param {string} chat.name 
 */
export const createChat = (chat) => ({
    type: CREATE_CHAT,
    payload: chat
})

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    payload: chatId
})

