import { useSelector } from 'react-redux';
import Button from './Button';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactListItem from './ContactListItem';
import { getLoading } from '../../redux/contacts/contactsSelectors';

function ContactList({ handleFilter }) {
  //   const contacts = useSelector(state => state.contacts);
  const loading = useSelector(getLoading);

  return (
    <>
      <ul className={s.list}>
        {handleFilter.map(({ id, name, phone }) => {
          return (
            <li key={id} className={s.listItem}>
              <ContactListItem name={name} number={phone} />
              <Button id={id} />
            </li>
          );
        })}
      </ul>

      {loading && <div className={s.loading}>Loading...</div>}
    </>
  );
}

ContactList.propTypes = {
  handleFilter: PropTypes.array.isRequired,
};

export default ContactList;
