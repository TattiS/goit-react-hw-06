import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

function ContactList({ contacts, deleteHandler }) {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            contactInfo={contact}
            onDelete={(id) => {
              deleteHandler(id);
            }}
          />
        );
      })}
    </ul>
  );
}

export default ContactList;
