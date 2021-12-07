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
        <div className="flex-row data">
          <div className="flex-column">{id}</div>
          <div className="flex-column ">{info}</div>
          <div className="flex-column">{status}</div>
          <div className="flex-column">{bidPeriods}</div>
          <div className="flex-column ">{lastImport}</div>
          <div className="flex-column">
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
