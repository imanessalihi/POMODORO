import './App.css';
import CountDown from './Components/Countdown/CountDown'
import Header from './Components/Header/Header'
import Counter from './Components/Counter'
import TimerClass from './Components/TimerClass'
import TimerFunctional from './Components/TimerFunctional'
import React,{useState, useEffect} from 'react'
import Tasks from './Components/Tasks'





function App() {
  const [bgColor,setbgColor]=useState("bg-pomodoro")
    const [bgButton, setbgButton]= useState("darkRed")
    const [count, setCount] = useState(0)
  return (
    <div className="App ">
       <Header bgColor={bgColor} setbgColor={setbgColor} bgButton={bgButton} setbgButton={setbgButton} />
     {/* <CountDown/> 
      <Counter/>
      <TimerClass/>*/}
      <TimerFunctional bgColor={bgColor} setbgColor={setbgColor} bgButton={bgButton} setbgButton={setbgButton} count={count} setCount={setCount}/>
      <Tasks bgColor={bgColor} setbgColor={setbgColor} bgButton={bgButton} setbgButton={setbgButton} count={count} setCount={setCount}/>
          
    </div>
  );
}

export default App;
