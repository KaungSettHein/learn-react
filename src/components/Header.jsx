import React from "react";

class Header extends React.Component{
    render(){
        return(
            // <header className="navbar">This is header element</header>
            <header>
                <img
                src="https://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
                alt="Problem?"/>
                <p>Meme Generator</p>
            </header>
        )
    }
}
export default Header;