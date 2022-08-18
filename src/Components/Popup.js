import React from 'react'

function Popup({nameTitle,element, changeTask, round, setRound, note, writeNote, showNote, hide,submitTask, deleteTask}   ) {
    const [text,setText]=React.useState(element.titre)
    function changeNameTitle (e){
       setText(e.target.value)
      }
    return (
     

<div
className={`min-h-[30vh] bg-white w-[42vh] mt-6 rounded-md flex flex-col mb-2 `}
>
    {element != "" ? <input
  type="text"
 value={text}
  className="mx-4 mt-2 border-none py-4  outline-none text-xl font-bold placeholder:italic placeholder:text-2xl placeholder:opacity-25 "
  onChange={changeNameTitle}
></input>: <input
  type="text"
 placeholder="What are you doing now"
  className="mx-4 mt-2 border-none py-4  outline-none text-xl font-bold placeholder:italic placeholder:text-2xl placeholder:opacity-25 "
  onChange={nameTitle}
></input>}


<form>
  <label className="font-bold ml-4">Est Pomodoro</label>
  <br></br>
  
  <input
    type="number"
    min="0"
    placeholder={round}
    readOnly
    className="mt-3 ml-4 bg-[#eeeeee] rounded-md h-[4vh] w-[8vh] pl-3 placeholder:text-lg placeholder:text-black placeholder:font-bold"
  ></input>
  <button
    type="button"
    className="rounded-md h-[4vh] w-[4vh] border shadow-lg ml-2 mr-1"
    onClick={() => {
      setRound(round + 1);
    }}
  >
    +
  </button>
  <button
    type="button"
    className="rounded-md h-[4vh] w-[4vh] border shadow-lg"
    onClick={() => {
      if (round >= 1) {
        setRound(round - 1);
      }
    }}
  >
    -
  </button>
</form>
<div className="flex flex-wrap mt-4 text-[#999999] m-4">
  {note == true ? (
    <div>
      <textarea
        rows="4"
        cols="50"
        role="textbox"
        type="text"
        placeholder="Some notes..."
        className=" break-normal w-[38vh] h-[7vh] bg-[#eeeeee] rounded-md outline-none p-2 placeholder:opacity-25 text-black"
        onChange={writeNote}
      ></textarea>
    </div>
  ) : (
    <button
      className="mr-4 underline"
      onClick={() => showNote()}
    >
      + Add Note
    </button>
  )}
  <button className="underline">+ Add Project</button>
</div>
<div className="bg-[#eeeeee] h-[7vh] rounded-b-md flex justify-between pr-4 font-bold">

<div>
{element != "" ?  <button
    className="text-white bg-[#bbbbbb] rounded-md h-[4vh] w-[8vh] mt-3 ml-6"
    onClick={() => deleteTask(element.id)}
  >
    Delete
  </button> :  ""}
  </div>

  <div className="flex justify-end">  
  <button
    className="text-[#aaaaaa]"
    onClick={() => hide()}
  >
    Cancel
  </button>


  {element != "" ?  <button
    className="text-white bg-[#bbbbbb] rounded-md h-[4vh] w-[8vh] mt-3 ml-6"
    onClick={() => changeTask(text,element.id)}
  >
    Modify
  </button> :  <button
    className="text-white bg-[#bbbbbb] rounded-md h-[4vh] w-[8vh] mt-3 ml-6"
    onClick={() => submitTask(text)}
  >
    Save
  </button> }
  </div>
  
  

</div>
</div>
);
    
}

export default Popup



