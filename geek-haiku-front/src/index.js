import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const application = (
    <App>

    </App>
)


ReactDOM.render(application, document.getElementById('root'));
serviceWorker.unregister();
