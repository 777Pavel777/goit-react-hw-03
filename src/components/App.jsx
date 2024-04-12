import ContactForm from './contactForm/ContactForm';
import SearchBox from './searchBox/SearchBox';
import ContactList from './contactList/ContactList';
import Contacts from '../contacts.json';
import { useEffect, useState } from 'react';

import css from '../components/App.module.css';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('saved-contacts');
    return savedContacts ? JSON.parse(savedContacts) : Contacts;
  });

  const handleAddContact = newContact => {
    setContacts([...contacts, newContact]);
  };

  const [search, setSearch] = useState('');
  const handleSearchChange = event => {
    setSearch(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDeleteContact = contactId => {
    const updatedContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    setContacts(updatedContacts);
  };

  useEffect(() => {
    localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={search} onSearch={handleSearchChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
}
