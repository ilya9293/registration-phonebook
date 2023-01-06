import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { getContacts } from '../redux/contacts/contactsOperations';
import { getMemoizedFilteredContacts } from '../redux/contacts/contactsSelectors';
import PropTypes from 'prop-types';

function Contacts(props) {
  const filteredContacts = useSelector(getMemoizedFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      {/* <h2 className="title">Phonebook</h2> */}
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter />
      {!!filteredContacts.length && <ContactList handleFilter={filteredContacts} />}
    </>
  );
}

Contacts.propTypes = {};

export default Contacts;
