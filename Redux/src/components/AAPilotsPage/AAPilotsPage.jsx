import React from "react";
import PropTypes from "prop-types";
import { PilotsListView } from "../PilotsListView/PilotsListView";

export function AAPilotsPage({ aaPilots }) {
  return (
    <>
      <div className="ms-4">
        <div className="ms-3">
          <h3 className="text-secondary">Pilots</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">App Views</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contacts
              </li>
            </ol>
          </nav>
        </div>
        <div className="aapilots col-sm-12">
          <PilotsListView pilots={aaPilots} />
        </div>
      </div>
    </>
  );
}

export default AAPilotsPage;

AAPilotsPage.propTypes = {
  aapilots: PropTypes.arrayOf({
    id: PropTypes.number,
    photo: PropTypes.object,
    pilotName: PropTypes.string,
    address: PropTypes.number,
    companyName: PropTypes.string,
    companyAdd: PropTypes.string,
    phoneNum: PropTypes.string,
  }),
};
