import s from './App.module.css';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
// import * as storage from '../../services/localStorage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contactsOperations';
import {
  // getItems,
  // getFilter,
  //   getFilteredContacts,
  getMemoizedFilteredContacts,
} from '../../redux/contacts/contactsSelectors';
import { getUser } from '../../redux/auth/authOperations';
import Header from '../Header';
import { getLoadingUser } from '../../redux/auth/authSelectors';
import MainRoutes from '../../routes/MainRoutes';

// const CONTACTSLOCALE = 'contacts';

const App = () => {
  //   const state = useSelector(state => state.contacts);
  //   const items = useSelector(getItems);
  //   const filter = useSelector(getFilter);
  //   const filteredContacts = useSelector(getMemoizedFilteredContacts);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getContacts());
  //   }, [dispatch]);

  //   const handleFilter = () =>
  //     items.filter(contact => {
  //       return contact.name.toLowerCase().includes(filter.toLowerCase());
  //     });
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(getLoadingUser);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if (isLoadingUser) return;

  return (
    <>
      <Header />
      <div className={s.container}>
        <MainRoutes />
        {/* <h2 className={s.title}>Phonebook</h2>
        <ContactForm />
        <h2 className={s.title}>Contacts</h2>

        <Filter />
        {!!filteredContacts.length && <ContactList handleFilter={filteredContacts} />} */}
        {/* {!!handleFilter().length && <ContactList handleFilter={handleFilter} />} */}
      </div>
    </>
  );
};

export default App;
