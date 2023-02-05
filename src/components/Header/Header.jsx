import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../redux/auth/authOperations';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import NavItem from '../NavItem/NavItem';
import UserMenu from '../UserMenu/UserMenu';

function Header(props) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  //   const listNavLink = [
  //     { name: 'PhoneBook', path: '/' },
  //     { name: 'Contacts', path: '/contacts' },
  //     { name: 'Sign up', path: '/register' },
  //     { name: 'Sign in', path: '/login' },
  //   ];

  const handleLogOut = e => {
    e.preventDefault();
    dispatch(signOut());
  };

  return (
    <header className="main-header">
      <nav>
        <ul className="header">
          <li className="header_user">
            <UserMenu />
          </li>
          <li className="header_item">
            <NavItem name={'PhoneBook'} path={'/'} />
          </li>
          {isLoggedIn && (
            <li className="header_item">
              <NavItem name={'Contacts'} path={'/contacts'} />
            </li>
          )}
          {!isLoggedIn && (
            <>
              <li className="header_item">
                <NavItem name={'Sign up'} path={'/register'} />
              </li>
              <li className="header_item">
                <NavItem name={'Sign in'} path={'/login'} />
              </li>
            </>
          )}
          {/* {listNavLink.map(({ name, path }) => (
            <li className="header_item" key={path}>
              <NavItem name={name} path={path} />
            </li>
          ))} */}
          {isLoggedIn && (
            <li className="header_item">
              <button type="button" className="header_item__logOut" onClick={handleLogOut}>
                LogOut
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {};

export default Header;
