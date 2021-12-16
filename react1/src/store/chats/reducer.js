import { CREATE_CHAT, DELETE_CHAT } from './actions'

const initialState = {
    chats: [{
        id: '1',
        name: 'Chat one'
    },
    {
        id: '2',
        name: 'Chat two'
    },
    {
        id: '3',
        name: 'Chat tree'
    },
    {
        id: '4',
        name: 'Chat four'
    }],
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CHAT: {
            return {
                ...state,
                chats: [
                    ...state.chats,
                    action.payload
                ]
            }
        }
        case DELETE_CHAT: {
            const newChtasList = state.chats.filter((chat) => chat.id !== action.payload);
            return {
                ...state,
                chats: newChtasList
            }
        }
        default: {
            return state;
        }
    }
}