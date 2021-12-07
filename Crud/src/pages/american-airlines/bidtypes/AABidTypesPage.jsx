import React from "react";
// import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import BidTypeView from "../../../components/BidTypeView/index";

export const AABidTypesPage = () => {
  const bidTypes = [
    {
      id: 1,
      info: "CAPTAIN ANC 736",
      status: "Current",
      bidPeriods: 1,
      lastImport: "Nov 1 2017 12:00AM",
      isImporting: false,
    },
    {
      id: 2,
      info: "CAPTAIN LAX 73G",
      status: "Current",
      bidPeriods: 1,
      lastImport: "Nov 1 2017 12:00AM",
      isImporting: false,
    },
    {
      id: 3,
      info: "CAPTAIN PDX 73G",
      status: "Current",
      bidPeriods: 1,
      lastImport: "Nov 1 2017 12:00AM",
      isImporting: false,
    },
    {
      id: 4,
      info: "CAPTAIN SEA 73G",
      status: "Current",
      bidPeriods: 1,
      lastImport: "Nov 1 2017 12:00AM",
      isImporting: false,
    },
    {
      id: 5,
      info: "FIRST OFFICER ANC 73G",
      status: "Current",
      bidPeriods: 1,
      lastImport: "Nov 1 2017 12:00AM",
      isImporting: false,
    },
    {
      id: 6,
      info: "FIRST OFFICER LAX 73G",
      status: "Current",
      bidPeriods: 1,
      lastImport: "Nov 1 2017 12:00AM",
      isImporting: false,
    },
  ];

  return (
    <>
      <div className="">
        <h1>Bid Types</h1>

        <hr />

        <div className="table-responsive">
          <section className="flex-table">
            <div className="flex-row header mt-3">
              <div className="flex-column">ID</div>
              <div className="flex-column">Bid Types</div>
              <div className="flex-column">Status</div>
              <div className="flex-column">#Bid Periods</div>
              <div className="flex-column">Last Import</div>
              <div className="flex-column">
                <a href="#">
                  <FontAwesomeIcon
                    icon={faFilter}
                    size="xs"
                    className=""
                  ></FontAwesomeIcon>
                </a>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faPlus}
                    size="xs"
                    className="mx-2"
                  ></FontAwesomeIcon>
                </a>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faSync}
                    size="xs"
                    className="me-5"
                  ></FontAwesomeIcon>
                </a>
              </div>
            </div>
          </section>
          <hr />
          <section className="btn-page">
            {bidTypes.map((bidType, index) => (
              <BidTypeView key={index} {...bidType} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

// export default AABidTypesPage;
