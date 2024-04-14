import s from "./Contact.module.css";
import { IoMdPerson, IoMdCall } from "react-icons/io";

function Contact({ contact, deleteContact }) {
  return (
    <div className={s.wrapper}>
      <div>
        <p>
          <span>
            <IoMdPerson />
          </span>
          {contact.name}
        </p>
        <p>
          <span>
            <IoMdCall />
          </span>
          {contact.number}
        </p>
      </div>
      <button
        onClick={() => {
          deleteContact(contact.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
