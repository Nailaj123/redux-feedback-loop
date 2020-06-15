import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
    // Called when the input field changes
    handleChange = (event) => {
        //dispatching an action
        this.props.dispatch({ type: 'SET_FEELINGS', payload: event.target.value, name: event.target.name })
    }
    // Called when the submit button is pressed
    handleClick = () => {
        //navigate to the Comments page
        this.props.history.push('/Comments');
    }

    render() {
        return (
            <div>

                <h2>How well are you being supported?</h2>
                <label>Support? (1 - 5)</label>
                <input onChange={this.handleChange} type="number" name="Support" min="0" max="5" />
                <button onClick={this.handleClick}>NEXT</button>

            </div>
        )
    }

}



export default connect()(Support);