import React from 'react';

class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state = {
            topText : "",
            bottomText : "",
            randomImage : "https://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",
            allMemeImgs : []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const{memes} = response.data;
                console.log(memes[0]);
                this.setState({
                    allMemeImgs : memes
                })
            });
    }
    handleChange(event){
        const {name,value} = event.target;
        this.setState({
            [name] : value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        const memeIndex = Math.floor(Math.random() * this.state.allMemeImgs.length);
        const rndMemeImg = this.state.allMemeImgs[memeIndex].url;
        this.setState({
            randomImage : rndMemeImg
        })
    }
    render(){
        return(
            <div>
                <form className='meme' onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        value={this.state.topTextText} 
                        name='topText' 
                        placeholder='Top Text'
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        value={this.state.bottomText} 
                        name='bottomText' 
                        placeholder='Bottom Text'
                        onChange={this.handleChange}
                    />
                    <button>Gen</button>
                </form>
                <div className='container'>
                    <img src={this.state.randomImage} alt='none?'></img>
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='buttom'>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}
export default MemeGenerator;