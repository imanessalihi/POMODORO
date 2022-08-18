import React, { useState, useEffect } from "react";
import {
  FaCentercode,
  FaCertificate,
  FaEllipsisV,
  FaPlusCircle,
  FaCheckCircle,
} from "react-icons/fa";
import AddTask from "../Components/AddTask";
import Popup from "./Popup";
import Taskitem from "./Taskitem";

function Tasks({
  bgColor,
  setbgColor,
  bgButton,
  setbgButton,
  count,
  setCount, round, setRound
}) {
  const [display, setDisplay] = useState(false);
  const [displayDetail, setDisplayDetail] = useState(false);

  
  const [note, setNote] = useState(false);
  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState(false);
  const [taskitems, setTaskItems] = useState(true)

const [id,setID]=useState(0)


function showTaskDetail(element){ 
  setDisplayDetail(true)
  let newtodos = todos.map(el => (
    element.id===el.id ? {...el, open : true}: el
))
setTodos(newtodos)
}

  function show() {
    setDisplay(true);
  }
  useEffect(()=>{
if(display==false && displayDetail==false){
  let newtodos = todos.map(el =>  ({...el, open : false}))
  setTodos(newtodos)

}



  },[displayDetail, display])

  function hide() {
    
  // setTodos(newtodos)
    console.log("giii")
    setDisplay(false);
    setNote(false);
    setDisplayDetail(false)
  }

  function showNote() {
    setNote(true);
  }

  function nameTitle(e) {
  
    setTitle(e.target.value);
    console.log(e.target.value)
  }
  function modifynameTitle(e) {
    setTitle(e.target.value);
  }

  function writeNote(e) {
    setNoteText(e.target.value);
  }

  function changeTask(text,id){
    let newtodos = todos.map(el => (
      id==el.id ? {...el, titre : text}: el
  ))
  setTodos(newtodos)
  hide();
  }

  function deleteTask(id) {
    let newtodos = todos.filter(el => (
      id!=el.id
  ))
  setTodos(newtodos)
    
  }

  function submitTask() {

    setTodos([...todos, { id:id ,titre: title, notes: noteText,open:false }]);
    setTask(true);
    setTitle("");
    setNoteText("");
setID(id+1)
    hide();
    setDisplayDetail(false)

  }
  

  return (
    <div>
      <div className={`${bgColor} `}>
        <div className="flex flex-row justify-between mx-6 text-xl font-bold text-white">
          <p>Tasks</p> {count}
          <button className="p-2 bg-[#ffffff1a] rounded-md">
            <FaEllipsisV />
          </button>
        </div>
        <hr className="w-[90%] border-[#ffffff6a] border ml-5 mt-4 "></hr>
        {/*transparent color */}
        <div className="flex flex-col justify-center m-4">

       

              {todos.map((item) => {
              return (

    item.open==true && displayDetail==true?   <Popup  nameTitle={nameTitle} changeTask={changeTask} round= {round} note={note} setRound={setRound} element={item} writeNote={writeNote} showNote={showNote} hide ={hide} submitTask={submitTask}  deleteTask={deleteTask} />   :      
<Taskitem element={item} showTaskDetail={showTaskDetail} count={count} round= {round} setRound={setRound} />


)
       
              })}
           {display == false  ? <AddTask bgColor={bgColor} show={() => show()} /> : ""} 
      
      

        {display &&  <Popup modifynameTitle={modifynameTitle} nameTitle={nameTitle} element="" round= {round} setRound={setRound} note={note} writeNote={writeNote} showNote={showNote} hide ={hide} submitTask={submitTask}  />}
        
      </div>
    </div>
    </div>
  );
}

export default Tasks;
