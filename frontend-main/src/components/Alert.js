import React from "react";

export default function Alert(props) {
  return (
    <div style={{height: '40px'}}>
      {/* ^ to prevent layout shifting */}
     { props.alert && 
    <div>
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show `}
        role="alert"
        // style={{height: '10px'}, {lineHeight: '10px'}}
        style={{height: '10px', lineHeight: '10px'}}
      >  <strong>{props.alert.type}</strong> {props.alert.msg}
      </div>
    </div>}
    </div>
  );
}