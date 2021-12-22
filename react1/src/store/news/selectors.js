export const getNewsFromStore = (state) => state.news;
export const getNews = (state) => getNewsFromStore(state).data;
export const getLoading = (state) => getNewsFromStore(state).isLoading;
export const getError = (state) => getNewsFromStore(state).isError;