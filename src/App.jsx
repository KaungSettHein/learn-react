import './App.css';
import Footer from './components/Footer';
import MyInfo from './components/MyInfo';
import Headers from './components/Header';

function App() {
  const date = new Date();
  const hours = date.getHours();
  let dayTime
  const styles = {
    fontSize : 38
  }

  if(hours < 12){
    dayTime = "morning";
  }else if(hours >=12 && hours < 17){
    dayTime = "afternoon";
  }else{
    dayTime = "night";
  }

  return (
    <div className='App'>
      <Headers />
      <h1 style={styles}>Good {dayTime}!</h1>
      {/* <MyInfo /> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
