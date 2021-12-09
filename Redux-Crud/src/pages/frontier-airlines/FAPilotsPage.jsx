import React from "react";
import PilotsListView from "../../components/PilotsListView/index";

export const FAPilotsPage = () => {
  return (
    <>
      <div>
        <div className="">
          <PilotsListView airline="FA" pilots={[]} />
        </div>
      </div>
    </>
  );
};

export default FAPilotsPage;
