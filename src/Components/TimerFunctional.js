import React,{useState, useEffect} from 'react'
import { FaStepForward } from 'react-icons/fa'
import {FaEllipsisV} from 'react-icons/fa'

function TimerFunctional({bgColor, setbgColor, bgButton, setbgButton, count, setCount}) {
    const[timer, setTimer]=useState(5) //this time is in seconds, 1500 seconds= 25 minutes
    const [time, setTime] = useState({
        "m": 0,
        "s": 0
    })
    const [state,setState] = useState(false)
    
    
    function start() {
      setState(true)
       

        
    }
   function stop(){
       setState(false)
   }
   
   function changeColor(){
       if(bgColor=="bg-pomodoro"){
           setbgColor("bg-pomoblue")
           setTimer(5)
           
           setCount(count + 1)
           console.log(count);
           
       }
       console.log(count);
       if(bgColor== "bg-pomoDarkBlue") {
        setbgColor("bg-pomodoro")
        setTimer(3)
    }
       
       if(bgColor=="bg-pomoblue" && count%3==0){
        setbgColor("bg-pomoDarkBlue")
        setTimer(5)
    }
        

       else if(bgColor=="bg-pomoblue"){
        setbgColor("bg-pomodoro")
        setTimer(3)
        
    } 
        
   }

    useEffect(() => {
        if(timer==0){
            changeColor()
            
        }
        if (timer > -1) { 
            const convertedTime = secondsToTime(timer)
            setTime(convertedTime)           
        }
        if(state==false){clearInterval(refreshIntervalId)}
else{
    
    var refreshIntervalId =setInterval(() => {
        setTimer(prevTimer=>prevTimer-1)
    }, 1000)
    return ()=> clearInterval(refreshIntervalId)   
}
    }, [timer,state])

    function secondsToTime(secs){
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "m": minutes,
          "s": seconds
        };
        return obj;
      }

    return (
        <div className= {`${bgColor} `}>
            <div className={`${bgColor} block text-white h-[50%] flex justify-center`}>
                <div className="h-[40%] bg-[#ffffff1a] w-[90%] mt-10 mb-6 rounded-md"> {/* transparent color */}
                    <div className="">
                        <div className="flex justify-around py-5 text-white ">
                            <button className={`${bgColor=="bg-pomodoro"? "font-bold bg-darkRed": ""} py-1 px-3 rounded-md ml-3`}>Pomodoro</button>
                            <button className={`py-1 px-3  rounded-md ${bgColor=="bg-pomoblue"? "font-bold bg-blueButton": ""}`}>Short Break</button>
                            <button className={`py-1 px-3 rounded-md mr-3 ${bgColor=="bg-pomoDarkBlue"? "font-bold bg-darkBlueButton": ""} `}>Long Break</button>
                        </div>
                        <div>
                            <p className="flex justify-center py-6 text-8xl text-white">{(time.m).toString().padStart(2,0)}:{(time.s).toString().padStart(2,0)}</p>
                        </div> 
                        <div className="flex justify-center mb-6">
                                {state==true ? <div className= "flex inline content-center justify-center"><button className={`font-bold bg-white ${bgColor=="bg-pomodoro"? "text-darkRed": bgColor=="bg-pomoblue"? "text-blueButton": "text-darkBlueButton"   } text-3xl py-2 px-14 ml-14 mr-6 rounded-md `} onClick={()=>stop()} >STOP</button> <button className= "text-3xl" onClick={() => changeColor()}> <FaStepForward/> </button> </div> :  <button className= {`font-bold bg-white ${bgColor=="bg-pomodoro"? "text-darkRed": bgColor=="bg-pomoblue"? "text-blueButton": "text-darkBlueButton"   } text-3xl py-2 px-12 rounded-md shadow-xl shadow-inset`} onClick={()=>start()}  >START</button>  } 
                                
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            <div className="flex justify-center text-[#ffffff8a]"><p>#{count}</p></div>
            <div className= {`${bgColor} text-white h-[20%] w-[100%] text-center text-xl`}><p>Time to focus!</p></div>
            <div className={`${bgColor} block text-white h-[50%]`}>
                

            </div>
        </div>
        
    )
}

export default TimerFunctional
