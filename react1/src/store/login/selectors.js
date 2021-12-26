export const getUserFromStore = (state) => state.user;
export const getUser = (state) => getUserFromStore(state).user;
export const getUserId = (state) => getUser(state)?.uid || null;
export const getIsAuth = (state) => state.user.user !== null;