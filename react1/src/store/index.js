import { createStore, combineReducers } from 'redux';
import { optionReducer } from './profile/reducer';
import { chatsReducer } from './chats/reducer';
import { messagesReducer } from './messages/reducer'


export const store = createStore(
    combineReducers({
        profile: optionReducer,
        chats: chatsReducer,
        messages: messagesReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);