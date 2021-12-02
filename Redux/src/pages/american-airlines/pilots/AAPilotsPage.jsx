import React, { useState } from "react";
import PilotView from "../../../components/PilotView/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { pilotAdded } from "../../../pilots-redux/pilotsSlice";

export const AAPilotsPage = () => {
  const pilots = useSelector((state) => state.pilots);
  const [airline] = useState("AA");

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
                {/* <Link to="/pilot/add/"> */}
                <Link to={`/pilot/add/${airline}`}>
                  <button
                    className="btn btn-primary ml-auto text-center"
                    onClick={pilotAdded}
                  >
                    Create Pilot
                  </button>
                </Link>
              </div>
            </ol>
          </nav>
        </div>
      </div>
      <div>
        <div className="container card-page ">
          {pilots.map((pilot, index) => {
            if (pilot.airline === "AA") {
              return <PilotView key={index} {...pilot} />;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default AAPilotsPage;

//REDUX

// import React from "react";
// import { Link } from "react-router-dom";

// import {useSelector} from "react-redux";
// import {selectCount} from "../../redux/counterSlice";

// const AAPilotsPage = () => {

//     const count = useSelector(selectCount);

//     return (
//     <>

//         <h1>American Airlines Pilots </h1>
//         <h2>Count: {count} </h2>
//         <Link to="/">Home</Link>
//     </>
//     )
// };

// export default AAPilotsPage;
