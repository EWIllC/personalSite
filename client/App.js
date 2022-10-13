import React from "react";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


class App extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Navbar />
                <Routes />
            </div>
        )
    }
}

export default App
