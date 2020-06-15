import React, { Component } from 'react';

import { connect } from 'react-redux';


class Feeling extends Component {

    // Called when the input field changes
    handleChange = (event) => {
        //dispatching an action
        this.props.dispatch({ type: 'SET_FEELINGS', payload: event.target.value, name: event.target.name })
    }
    // Called when the submit button is pressed
    handleClick = () => {
        //navigate to the understanding page
        this.props.history.push('/Understanding');
    }

    render() {
        return (
            <div>

                <h2>How are you feeling today?</h2>
                <label>Feeling? (1 - 5)</label>
                <input onChange={this.handleChange} type="number" name="feeling" min="0" max="5" />
                <button onClick={this.handleClick}>NEXT</button>

            </div>
        )
    }

}


const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Feeling);