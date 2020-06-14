import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from "react-router-dom";


class ReviewFeedback extends Component {
    state = {
        feeling: 0,
        understanding: 0,
        support: 0,
        comments: ''
    }

    handleSubmit = () => {

        console.log('you clicked submit button', (this.props.reduxState.feedbackReducer));
        // Make a POST request to the server
        axios.post('/feedback', (this.props.reduxState.feedbackReducer))
            .then(response => {
                console.log('response from POST in client', response.data)

            })
            .catch(err => {
                alert('in axios post', err)
            })
        this.props.history.push('/thanks');

    }



}


const mapStateToProps = (reduxState) => {
    // Attaching redux state to this.props.reduxState
    return {
        reduxState
    }
}

const connectedReviewFeedback = connect(mapStateToProps)(ReviewFeedback)

export default withRouter(connectedReviewFeedback)