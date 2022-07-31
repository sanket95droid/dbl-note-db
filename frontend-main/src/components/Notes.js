import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useHistory } from "react-router";

const Notes = () => {
  const context = useContext(noteContext);

  let history = useHistory();
  const { notes, getNotes, editNote, getData } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
      getData();
    } else {
      history.push("/login");
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  const [showHide, setShowHide] = useState("hide");

  const [searchTxt, setSearchTxt] = useState("");
  const changeSearchTxt = (e) => {
    setSearchTxt(e.target.value);
  };
  // console.log(searchTxt);

  const plusAction = () => {
    setShowHide("show");
  };

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote showHide={showHide} setShowHide={setShowHide} />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        // style={{zIndex: '1000'}}
        // ref={ref}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{ borderRadius: "20px" }}>
            <div className="modal-header">
              <input
                style={{
                  fontWeight: "normal",
                  fontSize: "25px",
                  color: "black",
                  textAlign: "center",
                  outline: "none",
                }}
                id="etitle"
                type="text"
                className="form-control border-0"
                name="etitle"
                aria-describedby="emailHelp"
                value={note.etitle}
                onChange={onChange}
                // minLength={5} required
              />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <textarea
                    style={{ height: "400px" }}
                    type="text"
                    className="form-control border-0"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                    minLength={1}
                    required
                    cols="50"
                    rows="10"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                style={{ color: "white" }}
                disabled={note.edescription.length < 1}
                onClick={handleClick}
                type="button"
                className="btn btn-warning"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

     
      <input
        className="form-control me-2 my-4 "
        id="searchTxt"
        type="search"
        placeholder="Search Notes by Description"
        aria-label="Search"
        onChange={changeSearchTxt}
        value={searchTxt}
        style={{
          backgroundColor: "#f0f0f0",
          borderRadius: "15px",
          border: "none",
          height: "40px",
        }}
      />

      <div
        className={`row ${showHide === "hide" ? "" : "d-none"}`}
        id="divWhichShowsNotes"
        style={{
          display: `${note.edescription.includes(searchTxt) ? "" : "flex"}`,
          flexDirection: `${
            note.edescription.includes(searchTxt) ? "" : "column-reverse"
          }`,
        }}
      >
        {/* ^ above styling is given to show cards at the top when it icludes search text */}
        <div className="container my-3">
          {notes.length === 0 && <h5>No Notes To Display</h5>}
        </div>
        {notes.map((note) => {
          return (
            <NoteItem
              key={note._id}
              updateNote={updateNote}
              note={note}
              searchTxt={searchTxt}
            />
          );
        })}
      </div>

      <div
        className={`container  btn-warning ${
          showHide === "hide" ? "" : "d-none"
        }`}
        onClick={plusAction}
        style={{
          color: "white",
          height: "60px",
          width: "60px",
          borderRadius: "50%",
          lineHeight: "60px",
          textAlign: "center",
          fontSize: "50px",
        }}
        id="addNote"
      >
        +
      </div>
    </>
  );
};

export default Notes;
