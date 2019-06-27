import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import './index.css';

ReactDOM.render(
	<BrowserRouter>
    <Switch>
      <Header />
    </Switch>
  </BrowserRouter>
	, document.getElementById('header'));

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <App />
    </Switch>
  </BrowserRouter>
  , document.getElementById('main')
);
ReactDOM.render(<Footer />, document.getElementById('footer'))
