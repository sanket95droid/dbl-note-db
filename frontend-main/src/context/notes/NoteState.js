import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  // const host = "http://localhost:5000"
  const host = "https://inotebookbackend.herokuapp.com"
    const notesInitial = []

      const [notes, setNotes] = useState(notesInitial)

      // Get all notes 
      const getNotes = async (title, description, tag) =>{
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
          } 
        });
        const json = await response.json()
        setNotes(json);


      }

      const [userData, setUserData] = useState([])

       // Get user data 
       const getData = async () =>{
        const response = await fetch(`${host}/api/auth/getuser`, {
          method: 'POST',
          headers: {
            'auth-token': localStorage.getItem('token')
          } 
        });
        const json = await response.json()
        setUserData(json)
      }

      // Add a note
      const addNote = async (title, description, tag) =>{
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
          },
          body: JSON.stringify({title, description, tag}) 
          
        });
        const note = await response.json()
        setNotes(notes.concat(note))
       
      }

      // Delete a note
      const deleteNote = async (id) =>{
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
          }
        });
        const json = response.json();
        console.log(json)



        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes);
      }

      // Edit a note
      const editNote = async (id, title, description, tag) =>{

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
          },
          body: JSON.stringify({title, description, tag}) 
        });
        const json = await response.json();
        console.log(json)
      


        
        
        
        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if (element._id === id) {
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag;
            break;
          }
        }
        setNotes(newNotes);
      }
    
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes, getData, userData}}>
            {props.children}
        </NoteContext.Provider>

    )
}

// So, you can use the functions, variables and states of NoteState.js in any component by importing 'noteContext.js'

export default NoteState;