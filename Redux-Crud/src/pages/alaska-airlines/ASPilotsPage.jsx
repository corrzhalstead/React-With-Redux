import React from "react";
import PilotsListView from "../../components/PilotsListView/index";

export const ASPilotsPage = () => {
  return (
    <>
      <div className="">
        <PilotsListView airline="AS" company="Alaska Airlines" pilots={[]} />
      </div>
    </>
  );
};

export default ASPilotsPage;
