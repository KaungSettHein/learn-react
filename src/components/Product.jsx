// import './Product.css'
import React from "react";

class product extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.product.name}</h3>
                <p>${this.props.product.price}</p>
                {this.props.product.description}<br/>
            </div>
        )
    }
}
export default product;
