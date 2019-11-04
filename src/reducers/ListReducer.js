export default (state = {}, action) => {
    switch (action.type) {
        case "JOBS_FETCHED":
            return {
                jobs: action.payload
            }
        default:
            return state
    }
}