import React, { useState } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, NavLink, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
// import { editPilot } from "../../redux/pilotsSlice";
// import { useDispatch } from "react-redux";
// import PilotAddView from "../PilotAddView/index";
// import FormView from "../FormView/FormView";

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
  updateButtonClicked,
  // onEditPilot,
}) {
  // const deletedPilot = (id) => {
  //   alert(`Are you sure you want to delete this pilot ${id}? `);
  //   dispatch(deletePilot(id));
  // };

  // const dispatch = useDispatch();
  // const events = {
  //   onEditPilot: (pilot) => dispatch(editPilot(pilot)),
  // };

  // const saveEvent = {
  //   onSavePilot: (pilot) => dispatch(editPilot(pilot)),
  // };

  // const [isEditing, setIsEditing] = useState(false);
  // const editButtonClicked = () => {
  //   setIsEditing(!isEditing);
  // };
  // let history = useHistory();
  return (
    <>
      <Router>
        {/* <div className={`${isEditing ? "hidden" : ""}`}> */}
        <div className="pilot" key={id}>
          <div className="card mb-3 ms-1 text-secondary">
            <div className="row g-1">
              <div className="col col-md-4  text-center">
                <img src={photo} alt="Pilot" className="photo rounded-circle" />

                <div className="mt-2 pilotTag">
                  {seat} {fleet} {domicile}
                </div>
                <div className="mt-3">
                  <NavLink
                    to={`/edit/pilot/${id}`}
                    className="btn btn-primary py-1 px-4"
                    // onClick={updateButtonClicked}
                  >
                    Edit
                  </NavLink>

                  {/* <button
                  type="button"
                  className="btn btn-primary py-1 px-4 "
                  onClick={() => history.push(`/edit/pilot/${id}`)}
                >
                  Edit
                </button> */}
                  {/* // onClick={(e) => onEditPilot({ id }, e.preventDefault())}
                // onClick={editButtonClicked}
                // onClick="window.location='/edit/pilot' " */}
                </div>
                <div className="mt-1">
                  <button
                    type="button"
                    className="btn btn-danger py-1 "
                    onClick={() => {
                      onDeletePilot({ id });
                      alert(
                        `Are you sure you want to delete this pilot ${id}? `
                      );
                    }}
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
        {/* <div
          className={`${isEditing ? "" : "hidden"} 
            w-100 `}
        >
          <PilotAddView
            airline={airline}
            editButtonClicked={editButtonClicked}
            // company={pilots && pilots[0].company}
            // isAdding={isAdding}
            // photo={genPhoto}
            {...saveEvent}
          />
        </div>
      </div> */}
      </Router>
    </>
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
