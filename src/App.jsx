import './App.css';
import Footer from './components/Footer';
import MyInfo from './components/MyInfo';
import Headers from './components/Header';
import TodoItem from './components/TodoItem';
import Joke from './components/Joke';

function App() {
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

  return (
    <div className='App'>
      <Headers />
      <h1 style={styles}>Good {dayTime}!</h1>
      {/* <div className='todo-list'>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </div> */}
      <Joke quest="one" ans="one" />
      <Joke quest="two" ans="two" />
      <Joke quest="three" ans="three" />
      <Joke quest="four" ans="four" />
      <Joke ans="only answer" />
      {/* <MyInfo /> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
