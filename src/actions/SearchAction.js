export const SearchAction = (payload) => dispatch => {
    dispatch({
        type: "JOB_SEARCH_CLICK",
        payload: payload

    })
}