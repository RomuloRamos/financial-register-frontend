import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from "./history";
import Login from './components/Login';
import UserRegister from './components/UserRegister';
import Home from './components/Home';

const Routes = ()=>{

    return (
        <Router history={history}>
            <Switch>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/" exact component={Home}></Route>
                <Route path="/user/create" exact component={UserRegister}></Route>
                {/*<Route path="/house/create" exact component={HouseCreate}></Route>
                <Route path="/bills/create" exact component={BillsCreate}></Route> */}
            </Switch>
        </Router>
    );    

};

export default Routes;