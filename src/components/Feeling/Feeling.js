import React, { Component } from 'react';

import { connect } from 'react-redux';
// import mapStoreToProps from '../../../modules/mapStoreToProps';



class Feeling extends Component {
    state = {
        feeling: '',
        button: true
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value,
            button: false
        })
    }

    handleClick = (event) => {
        this.props.dispatch({ type: 'SET_FEELINGS', payload: this.state.feeling })
        console.log('From feeling: ', this.state.feeling)
    }

    render() {
        return (
            <Router>
                <h2>How are you feeling today?</h2>
                <h3>(1 is terrible and 5 is awesome)</h3>

                <div>
                    <input name="feeling" value="1" onChange={(event) => this.handleChange(event)} /> 1
                <input name="feeling" value="2" onChange={(event) => this.handleChange(event)} /> 2
                <input name="feeling" value="3" onChange={(event) => this.handleChange(event)} /> 3
                <input name="feeling" value="4" onChange={(event) => this.handleChange(event)} /> 4
                <input name="feeling" value="5" onChange={(event) => this.handleChange(event)} /> 5
                </div>

            </Router>
        );
    }
}









const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Feeling);