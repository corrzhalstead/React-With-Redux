import React from "react";
import PropTypes from "prop-types";
import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

/**
 * Interactive components that displays the airline dropdown section
 */

export function NavBarDropDownView({ airlineName, bidTypesPath, pilotsPath }) {
  return (
    // <Router>
    <NavDropdown title={airlineName} id="basic-nav-dropdown">
      <NavLink to={bidTypesPath} className="a-nav">
        BidTypes
      </NavLink>
      <NavDropdown.Divider />
      <NavLink to={pilotsPath} className="a-nav">
        Pilots
      </NavLink>
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
