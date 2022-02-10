import React from "react";
import Contact from "../components/contact/Contact";
import contacts from "../contacts.js";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Contact
        name={contacts[0].name}
        imgSrc={contacts[0].imgURL}
        imgAlt={contacts[0].name}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />

      <Contact
        name={contacts[1].name}
        imgSrc={contacts[1].imgURL}
        imgAlt={contacts[1].name}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />

      <Contact
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
