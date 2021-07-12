import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './containers/login/Login';
import Register from './containers/register/Register';

function Auth() {
    return (
        <div>
        <BrowserRouter>
           <Switch>
               <Route path="/login" component={Login} />
               <Route path="/register" component={Register} />
           </Switch>
        </BrowserRouter>
        </div>
    );
}

export default Auth;

if (document.getElementById('auth')) {
    ReactDOM.render(<Auth />, document.getElementById('auth'));
}
