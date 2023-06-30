import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import FilterContacts from './FilterContacts/FilterContacts';
import ContactsList from './ContactsList/ContactsList';
import css from './App.module.css';

export function App() {
  const [contacts, setContacts] = useState(() => JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');
 
  const handleFormSubmit = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts(prevState => [...prevState, { id: nanoid(), name, number }]);
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id))
  };
  
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const localContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localContacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);


  const visibleContacts = getVisibleContacts();

  return (
    <>
      <div className={css.main}>
        <h2>Phonebook</h2>
        <Form onSubmit={handleFormSubmit} />
      </div>
      <div className={css.main}>
        <h2>Contacts</h2>
        <FilterContacts value={filter} onChange={handleFilterChange} />
        <ContactsList
          visibleContacts={visibleContacts}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </>
  );
}
