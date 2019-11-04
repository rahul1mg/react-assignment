import React from "react"
import {connect} from "react-redux"
import {getJobById} from "../../util/Util"

import {EditAction} from "../../actions/ApplyAction";

import {Form, Button} from "react-bootstrap";

const mapDispatchToProps = dispatch => ({
    editAction: (id, value) => dispatch(EditAction(id, value))
})


class Apply extends React.Component {
    onFormChange = (event) => {
        const {id, value} = event.target
        this.props.editAction(id, value)
    }

    submitForm = () => {
        this.props.history.push("/preview")
    }

    render() {
        const {params} = this.props.match
        const {jobs} = this.props.ListReducer
        const job = getJobById(jobs, params.jobId)
        return (
            <div className="container">
                <h1> Applying for {job.title}</h1>
                <Form>
                    <Form.Group>
                        <Form.Label>Name <span className={"text-danger"}>*</span></Form.Label>
                        <Form.Control onChange={this.onFormChange} id={"name"} type="text" placeholder="Enter name"
                                      required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email address <span className={"text-danger"}>*</span></Form.Label>
                        <Form.Control onChange={this.onFormChange} id={"email"} type="email" placeholder="Enter email"
                                      required/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Cover Letter <span className={"text-danger"}>*</span></Form.Label>
                        <Form.Control onChange={this.onFormChange} id={"cl"} as="textarea" rows="3" required/>
                    </Form.Group>

                    <Form.Group controlId="formResume">
                        <Form.Label>Resume</Form.Label>
                        <Form.Control type="file"/>
                    </Form.Group>
                    <Button variant="primary" onClick={this.submitForm}>
                        Submit
                    </Button>
                </Form>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
})
export default connect(mapStateToProps, mapDispatchToProps)(Apply)

