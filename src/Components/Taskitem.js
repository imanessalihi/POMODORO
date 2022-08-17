import React from 'react'
import {
    FaCentercode,
    FaCertificate,
    FaEllipsisV,
    FaPlusCircle,
    FaCheckCircle,
  } from "react-icons/fa";
function Taskitem({element,showTaskDetail}) {
   
    
    return (
      

    <div className="w-[42vh] py-1 bg-white rounded-md mb-2">
      <div className="mb-4 mt-2 mx-4">
        <div className="flex justify-between">
          <div className="flex mt-1">
            <FaCheckCircle className="mr-1 text-2xl text-[#eeeeee]" />
            {element.titre}
          </div>
          <div className="flex text-[#bbbbbb] font-bold ">
            {/* <div className="mt-1">
              {count} / {round}
            </div> */}
            <button
              className="ml-2 p-1 text-[#bbbbbb] border-[0.3vh] border-[#eeeeee] rounded-md"
              onClick={() => showTaskDetail(element)}
            >
              <FaEllipsisV />
            </button>
          </div>
        </div>
        {element.notes != "" ? (
          <div className="m-4 bg-[#FFF6D5] py-2 px-2 rounded-md shadow-lg">
            {element.notes}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
    
}

export default Taskitem


