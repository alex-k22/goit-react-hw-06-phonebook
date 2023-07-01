import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import css from '../Form/Form.module.css';

const FilterContacts = () => {
  const dispatch = useDispatch();

  const onChange = event => {
    dispatch(addFilter(event.target.value));
  };
    <>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="filter"
        title="Write you request here"
        required
        onChange={onChange}
      />
    </>
};


  export default FilterContacts;