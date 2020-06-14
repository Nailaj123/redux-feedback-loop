import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const feedback = {
    Feeling: 0,
    Understanding: 0,
    Support: 0,
    Comments: ''
}


//reducer will return an object of feedback
const feedbackReducer = (state = feedback, action) => {
    if (action.type === "SET_FEELINGS") {

        return {
            ...state,
            [action.name]: action.payload
        }
    }
    return state;
};

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,

    }),
    applyMiddleware(logger)
)





ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();