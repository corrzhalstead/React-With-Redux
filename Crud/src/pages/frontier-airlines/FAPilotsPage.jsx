import React from "react";
// import PilotView from "../../components/PilotView/index";
// import { useSelector } from "react-redux";
// import PilotHeader from "../../components/PilotHeader/index";
import PilotsListView from "../../components/PilotsListView/index";

export const FAPilotsPage = () => {
  // const pilots = useSelector((state) => state.pilots);

  return (
    <>
      {/* <div className="">
        <PilotHeader /> */}

      <div>
        <div className="container-pilots card-page">
          {/* {pilots.map((pilot, index) => ( */}
          <PilotsListView airline="FA" pilots={[]} />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default FAPilotsPage;
