import * as storage from '../../services/localStorage';

const CONTACTSLOCALE = 'contacts';

const startedContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const isContacts = !storage.get(CONTACTSLOCALE)?.length
  ? startedContacts
  : storage.get(CONTACTSLOCALE);

export default isContacts;
