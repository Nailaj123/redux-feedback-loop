import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    // Called when the input field changes
    handleChange = (event) => {
        //dispatching an action
        this.props.dispatch({ type: 'SET_FEELINGS', payload: event.target.value, name: event.target.name })
    }
    // Called when the submit button is pressed
    handleClick = () => {
        //navigate to the support page
        this.props.history.push('/Support');
    }

    render() {
        return (
            <div>

                <h2>How well are you understanding the content?</h2>
                <label>understanding? (1 - 5)</label>
                <input onChange={this.handleChange} type="number" name="understanding" />
                <button onClick={this.handleClick}>NEXT</button>

            </div>
        )
    }

}



export default connect()(Understanding);