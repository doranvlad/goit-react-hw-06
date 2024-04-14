import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";
import "./App.css";
import localFunc from "./localFunc";

function App() {
  const fetchContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contacts, setContacts] = useState(() => {
    const localContacts = localFunc.load("contacts");

    if (localContacts !== undefined) {
      return localContacts;
    }

    return fetchContacts;
  });
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const addContact = (newContact) => {
    const newCont = {
      id: nanoid(),
      name: newContact.name,
      number: newContact.phone,
    };
    console.log(newCont);
    setContacts((prev) => {
      return [...prev, newCont];
    });
  };

  const list = (search) => {
    if (search === "") {
      return contacts;
    }
    return contacts.filter((el) => {
      return el.name.toLowerCase().includes(search.toLowerCase());
    });
  };

  const deleteContact = (id) => {
    setContacts((prev) => {
      return prev.filter((el) => {
        return el.id !== id;
      });
    });
  };

  useEffect(() => {
    localFunc.save("contacts", contacts);
  }, [contacts]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} contacts={contacts} />
      <SearchBox search={search} handleSearch={handleSearch} />
      <ContactList contacts={list(search)} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
