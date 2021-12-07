import React from "react";
import PilotsListView from "../../components/PilotsListView/index";
// import { useSelector } from "react-redux";
// import { PilotHeader } from "../header/PilotHeader";
// import PilotHeader from "../../components/PilotHeader/index";

export const ASPilotsPage = () => {
  //  const pilots = useSelector((state) => state.pilots);

  return (
    <>
      {/* <div className="container"> */}
      {/* <div className="">
        <PilotHeader />
      </div> */}

      <div className="">
        <PilotsListView airline="AS" pilots={[]} />
      </div>
    </>
  );
};

export default ASPilotsPage;
