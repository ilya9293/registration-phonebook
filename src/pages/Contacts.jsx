import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { getContacts } from '../redux/contacts/contactsOperations';
import { getMemoizedFilteredContacts, getError } from '../redux/contacts/contactsSelectors';
import PropTypes from 'prop-types';

function Contacts(props) {
  const filteredContacts = useSelector(getMemoizedFilteredContacts);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alert(error);
    }
    dispatch(getContacts());
  }, [dispatch, error]);

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
