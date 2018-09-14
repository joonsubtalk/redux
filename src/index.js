import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

function Root() {
    return (
        <Provider store={ store }>
            <App />
        </Provider>
    )
}


ReactDOM.render(<Root />, document.getElementById('root'));
//registerServiceWorker();
