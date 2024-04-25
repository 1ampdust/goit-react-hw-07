import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectNameFilter, selectContacts } from "../../redux/contactsSlice";

const getVisibleContacts = (contacts, filter) => {
  if (filter.length > 0) {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  } else {
    return contacts;
  }
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredContacts = getVisibleContacts(contacts, filter);
  
  return (
    <div>
      {filteredContacts && filteredContacts.length > 0 ? (
        <ul className={css.contactsList}>
          {filteredContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p className={css.text}>No contacts yet</p>
      )}
    </div>
  );
};

export default ContactList;
