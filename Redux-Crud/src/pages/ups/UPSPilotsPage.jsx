import React from "react";

import PilotsListView from "../../components/PilotsListView/index";

export const UPSPilotsPage = () => {
  return (
    <>
      <div className="">
        <PilotsListView airline="UP" pilots={[]} />
      </div>

      <div className="bottom"></div>
    </>
  );
};

export default UPSPilotsPage;
