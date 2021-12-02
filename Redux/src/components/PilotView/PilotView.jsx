import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

/**
 * View components that displays each Pilots
 */

export function PilotView({
  // id,
  // airline,
  firstName,
  lastName,
  fleet,
  seat,
  domicile,
  photo,
  trainingFacility,
  company,
  address1,
  address2,
  city,
  state,
  postalCode,
  areaCode,
  prefix,
  suffix,
}) {
  return (
    <div className="card mb-3 ms-1 text-secondary">
      <div className="row g-1">
        <div className="col col-md-4  text-center">
          <img src={photo} alt="Pilot" className="photo rounded-circle" />

          <div className="mt-2 pilotTag">
            {seat} {fleet} {domicile}
          </div>
          <div className="mt-3">
            <button
              type="button"
              className="btn btn-primary py-1 px-4"
              disabled
            >
              Edit
            </button>
          </div>
          <div className="mt-2">
            <button type="button" className="btn btn-danger py-1 ">
              Delete
            </button>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card-body pt-3">
            <p className="pilotName card-title">
              {firstName} {lastName}
            </p>
            <p className="address p-0">
              <FontAwesomeIcon
                icon={faMapMarker}
                aria-hidden="true"
                className="mapIcon mx-1"
              ></FontAwesomeIcon>
              {trainingFacility}
            </p>
            <p className="compName ">{company}</p>
            <p className="compAdd">
              {address1} {address2}
            </p>
            <p className=" compAdd">
              {city} {state} {postalCode}
            </p>

            <p className="phoneNum">
              P: ({areaCode}) {prefix} {suffix}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

PilotView.propTypes = {
  id: PropTypes.number,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  fleet: PropTypes.number.isRequired,
  seat: PropTypes.string.isRequired,
  domicile: PropTypes.string.isRequired,
  trainingFacility: PropTypes.string.isRequired,
  address1: PropTypes.string.isRequired,
  address2: PropTypes.string,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  postalCode: PropTypes.number.isRequired,
  areaCode: PropTypes.number.isRequired,
  prefix: PropTypes.number.isRequired,
  suffix: PropTypes.number.isRequired,
};
