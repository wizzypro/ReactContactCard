import React from "react";
import Avatar from "./Avatar";
import DetailCard from "./DetailCard";

let ContactCard = (props) => {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar imgSrc={props.imgSrc} imgAlt={props.imgAlt} />
        </div>
        <div className="bottom">
          <DetailCard detailInfo={props.tel} />
          <DetailCard detailInfo={props.email} />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
