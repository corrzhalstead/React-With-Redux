import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

/**
 * View components that displays each Pilots
 */

export function PilotView({
  pilot: {
    id,
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
  },
  onDeletePilot,
}) {
  // const deletedPilot = (id) => {
  //   alert(`Are you sure you want to delete this pilot ${id}? `);
  //   dispatch(deletePilot(id));
  // };

  // const [isDeleted, setDeleted] = useState(false);

  // setDeleted(true);

  return (
    <Router>
      {/* <div
        className={`alert alert-warning alert-dismissable fade show ${
          isDeleted ? "" : "hidden"
        }`}
      >
        <strong>Congrats</strong> You have successfully deleted a pilot!
      </div> */}
      <div className="pilot" key={id}>
        <div className="card mb-3 ms-1 text-secondary">
          <div className="row g-1">
            <div className="col col-md-4  text-center">
              <img src={photo} alt="Pilot" className="photo rounded-circle" />

              <div className="mt-2 pilotTag">
                {seat} {fleet} {domicile}
              </div>
              <div className="mt-3">
                <Link
                  to={`/pilot/edit/${id}`}
                  className="btn btn-primary py-1 px-4"
                >
                  Edit
                </Link>
              </div>
              <div className="mt-2">
                <button
                  type="button"
                  className="btn btn-danger py-1"
                  onClick={() => onDeletePilot({ id })}
                >
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
      </div>
    </Router>
  );
}

PilotView.propTypes = {
  pilot: PropTypes.shape({
    id: PropTypes.number,
    airline: PropTypes.string,
    company: PropTypes.string,
    photo: PropTypes.string,
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
  }),
};
