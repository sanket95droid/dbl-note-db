import React  from 'react'
// import noteContext from '../context/notes/noteContext'

export const About = () => {
    return (
        <div className="my-4" >
            <h5 className="my-3">It was observed that although students often pay attention in lectures but have trouble writing notes in notebook and arranging them in structured manner.</h5> 
            <h5 className="my-3">Storing notes here will allow you to access these notes from anywhere in the world using any smartphone or laptop, all you need is login into your account.</h5>
            <h5 className="my-3">note-app is a MERN stack application.</h5>
            <h5 className="my-3">M = MongoDb - it uses MongoDb for storing data into database.</h5>
            <h5 className="my-3">E = Express - it uses express for routing the server and API related work.</h5>
            <h5 className="my-3">R = ReactJs - it uses ReactJs for frontend.</h5>
            <h5 className="my-3">N = NodeJs - it uses NodeJs for backend </h5>
            <br />
            <h5 className="my-3"><a target="_blank" rel="noreferrer" href="https://github.com/sanket95droid/frontend-note">Click here</a> to checkout the github repositry for the source code of front end.</h5>
            <h5 className="my-3"><a target="_blank" rel="noreferrer" href="https://github.com/sanket95droid/backend-note">Click here</a> to checkout the github repositry for the source code of back end.</h5>
            <br />
            <h5 className="my-3">Team Members: </h5>
            <h5 className="my-3">Sanket Zambare</h5>
            <h5 className="my-3">Mrunal Jadhav </h5>
            <h5 className="my-3">Abhishek Pawar </h5>
            <h5 className="my-3">Kartik Pawar </h5>
        </div>
    )
}
