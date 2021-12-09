import React from "react";
import PropTypes from "prop-types";

import { BidTypeView } from "../BidTypeView/BidTypeView";

export function BidTypeListView({ bidTypes }) {
  return (
    <>
      {bidTypes.map((bid, index) => (
        <BidTypeView key={index} {...bid} />
      ))}
    </>
  );
}

BidTypeListView.propTypes = {
  bidTypes: PropTypes.arrayOf({
    id: PropTypes.number,
    info: PropTypes.string,
    status: PropTypes.string,
    bidPeriods: PropTypes.number,
    lastImport: PropTypes.string,
    isImporting: PropTypes.bool,
  }),
};
