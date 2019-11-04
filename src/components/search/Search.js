import React from "react";
import {Form, Button} from "react-bootstrap"
import './Search.css'

import {connect} from "react-redux"

//Actions
import {SearchAction} from "../../actions/SearchAction"

const mapDispatchToProps = dispatch => ({
    searchAction: (keyword) => dispatch(SearchAction(keyword))
})


class JobSearch extends React.Component {
    handleJobSearch = (event) => {
        this.props.searchAction(event.target.value)
    }
    showError = () => {

    }

    showList = () => {
        const {keyword} = this.props.SearchReducer
        if(keyword) {
            this.props.history.push("/job-list")
        } else {
            this.showError()
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Welcome to Job Search</h1>
                <Form.Group>
                    <Form.Control onChange={this.handleJobSearch} type="text" size="sm"
                                  placeholder="Enter the programing language ....."/>
                </Form.Group>

                <Form.Group>
                    <Button onClick={this.showList}>Search Job</Button>
                </Form.Group>


            </div>
        )
    }


}

const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(JobSearch)