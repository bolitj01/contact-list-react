import './App.css';
import AddContact from './AddContact';
import ViewContacts from './ViewContacts';
import { useState } from 'react';

function App() {
  //{id, name, phone}
  const [contacts, setContacts] = useState([]);

  const addContact = (name, phone) => {
    const contact = {
      id: contacts.length + 1,
      name: name,
      phone: phone
    };
    setContacts([...contacts, contact]);
  }

  const removeContact = (c1) => {
    setContacts(contacts.filter((c2) => c1.id != c2.id));
  }

  return (
    <>
      <AddContact addContact={addContact}></AddContact>
      <ViewContacts title={"Contact List"} contacts={contacts} removeContact={removeContact}></ViewContacts>
    </>
  );
}

export default App;
