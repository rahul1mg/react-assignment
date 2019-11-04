import React from "react"
import {connect} from "react-redux"
import {Button} from "react-bootstrap";
import {getJobById} from "../../util/Util"

const mapDispatchToProps = dispatch => ({})

class Job extends React.Component {


    apply(jobId) {
        this.props.history.push(`/apply/${jobId}`)
    }

    render() {
        const {params} = this.props.match
        const {jobs} = this.props.ListReducer
        const job = getJobById(jobs, params.jobId)
        return (
            <div className="container">
                <p>{job.type + "/" + job.location} </p><br/>
                <h1>{job.title}</h1>
                <hr/>
                <div dangerouslySetInnerHTML={{__html: job.description}}></div>
                <Button onClick={() => {
                    this.apply(job.id)
                }}>Apply </Button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(Job)
