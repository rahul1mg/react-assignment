import React from "react";
import './List.css'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

import {Button} from "react-bootstrap";

import getJobs from "../../services/GithubJobs"

import {connect} from "react-redux"

const mapDispatchToProps = dispatch => ({
    getJobs: (keyword) => dispatch(getJobs(keyword))
})


class JobList extends React.Component {
    componentDidMount() {
        const {keyword} = this.props.SearchReducer
        this.props.getJobs(keyword)
    }

    showJob(id) {
        this.props.history.push(`/job/${id}`)
    }

    render() {
        const {jobs} = this.props.ListReducer

        const columns = [{
            id: "1",
            accessor: d => <div className="row">
                <div className="col-6">
                    <h6>
                        <Button variant="link" onClick={() => { this.showJob(d.id)}}>{d.company}</Button>
                    </h6>
                    <p>{d.title}</p>
                </div>
                <div className="col-6">
                    <span>{d.location}</span><br/>
                    <span>{d.created_at}</span>
                </div>

            </div>,

        }]
        return (
            <div className="inner">

                <h1>
                    Jobs
                </h1>

                <ReactTable
                    showPagination={false}
                    data={jobs}
                    columns={columns}
                />

            </div>
        )
    }


}

const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(JobList)