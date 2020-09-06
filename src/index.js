import React from 'react';
import ReactDOM from 'react-dom';
import {Route , HashRouter} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const mypage = (<HashRouter>
  <Route exact path="/" component={App} />
</HashRouter>);


ReactDOM.render(mypage,  document.getElementById('root'));



serviceWorker.unregister();
