import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
// import genPhoto from "../../../public/images/gen-photo.png";
import PropTypes from "prop-types";
import PilotView from "../PilotView/index";
import FormView from "../FormView/index";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { selectPilots, deletePilot, addPilot } from "../../redux/pilotsSlice";

export const PilotsListView = ({ airline, company, pilots }) => {
  // const pilots = useSelector((state) => state.pilots);
  const storedPilots = useSelector(selectPilots);

  if (storedPilots && storedPilots.length > 0) {
    pilots = storedPilots.filter((pilot) => pilot.airline === airline);
  }

  const dispatch = useDispatch();
  const events = {
    onDeletePilot: (pilot) => dispatch(deletePilot(pilot)),
  };

  const saveEvent = {
    onSavePilot: (pilot) => dispatch(addPilot(pilot)),
  };

  const [isAdding, setIsAdding] = useState(false);
  const addCloseButtonCLicked = () => {
    setIsAdding(!isAdding);
  };

  return (
    <>
      <Router>
        <div className="container flex-row mt-4">
          <div className="col-xs-8 col-sm-8 col-lg-8 head">
            <h3 className="text-secondary ">Pilots</h3>
            <nav className="" aria-label="breadcrumb ">
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">App Views</Link>
                </li>
                <li
                  className="breadcrumb-item active flex-grow-1 "
                  aria-current="page"
                >
                  Contacts
                </li>
                <div className="add col-sm-4 col-md-4 col-lg-4 ">
                  <button
                    className={`btn ${isAdding ? "btn-danger" : "btn-primary"}`}
                    onClick={addCloseButtonCLicked}
                  >
                    {isAdding ? "Cancel" : "Add Pilot"}
                  </button>
                </div>
              </ol>
            </nav>
          </div>

          <div
            className={`${
              isAdding ? "hidden" : ""
            } container-pilots card-page `}
          >
            {pilots.map((pilot) => {
              return <PilotView key={pilot.id} pilot={pilot} {...events} />;
            })}
          </div>

          <div className={`${isAdding ? "" : "hidden"} w-100 `}>
            <FormView
              airline={airline}
              company={company}
              // isAdding={isAdding}
              // photo={genPhoto}
              {...saveEvent}
            />
          </div>
        </div>
      </Router>
    </>
  );
};

PilotsListView.propTypes = {
  airline: PropTypes.string,
  pilots: PropTypes.arrayOf(PilotView.propTypes.pilot).isRequired,
  //   //   {
  //   id: PropTypes.number,
  //   airline: PropTypes.string,
  //   photo: PropTypes.object,
  //   company: PropTypes.string,
  //   firstName: PropTypes.string.isRequired,
  //   lastName: PropTypes.string.isRequired,
  //   fleet: PropTypes.number.isRequired,
  //   seat: PropTypes.string.isRequired,
  //   domicile: PropTypes.string.isRequired,
  //   trainingFacility: PropTypes.string.isRequired,
  //   address1: PropTypes.string.isRequired,
  //   address2: PropTypes.string,
  //   city: PropTypes.string.isRequired,
  //   state: PropTypes.string.isRequired,
  //   postalCode: PropTypes.number.isRequired,
  //   areaCode: PropTypes.number.isRequired,
  //   prefix: PropTypes.number.isRequired,
  //   suffix: PropTypes.number.isRequired,
  // }),
};

export default PilotsListView;
