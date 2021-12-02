import React from "react";
import PropTypes from "prop-types";
import { NavDropdown } from "react-bootstrap";

/**
 * Interactive components that displays the airline dropdown section
 */

export function NavBarDropDownView({ airlineName, bidTypesPath, pilotsPath }) {
  return (
    <NavDropdown title={airlineName} id="basic-nav-dropdown">
      <NavDropdown.Item href={bidTypesPath}>BidTypes</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href={pilotsPath} className="">
        Pilots
      </NavDropdown.Item>
    </NavDropdown>
  );
}

NavBarDropDownView.propTypes = {
  airlineName: PropTypes.string,
  bidTypesPath: PropTypes.string,
  pilotsPath: PropTypes.string,
};

export default NavBarDropDownView;
