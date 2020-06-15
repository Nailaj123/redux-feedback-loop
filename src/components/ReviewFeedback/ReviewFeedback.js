import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from "react-router-dom";



class ReviewFeedback extends Component {
    state = {
        feeling: 0,
        understanding: 0,
        support: 0,
        comments: '',
    };

    const postFeedback = (feedbackReducer) => {
        return axios({
            method: 'POST',
            url: '/feedback',
            data: feedbackReducer
        }).then(response => {
            console.log('response from POST in client', response.data)

        })
            .catch(err => {
                alert('in axios post', err)
            })
        this.props.history.push('/thanks');
    }



    // console.log('you clicked submit button', (this.props.reduxState.feedbackReducer));
    // Make a POST request to the server
    // axios.post('/feedback', (this.props.reduxState.feedbackReducer))


    moveToHomePage = () => {
        this.props.history.push('/')
    }

    submitToDatabase = () => {
        postFeedback(this.props.reduxState.feedbackReducer);
        this.moveToHomePage();
    }
    render() {


        return (
            <div>
                <h2>Lets Review</h2>
                <form>
                    <p>Feeling: {this.props.reduxState.feedbackReducer.feeling}</p>
                    <p>Understanding: {this.props.reduxState.feedbackReducer.understanding}</p>
                    <p>Supported: {this.props.reduxStatefeedbackReducer.support}</p>
                    <p>Comment: {this.props.reduxState.feedbackReducer.comments}</p>
                    <button onClick={this.submitToDatabase}>Submit</button>
                </form>
            </div >
        )
    }
}

const mapStateToProps = (reduxState) => {
    // Attaching redux state to this.props.reduxState
    return {
        reduxState
    }
}

const connectedReviewFeedback = connect(mapStateToProps)(ReviewFeedback)

export default withRouter(connectedReviewFeedback, postFeedback)




