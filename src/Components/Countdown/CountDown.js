import React from 'react'

function CountDown() {
    return (
        <div className="bg-[#D95550] text-white h-screen flex justify-center">
            <div className="h-[35%] bg-[#ffffff1a] w-[90%] my-10 rounded-md">
            <div classNam="flex">
                <div className="text-white flex justify-around py-3 ">
                    <button>Pomodoro</button>
                    <button>Short Break</button>
                    <button>Long Break</button>
                </div>
                <div className="text-white flex justify-center text-8xl py-8">
                    25:00
                </div>
                <div className="flex justify-center">
                    <button className="bg-white text-[#D95550] text-3xl py-2 px-12 rounded-md ">START</button>
                </div>
            </div>
            </div>
          
            
        </div>
    )
}

export default CountDown
