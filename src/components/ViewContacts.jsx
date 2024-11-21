import React from 'react';

const ViewContacts = ({ title, contacts, removeContact}) => {

    return (
        <>
            <h1>{title}</h1>
            {contacts.map((c) => {
                return (
                    <div data-testid="contact" key={c.id}>
                        <span>{c.name}</span>
                        <span>{c.phone}</span>
                        <span onClick={() => {removeContact(c)}}>Delete</span>
                    </div>
                )
            })}
        </>
    )

};

export default ViewContacts;