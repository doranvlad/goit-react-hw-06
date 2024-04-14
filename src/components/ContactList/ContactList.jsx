import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

function ContactList({ contacts, deleteContact }) {
  return (
    <div>
      <ul className={s.list}>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact contact={contact} deleteContact={deleteContact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;
