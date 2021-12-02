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
      <h1 className="ms-2 mt-3">Bid Types</h1>

      <hr />

      <table>
        <thead>
          <tr className=" grid-container">
            <th className="grid-item ms-2">ID</th>
            <th className="grid-item mx-3">Bid Types</th>
            <th className="grid-item mx-4">Status</th>
            <th className="grid-item me-2">#Bid Periods</th>
            <th className="grid-item ">Last Import</th>
            <th className="grid-item mx-5 text-center">
              <a href="#">
                <FontAwesomeIcon icon={faFilter} size="xs"></FontAwesomeIcon>
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faPlus}
                  size="xs"
                  className="mx-2"
                ></FontAwesomeIcon>
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faSync} size="xs"></FontAwesomeIcon>
              </a>
            </th>
          </tr>
        </thead>
        <hr />
        <tbody>
          <tr>
            <td>
              {bidTypes.map((bidType, index) => (
                <BidTypeView key={index} {...bidType} />
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

// export default AABidTypesPage;
