import React from "react";
import PropTypes from "prop-types";

/**
 * View components that displays the version of the app
 */

export function VersionView({ current }) {
  return (
    <div className="col-xs-12 col-lg-4 text-center">
      <h1 className="display-3">{current}</h1>
      <p className="text-muted">Version</p>
    </div>
  );
}

VersionView.propTypes = {
  current: PropTypes.string,
};
