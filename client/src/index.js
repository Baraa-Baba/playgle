import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.scss';
import * as serviceWorker from './serviceWorker';
import Main from './Main';
import { UserAuthContextProvider } from './context/Auth';
ReactDOM.render(
  <React.StrictMode> 
    <UserAuthContextProvider>
    <Main />
    </UserAuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
