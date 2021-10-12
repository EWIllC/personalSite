import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Properties from "./components/Properties";

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/properties" component={Properties} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact}/>
                <Redirect to="/home" />
            </Switch>
        )
    }
}

export default Routes