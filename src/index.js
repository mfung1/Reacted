import React from 'react';
import ReactDOM from 'react-dom';
import './sass/base.sass';
import ReactedApp from './ReactedApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ReactedApp />, document.getElementById('root'));
registerServiceWorker();
