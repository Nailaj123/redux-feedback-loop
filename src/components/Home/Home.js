import React, { Component } from 'react';
import { connect } from 'react-redux';
// import mapStoreToProps from '../../../modules/mapStoreToProps';


class Home extends Component {
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
export default connect()(Home);