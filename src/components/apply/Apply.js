import React from "react"
import {connect} from "react-redux"
import {getJobById} from "../../util/Util"

import {EditAction} from "../../actions/ApplyAction";

import {Form, Button} from "react-bootstrap";

const mapDispatchToProps = dispatch => ({
    editAction: (id, value) => dispatch(EditAction(id, value))
})

const validEmailRegex =
    RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


class Apply extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            email: null,
            cl: null
        }
    }

    validateForm = () => {
        const {data} = this.props.ApplyReducer
        let {name, email, cl} = this.state

        name = (data.name.length) < 5
            ? 'Name must be 5 characters long!'
            : '';

        email = validEmailRegex.test(data.email)
            ? ''
            : 'Email is not valid!';

        cl = (data.cl.length < 50)
            ? 'Cover Letter must be 50 characters long!'
            : '';

        this.setState({name, email, cl})
        return name === '' && email === '' && cl === '';


    }
    onFormChange = (event) => {
        const {id, value} = event.target
        this.props.editAction(id, value)
        this.validateForm()
    }

    submitForm = () => {
        if (this.validateForm()) {
            this.props.history.push("/preview")
        }
    }

    render() {
        const {name, email, cl} = this.state
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
                        {name &&
                        <span className='alert-danger'>{name}</span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email address <span className={"text-danger"}>*</span></Form.Label>
                        <Form.Control onChange={this.onFormChange} id={"email"} type="email" placeholder="Enter email"
                                      required/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        {email &&
                        <span className='alert-danger'>{email}</span>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Cover Letter <span className={"text-danger"}>*</span></Form.Label>
                        <Form.Control onChange={this.onFormChange} id={"cl"} as="textarea" rows="3" required/>
                        {cl &&
                        <span className='alert-danger'>{cl}</span>}
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

