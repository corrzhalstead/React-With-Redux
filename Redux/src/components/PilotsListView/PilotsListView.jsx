import React from "react";
import PropTypes from "prop-types";

import { PilotView } from "../PilotView/PilotView";

/**
 * View components that displays list of Pilots
 */

export function PilotsListView({ pilots }) {
  return (
    <div className="">
      <div className="container row">
        {pilots.map((pilot, id) => (
          <PilotView key={id} {...pilot} />
        ))}
      </div>
    </div>
  );
}

PilotsListView.propTypes = {
  pilots: PropTypes.arrayOf({
    id: PropTypes.number,
    photo: PropTypes.object,
    pilotName: PropTypes.string,
    address: PropTypes.string,
    companyName: PropTypes.string,
    companyAdd: PropTypes.string,
    phoneNum: PropTypes.string,
  }),
};

export default PilotsListView;
