import s from './ContactForm.module.css';
// import { itemsAdd } from '../../redux/contacts/contactsAction';
// import { itemsSlice } from '../../redux/contacts/contactsSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOperations';
import { getItems } from '../../redux/contacts/contactsSelectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  //   const contacts = useSelector(state => state.contacts);
  const items = useSelector(getItems);
  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const pushSubmit = e => {
    e.preventDefault();
    const isName = items.some(contact => name.toLowerCase() === contact.name.toLowerCase());
    if (isName) {
      alert(`${name} is alredy in contacts`);
      reset();
      return;
    }
    dispatch(
      addContact({
        name,
        number,
      }),
    );
    reset();
  };

  return (
    <form className={s.form} onSubmit={pushSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
