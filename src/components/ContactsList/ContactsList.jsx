import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contactSlice';
import { getContacts, getFilterValue } from 'redux/selectors';
import css from './ContactsList.module.css';

const ContactsList = () => {
  const contact = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const dispatch = useDispatch();

  const filterContact = () => {
    return contact.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const visibleContacts = filterContact();
  
  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={name} className={css.item}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              className={css.delBtn}
              onClick={() => dispatch(deleteContacts(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}


export default ContactsList;
