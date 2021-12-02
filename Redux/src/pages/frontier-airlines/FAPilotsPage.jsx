import React from "react";
import PilotView from "../../components/PilotView/index";
import { useSelector } from "react-redux";
import { PilotHeader } from "../header/PilotHeader";

const ASPilotsPage = () => {
  const pilots = useSelector((state) => state.pilots);

  return (
    <>
      <div className="">
        <PilotHeader />
      </div>
      <div>
        <div className="container card-page">
          {pilots.map((pilot, index) => {
            if (pilot.airline === "FA") {
              return <PilotView key={index} {...pilot} />;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default ASPilotsPage;

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
