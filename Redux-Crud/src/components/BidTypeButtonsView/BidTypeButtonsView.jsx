import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export function BidTypeButtonsView({ isImporting }) {
  return (
    <div className={isImporting ? "color" : ""}>
      <div className={`list-item`}>
        <div className="d-flex flex-column ">
          <button
            type="button"
            hidden={isImporting}
            className="retry btn btn-primary btn-m py-2 mb-1"
          >
            <FontAwesomeIcon
              icon={faCloudDownloadAlt}
              className="iconview2 mx-1"
            ></FontAwesomeIcon>
            Retry Import
          </button>
          <button
            type="button"
            hidden={isImporting}
            className="period btn btn-primary btn-m py-2 mb-1"
            disabled
          >
            Bid Periods
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className="iconview2 mx-1"
            ></FontAwesomeIcon>
          </button>
          <button
            type="button"
            hidden={isImporting}
            className="import btn btn-primary btn-m py-2 mb-1"
            disabled
          >
            Import History
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className="iconview2 mx-1"
            ></FontAwesomeIcon>
          </button>
          <button
            type="button"
            className="delete btn btn-danger btn-m py-2 mb-1"
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="iconview "
            ></FontAwesomeIcon>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

BidTypeButtonsView.propTypes = {
  //Composition of the task

  id: PropTypes.number,
  isImporting: PropTypes.bool,
};
