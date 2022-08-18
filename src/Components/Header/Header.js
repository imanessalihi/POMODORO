import React from 'react'

import { FaCheckCircle } from 'react-icons/fa';
import { ImStatsBars } from 'react-icons/im';
import { IoIosSettings } from 'react-icons/io';
import { IoPersonCircleSharp } from 'react-icons/io5';

function Header({bgColor, setbgColor, bgButton, setbgButto}) {
  
    return (
        <div>
          <header className="App-header ">
            <div className={`${bgColor} flex justify-between text-xl py-3  text-white`}>
              <div className="ml-4 flex ">
                <FaCheckCircle/>
                <h1 className="ml-2 font-bold ">Pomofocus</h1>
              </div>
              <div className="mr-4 ">
                <button className="p-2 bg-[#ffffff1a] rounded-md "><ImStatsBars/></button>
                <button className="p-2 bg-[#ffffff1a] rounded-md ml-2"><IoIosSettings/></button>
                <button className="p-2 bg-[#ffffff1a] rounded-md ml-2"><IoPersonCircleSharp/></button>
              </div>
            </div>
            </header>
        </div>
    )
}

export default Header
