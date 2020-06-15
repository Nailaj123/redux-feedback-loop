import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import Thanks from '../Thanks/Thanks';



class Review extends Component {
    state = {
        isSubmitted: false
    }

    toggleSubmitted = () => {
        this.setState({
            isSubmitted: !this.state.isSubmitted
        })
        //this.props.history.push('/thank');

    }
    render() {
        return (
            <div>
                {/* if the form has not been submitted display the feedback review else, display thanks page */}
                {(!this.state.isSubmitted) ?
                    <Thanks submit={this.toggleSubmitted} /> :
                    <ReviewFeedback submit={this.toggleSubmitted} />}

            </div>
        )
    }
}



export default connect()(Review);
