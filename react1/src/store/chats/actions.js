import { chatsRef } from "../../firebase"

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

export const createChatWithThunk = (chat) => () => {
    chatsRef.push(chat)
}

export const deleteChatWithThunk = (chatId) => () => {
    chatsRef.child(chatId).remove(() => {
    });
}

export const onTrackingCreateChatWithThunk = (dispatch) => {
    chatsRef.on('child_added', (snapshot) => {
        debugger
        console.log(chatsRef.child(snapshot.key))
        dispatch(createChat({
            ...snapshot.val(),
            name: snapshot.val().payload,
            id: snapshot.key
        }))
    })
}

export const offTrackingCreateChatWithThunk = () => {
    chatsRef.off('child_added')
}

export const onTrackingDeleteChatWithThunk = (dispatch) => {
    chatsRef.on('child_removed', (snapshot) => {

        dispatch(deleteChat(snapshot.key))
    })
}

export const offTrackingDeleteChatWithThunk = () => {
    chatsRef.off('child_removed')
}