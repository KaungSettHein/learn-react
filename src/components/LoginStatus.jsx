import React from 'react';

class loginStatus extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.displayTxt}</h1>
                <button className='button' onClick={()=> this.props.loginStatus(this.props.status)}>{this.props.btnTxt}</button>
            </div>
        )
    }
}
export default loginStatus;