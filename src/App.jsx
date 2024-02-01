import './App.css';
import React from 'react';
import Footer from './components/Footer';
import MyInfo from './components/MyInfo';
import Headers from './components/Header';
import TodoItem from './components/TodoItem';
import Joke from './components/Joke';
import Product from './components/Product';
import ConditionalRender from './components/ConditionalRender';
import LoginStatus from './components/LoginStatus';
import products from './data/products';
import todoData from './data/tododata';



class App extends React.Component{
  constructor(){
    super()
    this.state = {
      name : "Hein",
      age : 27,
      todos : todoData,
      isLoading : true,
      login : false
    }
    this.handleChange = this.handleChange.bind(this);
    this.loginStatus = this.loginStatus.bind(this);
    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this);
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState ({
        isLoading : false,
        login : true
      })
    },1500)
  }
  loginStatus(){ //if you want to use "LoginStatus" component pass the paramenter 
    console.log(s);
    this.setState(prevState => {
      return{
        login : !prevState.login
      }
    })
  }
  add(){
    this.setState(prevState => {
      return{
        age : prevState.age + 1
      }
    });
    console.log("this is add function",this.state.age);
  }
  minus(){
    this.setState(prevState => {
      return{
        age : prevState.age - 1
      }
    });
    console.log("this is minus function",this.state.age);
  }
  handleChange(id){
    this.setState(prevDate => {
      const updatedTodos = prevDate.todos.map((t) => {
        if(t.id == id){
          return { ...t,completed: !t.completed}
        }
        else{
          return t
        }
      })
      return{
        todos : updatedTodos
      }      
    })
  }

  render() {
    const date = new Date();
    const hours = date.getHours();
    let dayTime;
    const styles = {
      fontSize : 38
    }
    if(hours < 12){
      dayTime = "morning";
      styles.color = "brown";
    }else if(hours >=12 && hours < 17){
      dayTime = "afternoon";
      styles.color = "red";
    }else{
      dayTime = "night";
      styles.color = "orange";
    }
    const productslist = products.map((p) => <Product key={p.id} product={p}/> )
    const todolist = this.state.todos.map((t) => <TodoItem key={t.id} items={t} handleChange={this.handleChange}/>) 

    let displayTxt = this.state.login ? "Logged in" : "Logged Out";
    let btnTxt = this.state.login ? "Log Out" : "Log In";

    return (
      <div>
  
        <div className='App'>
          <Headers />
            <h1 style={styles}>Good {dayTime}! Mr.{this.state.name}</h1>
            <p>Is your age {this.state.age}?</p>          
                <button onClick={this.minus}>-</button>
                <button onClick={this.add}>+</button>
        </div>
        
        {/* {this.state.isLoading == true ? <h1>Loading ...</h1> : <ConditionalRender isLoading={this.state.isLoading} />} */}        
        
        <div className='todo-list'>
          {todolist}
        </div>
  
        {/* <Joke quest="one" ans="one" />
        <Joke quest="two" ans="two" />
        <Joke quest="three" ans="three" />
        <Joke quest="four" ans="four" />
        <Joke ans="only answer" /> */}
  
        {/* {productslist} */}

        <h1>{displayTxt}</h1>
        <button className='button' onClick={this.loginStatus}>{btnTxt}</button>
        {/* <LoginStatus loginStatus={this.loginStatus} displayTxt={displayTxt} btnTxt={btnTxt} status={this.state.login}/> */}
  
        {/* <MyInfo /> */}
        {/* <Footer/> */}
      </div>
    );
  }
}
export default App;
