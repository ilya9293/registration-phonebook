import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/authSelectors';

function UserMenu(props) {
  const userName = useSelector(getUserName);
  return <p className="userMenu">{userName ?? 'User'}</p>;
}

UserMenu.propTypes = {};

export default UserMenu;
