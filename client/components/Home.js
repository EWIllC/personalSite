import React from "react";
import DollarButton from "./DollarButton";

class Home extends React.Component {
    render() {
        return (
            <div className="title">
                <h2>Lemme get a dolla</h2>
                <DollarButton />
            </div>
        )
    }
}

export default Home
