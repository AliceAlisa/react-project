export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_DATA = 'SET_DATA';

export const setLoading = (status) => ({
    type: SET_LOADING,
    payload: status
});
export const setError = (status) => ({
    type: SET_ERROR,
    payload: status
});
export const setData = (data) => ({
    type: SET_DATA,
    payload: data
});

const NEWS_API = 'https://inshortsapi.vercel.app/news?category=science';

export const getNewsThunk = async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setError(false));
    dispatch(setData([]));

    try {
        const response = await fetch(NEWS_API);
        if (!response.ok) {
            throw Error('any error')
        }
        const result = await response.json();
        dispatch(setData(result))
    } catch (e) {
        console.log(e)
        dispatch(setError(true))
    }
    dispatch(setLoading(false))
}