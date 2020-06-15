import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";

class Thanks extends Component {

    handleSubmit = () => {
        console.log('you clicked submit btn new feedback');
        //this.props.submit();
        this.props.history.push('/');

    }

    render() {
        return (
            <div>
                <h2>THANK YOU!</h2>
                {/* <Button type="submit" onClick={() => this.handleSubmit()} > NEW FEEDBACK</Button> */}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}


const connectedThanks = connect(mapStateToProps)(Thanks)

export default withRouter(connectedThanks)