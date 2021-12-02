import React from "react";
import PilotView from "../../components/PilotView/index";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { pilotAdded } from "../../pilots-redux/pilotsSlice";

export const ASPilotsPage = () => {
  const pilots = useSelector((state) => state.pilots);

  return (
    <>
      <div className="row mx-5">
        <div className="col-xs-8 col-sm-8 col-lg-8 mx-2">
          <h3 className="text-secondary mt-4">Pilots</h3>
          <nav className="" aria-label="breadcrumb ">
            <ol className="breadcrumb mb-4">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">App Views</a>
              </li>
              <li
                className="breadcrumb-item active flex-grow-1 "
                aria-current="page"
              >
                Contacts
              </li>
              <div className="add col-sm-4 col-md-4 col-lg-4">
                <Link to="/pilot/add/ups">
                  <button
                    className="btn btn-primary ml-auto text-center"
                    //  onClick={pilotAdded}
                  >
                    Create Pilot
                  </button>
                </Link>
              </div>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container card-page">
        {pilots.map((pilot, index) => {
          if (pilot.airline === "UP") {
            return <PilotView key={index} {...pilot} />;
          }
        })}
      </div>
      <div className="bottom"></div>
    </>
  );
};

export default ASPilotsPage;
