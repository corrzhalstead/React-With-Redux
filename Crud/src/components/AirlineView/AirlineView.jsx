import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

/**
 * Interactive components that displays the airline section
 */

export function AirlineView({ name, path }) {
  return (
    <Router>
      <div className="col-sm-12 col-md ">
        <div className="p-3 ms-4">
          <h1>{name}</h1>
          <p>
            View the monthly bid data, import history &amp; download statistics.
          </p>
          <Link to={path} className="view btn btn-outline-dark ">
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              size="xs"
              className="iconview"
            ></FontAwesomeIcon>
            View
          </Link>
        </div>
      </div>
    </Router>
  );
}

AirlineView.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
};

export default AirlineView;
