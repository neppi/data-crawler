import React from 'react';
import { NavLink } from 'react-router-dom';
import { CrawlerLogo } from './CrawlerLogo';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CrawlerServiceVersion } from '../../lib/version';
import { faAlignRight, faAlignLeft } from '@fortawesome/free-solid-svg-icons';

type CrawlerNavBarProps = {
  isOpen: boolean;
  toggle: () => void;
};

const CrawlerNavBar = ({ toggle, isOpen }: CrawlerNavBarProps): React.ReactElement => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="/">
        <CrawlerLogo
          style={{ marginLeft: '10px', marginRight: '8px', marginTop: '-4px' }}
          className="d-inline-block align-top"
          heightInPx={34}
        />{' '}
        SCPI Controller
        <span
          style={{
            marginLeft: '6px',
            fontSize: '50%',
          }}
        >
          {CrawlerServiceVersion.gitTag.split('_')[0]}
        </span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="nav-link" onClick={toggle} title={isOpen ? 'Close menu' : 'Open menu'}>
            <FontAwesomeIcon
              className="me-1"
              style={{ marginBottom: '1px' }}
              icon={isOpen ? faAlignRight : faAlignLeft}
              size="xs"
            />
            Menu
          </Nav.Link>
        </Nav>
        <Nav>
          <NavLink className="nav-link" to="#login">
            Login
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CrawlerNavBar;
