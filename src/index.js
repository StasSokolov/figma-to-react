import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import HomePage from './HomePage';

export const getFigmaData = () => {
  axios.get('https://api.figma.com/v1/files/toReRzUX1trCKb9QoB1wkO',
   { headers: {'X-Figma-Token': '386641-21542619-e438-4eb6-be03-6e634199023c'} }).then((res) => {
    console.log(res.data.document.children);
  })
}

getFigmaData()

ReactDOM.render(<HomePage />, document.body);
registerServiceWorker();
