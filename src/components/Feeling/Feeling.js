import React, { Component } from 'react';
import { connect } from 'react-redux';
// import mapStoreToProps from '../../../modules/mapStoreToProps';



class Feeling extends Component {
    componentDidMount() {
        console.log('Mounted')
    }

    render() {
        return (
            <div>
                <h1>How Are You Feeling Today?</h1>
                <p>On a scale to 1 to 5, how are you feeling today? 1 being I'm feeling stressed to 5 being I'm feeling great!</p>

            </div>
        )
    }

}









export default connect()(Feeling);