export default (state = {}, action) => {
    switch (action.type) {
        case "ADD_CHANGE":
            let form = state.data
            const {field, data} = action.payload
            form[field] = data
            return {
                data: form
            }
        default:
            return state
    }
}