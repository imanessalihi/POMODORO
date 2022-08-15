import React, {useState} from 'react'

function Counter () {
    // const {useState}=React
    // const useState=React.useState
    const [count, setCount]= useState(25)
    
    return(
        <div >
            <div className="flex flex-col items-center pt-6">
                <p className="text-3xl pb-6">{count}</p>
                <div className= "flex space-x-4">
                    <button className="bg-[#D95550] text-white text-3xl py-2 px-12 rounded-md" onClick= {()=>{setCount(count+1)}}>+</button>
                    <button className="bg-[#D95550] text-white text-3xl py-2 px-12 rounded-md" onClick= {()=>{setCount(count-1)}}>-</button>
                </div>
            </div>
        </div>
    )
}

export default Counter