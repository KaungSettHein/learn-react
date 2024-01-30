import React from "react";
import TravelFormCP from "./TravelFomCP";

class TravelForm extends React.Component{
    constructor(){
        super()
        this.state={
            firstName : "",
            lastName : "",
            age : "",
            gender : "",
            destination : "",
            vegetarian : false,
            kosher : false,
            lactoseFree : false
        //     meal : {
        //         vegetarian : false,
        //         kosher : false,
        //         lactoseFree : false,
        //     }
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        const {type, name, checked, value} = event.target;
        type === "checkbox" ? this.setState({ [name] : checked }) : this.setState({ [name] : value })
    }
    render(){
        return(
            <TravelFormCP handleChange={this.handleChange} data={this.state} />
        )
    }
}
export default TravelForm;