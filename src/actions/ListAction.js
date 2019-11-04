export const ListAction = (payload) => dispatch => {
    dispatch({
        type: "JOBS_FETCHED",
        payload: payload

    })
}

