import axios from "axios";

import {ListAction} from "../actions/ListAction"

const url = "https://guarded-sierra-28456.herokuapp.com/"

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

