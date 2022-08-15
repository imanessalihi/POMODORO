import React, { useState, useEffect } from "react";
import {
  FaCentercode,
  FaCertificate,
  FaEllipsisV,
  FaPlusCircle,
} from "react-icons/fa";
import AddTask from "../Components/AddTask";

function Tasks({
  bgColor,
  setbgColor,
  bgButton,
  setbgButton,
  count,
  setCount,
}) {
  const [display, setDisplay] = useState(false);
  const [round, setRound] = useState(1);
  const [note, setNote] = useState(false);
  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [todos, setTodos] = useState();

  function show() {
    setDisplay(true);
  }

  function hide() {
    setDisplay(false);
    setNote(false);
  }

  function showNote() {
    setNote(true);
  }

  function nameTitle(e) {
    console.log(e.target.value);
    setTitle(e.target.value);
  }

  function writeNote(e) {
    console.log(e.target.value);
    setNoteText(e.target.value);
  }

  function submitNote(e) {
    e.preventDefault();
  }

  return (
    <div>
      <div className={`${bgColor} h-[44.5vh]`}>
        <div className="flex flex-row justify-between mx-6 text-xl font-bold text-white">
          <p>Tasks</p>
          <button className="p-2 bg-[#ffffff1a] rounded-md">
            <FaEllipsisV />
          </button>
        </div>
        <hr className="w-[90%] border-[#ffffff6a] border ml-5 mt-4 "></hr>{" "}
        {/*transparent color */}
        <div className="flex justify-center">
          {display == true ? (
            <div
              className={`min-h-[30vh] bg-white w-[90%] mt-6 rounded-md flex flex-col `}
            >
              {" "}
              <input
                type="text"
                placeholder="What are you working on?"
                className="mx-4 mt-2 border-none py-4  outline-none text-xl font-bold placeholder:italic placeholder:text-2xl placeholder:opacity-25 "
                onChange={nameTitle}
              ></input>
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
                {" "}
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
                  <button className="mr-4 underline" onClick={() => showNote()}>
                    + Add Note
                  </button>
                )}{" "}
                <button className="underline">+ Add Project</button>
              </div>{" "}
              <div className="bg-[#eeeeee] h-[7vh] rounded-b-md flex justify-end pr-4 font-bold">
                <button className="text-[#aaaaaa]" onClick={() => hide()}>
                  Cancel
                </button>{" "}
                <button className="text-white bg-[#bbbbbb] rounded-md h-[4vh] w-[8vh] mt-3 ml-6">
                  Save
                </button>{" "}
              </div>{" "}
            </div>
          ) : (
            <AddTask bgColor={bgColor} show={()=>show()} />
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Tasks;
