import React from "react";
import PropTypes from "prop-types";
import { BidTypeButtonsView } from "../BidTypeButtonsView/BidTypeButtonsView";

export function BidTypeView({
  id,
  info,
  status,
  bidPeriods,
  lastImport,
  isImporting,
}) {
  return (
    <>
      <div
        className={`${
          isImporting ? "color" : id % 2 == 1 ? "stripe" : ""
        } border-bottom border-light`}
      >
        <div className="grid-container mt-2">
          <div className="grid-item ms-2">{id}</div>
          <div className="grid-item ">{info}</div>
          <div className="grid-item ms-4">{status}</div>
          <div className="grid-item mx-5">{bidPeriods}</div>
          <div className="grid-item  ">{lastImport}</div>
          <div className="grid-item text-center mx-5">
            <BidTypeButtonsView id={id} isImporting={isImporting} />
          </div>
        </div>
      </div>
    </>
  );
}

BidTypeView.propTypes = {
  id: PropTypes.number,
  info: PropTypes.string,
  status: PropTypes.string,
  bidPeriods: PropTypes.number,
  lastImport: PropTypes.string,
  isImporting: PropTypes.bool,
};
