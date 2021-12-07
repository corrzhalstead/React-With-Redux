import React from "react";
import PropTypes from "prop-types";
import { Nav, Navbar } from "react-bootstrap";
import { NavBarDropDownView } from "../NavBarDropDownView/NavBarDropDownView";

/**
 * View components that displays the NavBarDropDownView for different airlines
 */

export function NavBarView({ airlines }) {
  return (
    <>
      <Navbar className="navbar navbar-bg navbar-dark py-3 " expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
          <Nav>
            {airlines.map((airline, index) => (
              <NavBarDropDownView key={index} {...airline} />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

NavBarDropDownView.propTypes = {
  airlines: PropTypes.arrayOf({
    airlineName: PropTypes.string,
    bidTypesPath: PropTypes.string,
    pilotsPath: PropTypes.string,
  }),
};

export default NavBarView;
