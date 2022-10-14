import React from "react";
import Routes from "./Routes";
//import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


class App extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                {/* <Navbar /> */}
                <>
                <Dropdown />
                </>
                <Routes />
            </div>
        )
    }
}

export default App
