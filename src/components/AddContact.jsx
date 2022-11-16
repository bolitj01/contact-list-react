import React, {useState} from 'react';

const AddContact = ({addContact, removeContact}) => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <form onSubmit={() => removeContact()}>
            <label htmlFor="name">Name</label>
            <input onChange={(e) => {setName(e.target.value)}}
            required data-testid="name" type="text" name="name" id="" placeholder="Name" />
            <label htmlFor="phone">Phone #</label>
            <input onChange={(e) => {setPhone(e.target.value)}}
            required data-testid="phone" type="text" name="phone" id="" placeholder="###-###-####" />
            <button onClick={(e) => {
                e.preventDefault();
                addContact(name, phone)
                }}>Add Contact</button>
        </form>
    )

};

export default AddContact;