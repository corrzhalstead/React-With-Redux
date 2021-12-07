import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { BidTypeListView } from "../BidTypeListView/BidTypeListView";
import { BrowserRouter as Router, Link } from "react-router-dom";

export function BidTypePage({ bidTypeList }) {
  return (
    <>
      <Router>
        <h1>Bid Types</h1>

        <hr />

        <div className="table-responsive">
          <section className="flex-table">
            <div className="flex-row header mt-3">
              <div className="flex-column">ID</div>
              <div className="flex-column">Bid Types</div>
              <div className="flex-column">Status</div>
              <div className="flex-column">#Bid Periods</div>
              <div className="flex-column">Last Import</div>
              <div className="flex-column">
                <Link to="#">
                  <FontAwesomeIcon icon={faFilter} size="xs"></FontAwesomeIcon>
                </Link>
                <Link to="#">
                  <FontAwesomeIcon
                    icon={faPlus}
                    size="xs"
                    className="mx-2"
                  ></FontAwesomeIcon>
                </Link>
                <Link to="#">
                  <FontAwesomeIcon
                    icon={faSync}
                    size="xs"
                    className="me-5"
                  ></FontAwesomeIcon>
                </Link>
              </div>
            </div>
          </section>

          {bidTypeList.map((bidType, index) => (
            <BidTypeListView key={index} {...bidType} />
          ))}
        </div>
      </Router>
    </>
  );
}

BidTypePage.propTypes = {
  bidTypeList: PropTypes.arrayOf({
    id: PropTypes.number,
    info: PropTypes.string,
    status: PropTypes.string,
    bidPeriods: PropTypes.number,
    lastImport: PropTypes.string,
    isImporting: PropTypes.bool,
  }),
};
