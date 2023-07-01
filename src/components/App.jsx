import Form from './Form/Form';
import FilterContacts from './FilterContacts/FilterContacts';
import ContactsList from './ContactsList/ContactsList';
import css from './App.module.css';

export function App() {
  return (
    <>
      <div className={css.main}>
        <h2>Phonebook</h2>
        <Form />
      </div>
      <div className={css.main}>
        <h2>Contacts</h2>
        <FilterContacts />
        <ContactsList />
      </div>
    </>
  );
}
