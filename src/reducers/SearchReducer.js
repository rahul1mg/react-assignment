export default (state = {}, action) => {
    switch (action.type) {
        case "JOB_SEARCH_CLICK":
            return {
                keyword: action.payload
            }
        default:
            return state
    }
}