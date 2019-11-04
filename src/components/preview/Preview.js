import React from "react";
import {connect} from "react-redux"
import {EditAction} from "../../actions/ApplyAction";

import {Card} from "react-bootstrap";

const mapDispatchToProps = dispatch => ({
    editAction: (id, value) => dispatch(EditAction(id, value))
})

const mapStateToProps = state => ({
    ...state
})


class Preview extends React.Component {
    render() {
        const {data: candidate} = this.props.ApplyReducer
        return (
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>{candidate.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{candidate.email}</Card.Subtitle>
                    <Card.Text>
                        {candidate.cl}
                    </Card.Text>
                    <Card.Link href="#">Print</Card.Link>
                    <Card.Link href="#">Close</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Preview)

