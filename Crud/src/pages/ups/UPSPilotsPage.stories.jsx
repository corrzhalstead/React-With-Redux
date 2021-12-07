import React from "react";
import { UPSPilotsPage } from "./UPSPilotsPage";

// // import PilotsPage from "../../../components/PilotsPage";

// import { store } from "../../redux/store";
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
  title: "Pages /UPSPilotsPage",
  component: UPSPilotsPage,
};

const Template = (args) => (
  <Provider store={store}>
    <UPSPilotsPage {...args} />
  </Provider>
);

export const UPS = Template.bind({});
// // UPS.args = {
// //   airline: "UPS",
// //   pilots: [
// //     {
// //       id: 1,
// //       airline: "AA",
// //       photo: "/images/john-smith.jpeg",
// //       firstName: "John",
// //       lastName: "Smith",
// //       fleet: 737,
// //       seat: "CPT",
// //       domicile: "GEG",
// //       trainingFacility: "Riviera State 32/106",
// //       company: "American Airlines",
// //       address1: "795 Folsom Ave",
// //       address2: "Suite 600",
// //       city: "San Francisco",
// //       state: "CA",
// //       postalCode: 94107,
// //       areaCode: 123,
// //       prefix: 456,
// //       suffix: 7890,
// //     },

// //     {
// //       id: 2,
// //       airline: "AA",
// //       firstName: "Alex",
// //       lastName: "Johnathan",
// //       fleet: 738,
// //       seat: "CPT",
// //       domicile: "GEG",
// //       photo: "/images/alex-johnathan.jpeg",
// //       trainingFacility: "Riviera State 32/106",
// //       company: "American Airlines",
// //       address1: "728 Malcom Ave,",
// //       address2: "Suite 100",
// //       city: "San Diego",
// //       state: "CA",
// //       postalCode: 92025,
// //       areaCode: 256,
// //       prefix: 435,
// //       suffix: 2860,
// //     },
// //     {
// //       id: 3,
// //       airline: "AA",
// //       firstName: "Monica",
// //       lastName: "Smith",
// //       fleet: 435,
// //       seat: "CPT",
// //       domicile: "LAX",
// //       photo: "/images/monica-smith.jpeg",
// //       trainingFacility: "Montana State 32/106",
// //       company: "American Airlines",
// //       address1: "256 Colton Ave,",
// //       address2: "Suite 500",
// //       city: "Los Angeles",
// //       state: "CA",
// //       postalCode: 90010,
// //       areaCode: 506,
// //       prefix: 258,
// //       suffix: 7777,
// //     },
// //     {
// //       id: 4,
// //       airline: "AA",
// //       firstName: "Michael",
// //       lastName: "Zimber",
// //       fleet: 200,
// //       seat: "FOX",
// //       domicile: "LAX",
// //       photo: "/images/michael-zimber.jpeg",
// //       trainingFacility: "Angeles State 32/106",
// //       company: "American Airlines",
// //       address1: "320 London Ave,",
// //       address2: "Suite 500",
// //       city: "Los Angeles",
// //       state: "CA",
// //       postalCode: 90010,
// //       areaCode: 503,
// //       prefix: 200,
// //       suffix: 6262,
// //     },
// //     {
// //       id: 5,
// //       airline: "AA",
// //       firstName: "Sandra",
// //       lastName: "Smith",
// //       fleet: 701,
// //       seat: "FOX",
// //       domicile: "LAX",
// //       photo: "/images/sandra-smith.jpeg",
// //       trainingFacility: "Angeles State 32/106",
// //       company: "American Airlines",
// //       address1: "101 Peter Ave,",
// //       address2: "Suite 200",
// //       city: "Los Angeles",
// //       state: "CA",
// //       postalCode: 90010,
// //       areaCode: 250,
// //       prefix: 958,
// //       suffix: 8263,
// //     },
// //     {
// //       id: 6,
// //       airline: "AA",
// //       firstName: "Janet",
// //       lastName: "Carton",
// //       fleet: 300,
// //       seat: "FOX",
// //       domicile: "LAX",
// //       photo: "/images/janet-carton.jpeg",
// //       trainingFacility: "Lisbon State 32/106",
// //       company: "American Airlines",
// //       address1: "300 Grande Ave,",
// //       address2: "Suite 301",
// //       city: "San Francisco",
// //       state: "CA",
// //       postalCode: 92010,
// //       areaCode: 556,
// //       prefix: 321,
// //       suffix: 6543,
// //     },
// //   ],
// // };
