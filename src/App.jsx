import './App.css';
import Footer from './components/Footer';
import MyInfo from './components/MyInfo';
import Headers from './components/Header';

function App() {
  const date = new Date();
  const hours = date.getHours();
  let dayTime;
  const styles = {
    fontSize : 38
  }

  // if(hours < 12){
  //   dayTime = "morning";
  //   styles.color = yellow;
  // }else if(hours >=12 && hours < 17){
  //   dayTime = "afternoon";
  //   styles.color = red;
  // }else{
  //   dayTime = "night";
  //   styles.color = orange;
  // }

  return (
    <div className='App'>
      <Headers />
      <h1 style={styles}>Good {dayTime}!</h1>
      <MyInfo />
      <Footer/>
    </div>
  );
}

export default App;
