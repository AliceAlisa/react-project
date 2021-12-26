export const getMessagesReducer = (state) => state.messages || {};
export const getMessages = (state) => getMessagesReducer(state).messages || {};
export const getMessagesByChatId = (chatId) => (state) => getMessages(state)[chatId];
