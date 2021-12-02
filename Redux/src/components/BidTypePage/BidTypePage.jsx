import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { BidTypeListView } from "../BidTypeListView/BidTypeListView";

export function BidTypePage({ bidTypeList }) {
  return (
    <>
      <h1>Bid Types</h1>

      <hr />

      <table>
        <tr className=" grid-container">
          <th className="grid-item mx-2">ID</th>
          <th className="grid-item mx-3">Bid Types</th>
          <th className="grid-item mx-4">Status</th>
          <th className="grid-item me-2">#Bid Periods</th>
          <th className="grid-item ">Last Import</th>
          <th className="grid-item mx-5">
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

        <hr />
        <tbody>
          <tr>
            <td>
              {bidTypeList.map((bidType, index) => (
                <BidTypeListView key={index} {...bidType} />
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

BidTypePage.propTypes = {
  bidTypeList: PropTypes.arrayOf({
    id: PropTypes.number,
    info: PropTypes.string,
    status: PropTypes.string,
    bidPeriods: PropTypes.number,
    lastImport: PropTypes.string,
    isImporting: PropTypes.bool,
  }),
};
