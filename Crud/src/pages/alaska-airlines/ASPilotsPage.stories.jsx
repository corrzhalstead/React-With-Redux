import React from "react";
import { ASPilotsPage } from "./ASPilotsPage";
// import PilotsPage from "../../../components/PilotsPage";

import { Provider } from "react-redux";
// import { action } from "@storybook/addon-actions";
// import * as PilotList from "../../../components/PilotsPage.stories";
// import PilotsPage from "../../../components/PilotsPage";

//Mock up reduz store
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
  title: "Pages /ASPilotsPage",
  component: ASPilotsPage,
};

const Template = (args) => (
  <Provider store={store}>
    <ASPilotsPage {...args} />
  </Provider>
);

export const AlaskaAirlines = Template.bind({});
AlaskaAirlines.args = {
  airline: "AA",
};
// AlaskaAirlines.args = {
//   airline: "AA",
//   pilots: [
//     {
//       id: 7,
//       airline: "AS",
//       firstName: "Janice",
//       lastName: "Mitchell",
//       fleet: 215,
//       seat: "VGA",
//       domicile: "LAX",
//       photo: "/images/janet-carton.jpeg",
//       trainingFacility: "Nevada State 32/106",
//       company: "Alaska Airlines",
//       address1: "101 Joseph Ave,",
//       address2: "Suite 310",
//       city: "Los Angeles",
//       state: "CA",
//       postalCode: 92001,
//       areaCode: 528,
//       prefix: 523,
//       suffix: 2626,
//     },
//     {
//       id: 8,
//       airline: "AS",
//       firstName: "Samantha",
//       lastName: "Gabul",
//       fleet: 295,
//       seat: "ANA",
//       domicile: "GEG",
//       photo: "/images/sandra-smith.jpeg",
//       trainingFacility: "Stevens State 32/106",
//       company: "Alaska Airlines",
//       address1: "120 Murphy Ave,",
//       address2: "Suite 300",
//       city: "Spokane",
//       state: "WA",
//       postalCode: 99210,
//       areaCode: 509,
//       prefix: 123,
//       suffix: 4567,
//     },
//     {
//       id: 9,
//       airline: "AS",
//       firstName: "Joshua",
//       lastName: "Miller",
//       fleet: 900,
//       seat: "FOX",
//       domicile: "DFW",
//       photo: "/images/michael-zimber.jpeg",
//       trainingFacility: "George State 32/106",
//       company: "Alaska Airlines",
//       address1: "200 Division Ave,",
//       address2: "Suite 501",
//       city: "Dallas",
//       state: "TX",
//       postalCode: 75034,
//       areaCode: 259,
//       prefix: 633,
//       suffix: 7890,
//     },
//     {
//       id: 10,
//       airline: "AS",
//       firstName: "Alexis",
//       lastName: "Johnson",
//       fleet: 900,
//       seat: "AIH",
//       domicile: "DFW",
//       photo: "/images/alex-johnathan.jpeg",
//       trainingFacility: "Michael State 32/106",
//       company: "Alaska Airlines",
//       address1: "201 Hungary Ave,",
//       address2: "Suite 100",
//       city: "Dallas",
//       state: "TX",
//       postalCode: 75100,
//       areaCode: 355,
//       prefix: 456,
//       suffix: 1212,
//     },
//     {
//       id: 11,
//       airline: "AS",
//       photo: "/images/john-smith.jpeg",
//       firstName: "Jackson",
//       lastName: "Bills",
//       fleet: 235,
//       seat: "ASA",
//       domicile: "SFO",
//       trainingFacility: "Montana State 32/106",
//       company: "Alaska Airlines",
//       address1: "250 Nevada Ave",
//       address2: "Suite 200",
//       city: "San Francisco",
//       state: "CA",
//       postalCode: 94110,
//       areaCode: 502,
//       prefix: 234,
//       suffix: 7890,
//     },
//   ],
// };
