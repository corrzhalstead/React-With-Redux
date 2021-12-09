import React from "react";
import PilotsListView from "../../../components/PilotsListView/index";

export const AAPilotsPage = () => {
  return (
    <>
      <div className="">
        <PilotsListView airline="AA" pilots={[]} />
      </div>
    </>
  );
};

export default AAPilotsPage;
