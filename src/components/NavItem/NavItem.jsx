import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function NavItem({ path, name }) {
  return (
    <NavLink to={path} className={'header_links'}>
      {name}
    </NavLink>
  );
}

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavItem;
