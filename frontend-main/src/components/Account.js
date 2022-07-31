import React, {useEffect, useContext} from 'react'
import { useHistory } from 'react-router';
import noteContext from "../context/notes/noteContext";

const Account = () => {
    const context = useContext(noteContext);
    let history = useHistory();
    const {userData, getData} = context;
    useEffect(() => {
        if (localStorage.getItem('token')) {
          getData()
        }
        else{
           history.push("/login")
        }
        // eslint-disable-next-line
      }, []);
    return (
        <div className="container my-4">
           <h1>Account Details</h1>
           <h5 className="my-4">Name: {userData.name}</h5>
           <h5 className="my-4">E-mail: {userData.email}</h5>
           <h5 className="my-4">User ID: {userData._id}</h5>
        </div>
    )
}

export default Account
