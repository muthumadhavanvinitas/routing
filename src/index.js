import React,{Component} from 'react';
import Reactdom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import hello from './About';



Reactdom.render((
	<Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/hello" component={hello}/>
      
    
  </Router>
  ), document.getElementById('root')
);
