import { NEW_MESSAGE, DEL_MESSAGES } from './actions'

const initialState = {
    messages: {}
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_MESSAGE: {
            const { chatId, message } = action.payload
            const copyMessages = { ...state.messages }

            copyMessages[chatId] = [...(copyMessages[chatId] || []), message]

            return {
                ...state,
                messages: copyMessages
            }

        }
        case DEL_MESSAGES: {
            if (state.messages.hasOwnProperty(action.payload)) {
                const copyMessages = { ...state.messages }
                delete copyMessages[action.payload]

                return {
                    ...state,
                    messages: copyMessages
                }
            } else {
                return state
            }
        }
        default: {
            return state;
        }
    }
}