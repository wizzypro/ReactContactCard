import React from "react";
import Avatar from "../Avatar";

let Contact = (props) => {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar imgSrc={props.imgSrc} imgAlt={props.imgAlt} />
        </div>
        <div className="bottom">
          <p className="info">{props.tel}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
