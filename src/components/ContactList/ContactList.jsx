import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { useSelector } from "react-redux";

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectNameFilter);

  return (
    <div>
      <ul className={s.list}>
        {contacts
          .filter((contact) => {
            return contact.name
              .toLowerCase()
              .includes(filterValue.toLowerCase());
          })
          .map((contact) => {
            return (
              <li key={contact.id}>
                <Contact contact={contact} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ContactList;
