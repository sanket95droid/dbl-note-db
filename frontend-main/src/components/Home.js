import React from "react";
import Notes from "./Notes";

export const Home = (props) => {
  const {showAlert} = props
  return (
    <div >
      <Notes showAlert={showAlert}/>
      {/* <div style={{height:'150px', width:'200px', backgroundColor:'red'}} className="my-100">to make full page coloured</div> */}
    </div>
  );
};
