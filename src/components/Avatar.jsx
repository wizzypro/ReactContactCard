import React from "react";

let Avatar = (props) => {
  return <img className="circle-img" src={props.imgSrc} alt={props.imgAlt} />;
};

export default Avatar;
