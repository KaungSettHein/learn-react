import './App.css';
import React from 'react';
import Footer from './components/Footer';
import MyInfo from './components/MyInfo';
import Headers from './components/Header';
import TodoItem from './components/TodoItem';
import Joke from './components/Joke';
import Form from './components/Form';
import products from './data/products';
import Product from './components/Product';
import todoData from './data/tododata';
import TravelForm from './components/TravelForm';
import MemeGenerator from './components/MemeGenerator';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      name : "Hein",
      age : 27,
      todos : todoData
    }
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
    const todolist = this.state.todos.map((t) => <TodoItem key={t.id} items={t}/>)
    // console.log('this',todolist);    

    return (
      <div>
        <Headers />
        {/* <div className='App'>
          <h1 style={styles}>Good {dayTime}! Mr.{this.state.name}</h1>
          <p>Is your age {this.state.age}?</p>
        </div> */}
        
        {/* <div className='todo-list'>
          {todolist}
        </div> */}

        {/* <Form /> */}
        {/* <TravelForm /> */}
        <MemeGenerator/>

        {/* <Joke quest="one" ans="one" />
        <Joke quest="two" ans="two" />
        <Joke quest="three" ans="three" />
        <Joke quest="four" ans="four" />
        <Joke ans="only answer" /> */}
  
        {/* {productslist} */}
  
        {/* <MyInfo /> */}
        {/* <Footer/> */}
      </div>
    );
  }
}
export default App;
