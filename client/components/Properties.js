import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProperties } from "../store/properties";
export class Properties extends React.Component {
    constructor() {
        super();

        this.state = {};


    }

    componentDidMount() {
        this.props.fetchProperties();
    }

    render() {
        return (
            <div>i should be rendered
                {this.props.properties.map((property) => {
                   return ( 
                    <div key={property.id}>
                    <h3>{property.name}</h3> 
                    <img src={property.imageURL} />
                    <p>{property.description}</p>
                    </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ properties: state.properties });

const mapDispatchToProps = (dispatch) => ({
    fetchProperties: () => dispatch(fetchProperties())
});

export default connect(mapStateToProps, mapDispatchToProps)(Properties);