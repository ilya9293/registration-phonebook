import { createSelector } from '@reduxjs/toolkit';

const getItems = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getLoading = state => state.contacts.loading;

const getError = state => state.contacts.error;

const getFilteredContacts = state => {
  const items = getItems(state);
  const filter = getFilter(state);
  //   console.log(items);

  return items.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
};

const getMemoizedFilteredContacts = createSelector([getItems, getFilter], (items, filter) =>
  items.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())),
);

export {
  getItems,
  getFilter,
  getLoading,
  getError,
  getFilteredContacts,
  getMemoizedFilteredContacts,
};
