import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const { showHide, setShowHide} = props;
  const convertShowHideToHide = () =>{
    setShowHide('hide')
  }


  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    setShowHide('hide')
 
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

 
  return (
    <div>
      <div className={`container my-3 ${showHide==='hide'?'d-none':''}  `} >
        {/* <h2>Add a Note</h2> */}
        <form style={{backgroundColor: 'white'}} >
          <div className="mb-3">
            <input
             style={{fontWeight: 'normal', fontSize: '25px', color: 'black', outline:'none',  border: 'none'}}
              id="title"
              type="text"
              className="form-control"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
              // minLength={5} required
              value={note.title}
              placeholder="Title"
            />
          </div>
          <div className="mb-3">
            {/* <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label> */}
            <textarea
            style={{height: '400px', border: 'none', outlineColor: 'white'}}
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              minLength={1} required
              value={note.description}
              placeholder="Description"
              outline="none"
            />
          </div>

          <button style={{color:'white'}} disabled={note.description.length<1} type="submit" onClick={handleClick} className="btn btn-warning">
            Add Note
          </button>
          <button onClick={convertShowHideToHide} className="btn btn-warning mx-3" style={{color:'white'}}>Cancel</button>
        </form>
      </div>

     
      {/* // for update note */}
      
    </div>




  );
};

export default AddNote;
