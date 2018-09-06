import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet.css';
import MovieApp from './MovieApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MovieApp />, document.getElementById('root'));
registerServiceWorker();
