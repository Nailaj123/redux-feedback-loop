import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const feelingReducer = (state = [], action) => {
    if (action.type === 'SET_FEELINGS') {
        return {
            ...state,
            ...action.payload,
            return state,

        }
        return state
    }

    const storeInstance = createStore(
        feelingReducer
    )
}


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
