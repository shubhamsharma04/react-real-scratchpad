import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from "./Home";
import Contact from "./Contact";

class AppRoutes extends Component{
    render(){return(
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
        </main>
    );
    }
}

export default AppRoutes;