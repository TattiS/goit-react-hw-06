import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const selectedContacts =
    filter !== ""
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;

  return (
    <ul className={css.contactList}>
      {selectedContacts.map((contact) => {
        return <Contact key={contact.id} contactInfo={contact} />;
      })}
    </ul>
  );
}

export default ContactList;
