import React from 'react';
import ReactDOM from 'react-dom';
import { PortfolioPage } from './components/PortfolioPage/PortfolioPage';
import * as serviceWorker from './serviceWorker';
import './assets/styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <PortfolioPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
