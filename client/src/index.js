import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    BrowserRouter
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker';
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            < App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.register();