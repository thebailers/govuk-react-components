import React from "react";
import PropTypes from 'prop-types';

const NavBar = ({ propositionHeader, propositionHeaderLink, children }) => (
  <div className="header-proposition">
    <div className="content">
      <nav id="proposition-menu">
        <a id="proposition-name" href={propositionHeaderLink}>{propositionHeader}</a>
        {children &&
          <ul id="proposition-links">
            {children}
          </ul>
        }
      </nav>
    </div>
  </div>
);

NavBar.defaultProps = {
  propositionHeaderLink: '/',
};

NavBar.propTypes = {
  children: PropTypes.node,
  propositionHeader: PropTypes.string,
  propositionHeaderLink: PropTypes.string,
}

export default NavBar;
