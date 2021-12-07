import React from "react";
import PropTypes from "prop-types";
import { NavDropdown } from "react-bootstrap";
// import { BrowserRouter as Router, Link } from "react-router-dom";

/**
 * Interactive components that displays the airline dropdown section
 */

export function NavBarDropDownView({ airlineName, bidTypesPath, pilotsPath }) {
  return (
    // <Router>
    <NavDropdown title={airlineName} id="basic-nav-dropdown">
      <NavDropdown.Item href={bidTypesPath}>BidTypes</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href={pilotsPath} className="">
        Pilots
      </NavDropdown.Item>
    </NavDropdown>
    // </Router>
  );
}

NavBarDropDownView.propTypes = {
  airlineName: PropTypes.string,
  bidTypesPath: PropTypes.string,
  pilotsPath: PropTypes.string,
};

export default NavBarDropDownView;
