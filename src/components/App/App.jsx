import { useEffect, useState } from "react";
import css from "./App.module.css";
import initialContacts from "../../initialContacts.json";
import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";

function App() {
  const [contacts, setContacts] = useState(() => {
    const contactsLS = window.localStorage.getItem("saved-contacts");
    return contactsLS && JSON.parse(contactsLS).length > 0
      ? JSON.parse(contactsLS)
      : initialContacts;
  });
  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);
  const [filter, setFilter] = useState("");
  let filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <div className={css.mainContainer}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox inputValue={filter} setInputValue={setFilter} />
      <ContactList contacts={filteredContacts} deleteHandler={deleteContact} />
    </div>
  );
}

export default App;
