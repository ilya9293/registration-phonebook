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
import { Routes, Route } from 'react-router-dom';
import Header from '../Header';
import HomePage from '../../pages/HomePage';
import Registration from '../../pages/Registration';
import Authorization from '../../pages/Authorization';
import Contacts from '../../pages/Contacts';

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

  return (
    <>
      <Header />
      <div className={s.container}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Authorization />} />
        </Routes>

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
