import React from "react";
import { NavBarView } from "./NavBarView";
import * as AirlineNames from "../NavBarDropDownView/NavBarDropDownView.stories";

export default {
  title: "Components/NavBarView",
  component: NavBarView,
};

const Template = (args) => <NavBarView {...args} />;

export const AirlineDropdown = Template.bind({});
AirlineDropdown.args = {
  airlines: [
    {
      ...AirlineNames.AirlineAndPath.args,
      airlineName: "American Airlines",
      bidTypesPath: "/american-airlines/bidtypes",
      pilotsPath: "/american-airlines/pilots",
    },
    {
      ...AirlineNames.AirlineAndPath.args,
      airlineName: "Alaska Airlines",
      bidTypesPath: "/alaska-airlines/bidtypes",
      pilotsPath: "/alaska-airlines/pilots",
    },
    {
      ...AirlineNames.AirlineAndPath.args,
      airlineName: "Frontier Airlines",
      bidTypesPath: "/frontier-airlines/bidtypes",
      pilotsPath: "/frontier-airlines/pilots",
    },
    {
      ...AirlineNames.AirlineAndPath.args,
      airlineName: "UPS",
      bidTypesPath: "/ups/bidtypes",
      pilotsPath: "/ups/pilots",
    },
  ],
};

// export const Example = Temple.bind({});
// Example.args = {
//   dropDowns: [
//     {
//       airlineName: "Airline 1 Name",
//       bidTypesPath: "/airline1/bidtypes",
//       pilotsPath: "/airline1/pilots",
//     },
//     {
//       airlineName: "Airline 2 Name",
//       bidTypesPath: "/airline2/bidtypes",
//       pilotsPath: "/airline2/pilots",
//     },
//     {
//       airlineName: "Airline 3 Name",
//       bidTypesPath: "/airline3 /bidtypes",
//       pilotsPath: "/airline3/pilots",
//     },
//     {
//       airlineName: "Airline 4 Name",
//       bidTypesPath: "/airline4/bidtypes",
//       pilotsPath: "/airline4/pilots",
//     },
//   ],
// };
