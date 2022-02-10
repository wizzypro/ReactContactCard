import React from "react";
import ContactCard from "./contact/ContactCard";
import contacts from "../contacts.js";
import Avatar from "./contact/Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgSrc={contacts[1].imgURL} imgAlt={contacts[1].nam} />
      <ContactCard
        name={contacts[0].name}
        imgSrc={contacts[0].imgURL}
        imgAlt={contacts[0].name}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />

      <ContactCard
        name={contacts[1].name}
        imgSrc={contacts[1].imgURL}
        imgAlt={contacts[1].name}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />

      <ContactCard
        name={contacts[2].name}
        imgSrc={contacts[2].imgURL}
        imgAlt={contacts[2].name}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
