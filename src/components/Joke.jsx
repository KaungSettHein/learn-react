import React from "react";

class joke extends React.Component{
    render(){
        return(
            <div>
                <p style={{display: !this.prop.quest && "none",color: "green"}}>Question {this.prop.quest}?</p>
                <p style={{color: !this.prop.quest && "blue"}}>Answer {this.prop.ans}</p><hr/>
            </div>
        )
    }
}
export default joke;