import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MasterContent } from './figmaComponents';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MasterContent />, document.body);
registerServiceWorker();
