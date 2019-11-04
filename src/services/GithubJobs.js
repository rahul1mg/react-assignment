import axios from "axios";

import {ListAction} from "../actions/ListAction"

const url = "http://localhost:4000"

function getJobs(keyword = "ruby") {
    return (dispatch) => {
        axios.get(`${url}?desc=${keyword}&page=1`,
            {headers: {'Access-Control-Allow-Origin': '*'}})
            .then((response) => {
                dispatch(ListAction(response.data))
            })
    }
}


export default getJobs

