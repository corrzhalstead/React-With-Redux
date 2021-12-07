import React from "react";
import { FAPilotsPage } from "./FAPilotsPage";

// import PilotsPage from "../../../components/PilotsPage";

import { Provider } from "react-redux";
// import { action } from "@storybook/addon-actions";
// import * as PilotList from "../../../components/PilotsPage.stories";
// import PilotsPage from "../../../components/PilotsPage";

const store = {
  getState: () => {
    return {
      pilots: [],
    };
  },
  subscribe: () => 0, //ignore
  //   dispatch: action("dispatch"),
};

export default {
  title: "Pages /FAPilotsPage",
  component: FAPilotsPage,
};

const Template = (args) => (
  <Provider store={store}>
    <FAPilotsPage {...args} />
  </Provider>
);

export const FrontierAirlines = Template.bind({});
// FrontierAirlines.args = {
//   // airline: "AA",

//   pilots: [
//     {
//       id: 12,
//       airline: "FA",
//       firstName: "Vanessa",
//       lastName: "Mitch",
//       seat: "CPT",
//       fleet: 201,
//       domicile: "STL",
//       photo: "/images/monica-smith.jpeg",
//       trainingFacility: "George State 32/106",
//       company: "Frontier Airlines",
//       address1: "300 Gabriel Ave,",
//       address2: "Suite 230",
//       city: "Phoenix",
//       state: "AZ",
//       postalCode: 78010,
//       areaCode: 825,
//       prefix: 300,
//       suffix: 2031,
//     },
//     {
//       id: 13,
//       airline: "FA",
//       photo: "/images/john-smith.jpeg",
//       firstName: "Arthur",
//       lastName: "Yap",
//       fleet: 200,
//       seat: "ASA",
//       domicile: "SFO",
//       trainingFacility: "Colville State 32/106",
//       company: "Frontier Airlines",
//       address1: "101 Alcona Ave",
//       address2: "Suite 810",
//       city: "San Francisco",
//       state: "CA",
//       postalCode: 94105,
//       areaCode: 258,
//       prefix: 578,
//       suffix: 3250,
//     },
//     {
//       id: 14,
//       airline: "FA",
//       firstName: "Cristy",
//       lastName: "Fermin",
//       fleet: 205,
//       seat: "FOX",
//       domicile: "LAX",
//       photo: "/images/janet-carton.jpeg",
//       trainingFacility: "Acosta State 32/106",
//       company: "Frontier Airlines",
//       address1: "265 Albany Ave,",
//       address2: "Suite 205",
//       city: "Los Angeles",
//       state: "CA",
//       postalCode: 92405,
//       areaCode: 652,
//       prefix: 123,
//       suffix: 2828,
//     },
//     {
//       id: 15,
//       airline: "FA",
//       firstName: "Enrique",
//       lastName: "Gil",
//       fleet: 750,
//       seat: "CPT",
//       domicile: "DFW",
//       photo: "/images/michael-zimber.jpeg",
//       trainingFacility: "Bowden State 32/106",
//       company: "Frontier Airlines",
//       address1: "301 Bordeaux Ave,",
//       address2: "Suite 200",
//       city: "Dallas",
//       state: "TX",
//       postalCode: 72025,
//       areaCode: 625,
//       prefix: 633,
//       suffix: 7890,
//     },
//   ],
// };
