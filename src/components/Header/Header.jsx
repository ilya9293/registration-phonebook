import PropTypes from 'prop-types';
import NavItem from '../NavItem/NavItem';

function Header(props) {
  const listNavLink = [
    { name: 'PhoneBook', path: '/' },
    { name: 'Contacts', path: '/contacts' },
    { name: 'Sign up', path: '/register' },
    { name: 'Sign in', path: '/login' },
  ];

  return (
    <header>
      <nav>
        <ul className="header">
          {listNavLink.map(({ name, path }) => (
            <li className="header_item" key={path}>
              <NavItem name={name} path={path} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {};

export default Header;
