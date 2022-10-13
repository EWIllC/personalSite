import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import PayMe from "./components/PayMe";
import Confirmation  from "./components/Confirmation";

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/pay-me" component={PayMe} />
                <Route path= "/confirmation" component={Confirmation} />
                <Redirect to="/home" />
            </Switch>
        )
    }
}

export default Routes
