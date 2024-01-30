import React from "react";

class Form extends React.Component{
    constructor(){
        super()
        this.state={
            firstname : "",
            lastname : "",
            isFriendly: false,
            gender: "",
            favColor: "blue"
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        const {name, value, checked, type} = event.target;
        type === "checkbox" ? this.setState({ [name] : checked }) : this.setState({ [name] : value })
    }

    // study formik
    render(){        
        return(
            <form style={{padding:"20px"}}>
                <input 
                    type="text" 
                    value={this.state.firstname} 
                    name="firstname" 
                    placeholder="First Name" 
                    onChange={this.handleChange}
                />
                <br/>
                <input 
                    type="text" 
                    value={this.state.lastname} 
                    name="lastname" 
                    placeholder="Last Name" 
                    onChange={this.handleChange}
                />
                <br/>
                <textarea style={{marginTop: "3px"}} value="Some Values . . . . " onChange={this.handleChange}/>
                <br/>
                <label>
                    <input
                        type="checkbox" 
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    /> is Friendly?
                </label>
                <br/>
                <label>
                    <input
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> male
                </label>
                <br/>
                <label>
                    <input
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> female
                </label>
                <br/>
                <select value={this.state.favColor} name="favColor" onChange={this.handleChange}>
                    <option style={{backgroundColor: "red"}} value="red">Red</option>
                    <option style={{backgroundColor: "orange"}} value="orange">Orange</option>
                    <option style={{backgroundColor: "yellow"}} value="yellow">Yellow</option>
                    <option style={{backgroundColor: "green"}} value="green">Green</option>
                    <option style={{backgroundColor: "blue"}} value="blue">Blue</option>
                    <option style={{backgroundColor: "indigo"}} value="indigo">Indigo</option>
                    <option style={{backgroundColor: "violet"}} value="violet">Violet</option>
                    <option style={{backgroundColor: "white"}} value="black">Black</option>
                </select>

                <h1>{this.state.firstname}{this.state.lastname}</h1>
                <h2>I am {this.state.isFriendly ? "friendly" : "not friendly"}</h2>
                {this.state.gender ? <h2>I am {this.state.gender}</h2> : null }
            </form>
        )
    }
}
export default Form;