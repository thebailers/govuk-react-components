import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../navbar';
import {NavItem} from '../navitem';

const Header = ({ 
  globalHeaderText, 
  propositionHeader, 
  propositionHeaderLink, 
  homepageUrl, 
  logoLinkTitle, 
  assetPath 
}) => (
  <header role="banner" id="global-header" className={propositionHeader ? 'with-proposition' : ''}>
    <div className="header-wrapper">
      <div className="header-global">
        <div className="header-logo">
          <a href={ homepageUrl } title={ logoLinkTitle } id="logo" className="content">
            <img src={`${ assetPath }/images/gov.uk_logotype_crown_invert_trans.png?0.23.0`} width="36" height="32" alt="" /> { globalHeaderText }
          </a>
        </div>
      </div>
      {
        propositionHeader &&
        <NavBar propositionHeader={propositionHeader} propositionHeaderLink={propositionHeaderLink}>
          <NavItem href="url-to-page-1" active>Navigation item #1</NavItem>
          <NavItem href="url-to-page-2">Navigation item #2</NavItem>
          <NavItem href="url-to-page-3">Navigation item #3</NavItem>
        </NavBar>
      }
    </div>
  </header>
);

Header.defaultProps = {
  assetPath: '/govuk',
  homepageUrl: 'https://www.gov.uk',
  propositionHeaderLink: '/',
  logoLinkTitle: '',
  globalHeaderText: 'GOV.UK'
};

Header.propTypes = {
  assetPath: PropTypes.string,
  propositionHeader: PropTypes.string,
  propositionHeaderLink: PropTypes.string,
  homepageUrl: PropTypes.string,
  logoLinkTitle: PropTypes.string,
  globalHeaderText: PropTypes.string,
}

export default Header;
