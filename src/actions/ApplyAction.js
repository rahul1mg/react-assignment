export const EditAction = (field, data) => dispatch => {
    dispatch({
        type: "ADD_CHANGE",
        payload: {field, data}
    })
}