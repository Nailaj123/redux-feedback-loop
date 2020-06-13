import React, { Component } from 'react';
import { connect } from 'react-redux';


class Review extends Component {
    componentDidMount() {
        console.log('Mounted')
    }

    render() {
        return (
            <div>

            </div>
        )
    }

}
export default connect()(Review);