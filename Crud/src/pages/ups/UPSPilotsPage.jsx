import React from "react";
// import PilotView from "../../components/PilotView/index";
// import PilotHeader from "../../components/PilotHeader/index";
import PilotsListView from "../../components/PilotsListView/index";

// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { pilotAdded } from "../../pilots-redux/pilotsSlice";

export const UPSPilotsPage = () => {
  // const pilots = useSelector((state) => state.pilots);

  return (
    <>
      {/* <div className="">
        <PilotHeader /> */}

      <div className="container-pilots card-page">
        {/* {pilots.map((pilot, index) => ( */}
        <PilotsListView airline="UP" pilots={[]} />
        {/* ))} */}
      </div>
      {/* </div> */}
      <div className="bottom"></div>
    </>
  );
};

export default UPSPilotsPage;
