import React from 'react'
import {FaCentercode, FaCertificate, FaEllipsisV, FaPlusCircle} from 'react-icons/fa'

function AddTask({bgColor,show}) {
    return (
        <div>
            <button className={`${bgColor=="bg-pomodoro"? "bg-darkRed": bgColor=="bg-pomoblue"? "bg-blueButton": "bg-darkBlueButton" } text-[#ffffff8a] px-32 mt-6 border-2 border-dashed border-[#ffffff6a] py-5 rounded-md flex place-content-center font-bold `} onClick={()=>show()}> <FaPlusCircle className="mt-0.5 text-lg"/> <p className="ml-3">Add Task</p></button>

        </div>
    )
}

export default AddTask
