import React, { useState } from "react";
import { TwitterPicker } from 'react-color';
// import {Image} from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Note(props) {

  // in the beginig the property is always false, because I'm not change it in the moment
  const [editNote, setEditNote] = useState(false);

  // state 2
  const [newNote, setNewNote] = useState({title:"", content:""});

  // state 3 ->  where to save the note info typed
  const [noteInput, setNoteInput] = useState({title:"", content:""});
  
  // setting color 
  const [color, setColor] = useState("");

  
  const handleDelete = () => {
    props.deleteNote(props.id);
  };

  const handleEdit = () => {
    // change the status value of editNote
    setEditNote(true);
  };

  // create  new function to controll where I save things
  const handleChangeTitle = (event) => {
    setNoteInput(
      (prevValue) => ({
        ...prevValue,
        title:event.target.value
      })
    );
  }
  const handleChangeContent = (event) => {
    setNoteInput(
      // pass a function to receive previous state as a parameter
      (prevValue) => ({
        // call the preserve the previous value
        ...prevValue,
        // it's like a property that I'm adding
        content:event.target.value
      })
    );
  }

  // function to controll save
  const hadleSave = () => {
    // saves title and content on state 2 instead of state 3
    setNewNote({title: noteInput.title, content: noteInput.content});

    // removes the inputs and save btn after click on save
    setEditNote(false);
    
  }

  const handleSaveColor = (color) => {
    setColor(color.hex);
  };


  return (
    <div className='note' style={{backgroundColor: color}}>
      <h1>{editNote || newNote.title !== "" ? newNote.title : props.title}</h1>
      <p>{editNote || newNote.content !== "" ? newNote.content : props.content}</p>
      
      {editNote ? 
        <div>
          <input onChange={handleChangeTitle} value={noteInput.title}
            className="inputChangeContent"
          />
          <input onChange={handleChangeContent} value={noteInput.content}
            className="inputChangeContent"
          />
          <TwitterPicker
              className="colorPickerSize"
              color={color}
              onChangeComplete={ handleSaveColor }
          />
          <button onClick={hadleSave} className="btnNote">SAVE</button>
        </div> : null
      }
      <button onClick={handleDelete} className="btnNote">
        <DeleteIcon/>
      </button>
      <button onClick={handleEdit} className="btnNote">
        <EditIcon/>
      </button>

    </div>
  );
}
