import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import FortniteApi from './componants/fortniteApi';


ReactDOM.render(
  <BrowserRouter>
    <FortniteApi />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
