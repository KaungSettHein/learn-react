import React from 'react';

function TravelFormCP(props) {
    return(
        <form style={{padding:"20px"}}>
            <input 
                type="text" 
                value={props.data.firstName} 
                name="firstName" 
                placeholder="First Name" 
                onChange={props.handleChange}
            />
            <br/>
            <input 
                type="text" 
                value={props.data.lastName} 
                name="lastName" 
                placeholder="Last Name" 
                onChange={props.handleChange}
            />
            <br/>
            <input 
                type="text" 
                value={props.data.age} 
                name="age" 
                placeholder="Age" 
                onChange={props.handleChange}
            />
            <br/>
            <label>Gender:</label>
            <label>
                <input
                    type="radio" 
                    name="gender"
                    value="male"
                    checked={props.data.gender === "male"}
                    onChange={props.handleChange}
                /> male
            </label>
            <br/>
            <label style={{paddingLeft:"55px"}}>
                <input
                    type="radio" 
                    name="gender"
                    value="female"
                    checked={props.data.gender === "female"}
                    onChange={props.handleChange}
                /> female
            </label>
            <br/>
            <label>Choose Destination:</label>
            <select value={props.data.destination} name="destination" onChange={props.handleChange}>
            <option value="">----Please Choose a destination----</option>
                <option value="London">London</option>
                <option value="New York">New York</option>
                <option value="Barlin">Barlin</option>
                <option value="Paris">Paris</option>
                <option value="Moscow">Moscow</option>
                <option value="Beijing">Beijing</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Tokyo">Tokyo</option>                    
            </select>
            <br/>
            <label>
                <input
                    type="checkbox" 
                    name="vegetarian"
                    checked={props.data.vegetarian}
                    onChange={props.handleChange}
                /> vegetarian
            </label>
            <br/>
            <label>
                <input
                    type="checkbox" 
                    name="kosher"
                    checked={props.data.kosher}
                    onChange={props.handleChange}
                /> kosher
            </label>
            <br/>
            <label>
                <input
                    type="checkbox" 
                    name="lactoseFree"
                    checked={props.data.lactoseFree}
                    onChange={props.handleChange}
                /> lactose free,
            </label>
            <br/>
            <button>Submit</button>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p> <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p></p>
    </form>
    )
}
export default TravelFormCP;