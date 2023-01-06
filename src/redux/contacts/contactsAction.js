// import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const getContactsRequest = createAction('contacts/getContactsRequest');
const getContactsSuccess = createAction('contacts/getContactsSuccess');
const getContactsError = createAction('contacts/getContactsError');

const addContactsRequest = createAction('contacts/addContactsRequest');
const addContactsSuccess = createAction('contacts/addContactsSuccess');
const addContactsError = createAction('contacts/addContactsError');

const removeContactRequest = createAction('contacts/removeContactRequest');
const removeContactSuccess = createAction('contacts/removeContactSuccess');
const removeContactError = createAction('contacts/removeContactError');

const filterSet = createAction('filter/set');

export {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  filterSet,
};

// Old actions

// const itemsAdd = (name, number) => ({
//   type: 'contacts/add',
//   payload: {
//     name,
//     number,
//     id: nanoid(),
//   },
// });

// const itemsRemove = contact => ({
//   type: 'contacts/remove',
//   payload: contact,
// });

// const filterSet = filter => ({
//   type: 'filter/set',
//   payload: filter,
// });

// export { itemsAdd, itemsRemove, filterSet };
