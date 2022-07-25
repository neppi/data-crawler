import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWrench, faTh, faVial, faFileAlt } from '@fortawesome/free-solid-svg-icons';

type SideBarProps = {
  isOpen: boolean;
  toggle: () => void;
};

const SideBar = ({ isOpen, toggle }: SideBarProps): React.ReactElement => {
  return (
    <div className={classNames('sidebar', { 'is-open': isOpen })}>
      <Navbar bg="dark" variant="dark" className="sidebar-header">
        <Navbar.Brand href="/dashboard" className="ms-3">
          Menu
        </Navbar.Brand>
      </Navbar>

      <Nav className="flex-column pt-2">
        <Nav.Item>
          <NavLink to="/controllers" className="nav-link">
            <FontAwesomeIcon icon={faHome} className="me-2" />
            Data Sources
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink to="/settings" className="nav-link">
            <FontAwesomeIcon icon={faWrench} className="me-2" />
            Settings
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink to="/expert" className="nav-link">
            <FontAwesomeIcon icon={faVial} className="me-2" />
            Expert
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink to="/readme" className="nav-link">
            <FontAwesomeIcon icon={faFileAlt} className="me-2" />
            Readme
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink to="/icons" className="nav-link">
            <FontAwesomeIcon icon={faTh} className="me-2" />
            Icons
          </NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default SideBar;
