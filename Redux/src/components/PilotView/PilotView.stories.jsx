import React from "react";
import { PilotView } from "./PilotView";

export default {
  title: "Pilot Components/PilotView",
  component: PilotView,
};

const Template = (args) => <PilotView {...args} />;

export const Pilot1 = Template.bind({});
Pilot1.args = {
  id: 1,
  airline: "AA",
  firstName: "John",
  lastName: "Smith",
  fleet: "CPT",
  seat: 737,
  domicile: "GEG",
  photo: "/images/john-smith.jpeg",
  trainingFacility: "Riviera State 32/106",
  company: "Twitter, Inc.",
  address1: "795 Folsom Ave,",
  address2: "Suite 600",
  city: "San Francisco",
  state: "CA",
  postalCode: 94107,
  areaCode: 123,
  prefix: 456,
  suffix: 7890,
};

export const Pilot2 = Template.bind({});
Pilot2.args = {
  id: 2,
  airline: "AA",
  firstName: "Alex",
  lastName: "Johnathan",
  fleet: "CPT",
  seat: 737,
  domicile: "GEG",
  photo: "/images/alex-johnathan.jpeg",
  trainingFacility: "Riviera State 32/106",
  company: "Twitter, Inc.",
  address1: "795 Folsom Ave,",
  address2: "Suite 600",
  city: "San Francisco",
  state: "CA",
  postalCode: 94107,
  areaCode: 123,
  prefix: 456,
  suffix: 7890,
};

export const Pilot3 = Template.bind({});
Pilot3.args = {
  id: 3,
  airline: "AA",
  firstName: "Monica",
  lastName: "Smith",
  fleet: "CPT",
  seat: 737,
  domicile: "GEG",
  photo: "/images/monica-smith.jpeg",
  trainingFacility: "Riviera State 32/106",
  company: "Twitter, Inc.",
  address1: "795 Folsom Ave,",
  address2: "Suite 600",
  city: "San Francisco",
  state: "CA",
  postalCode: 94107,
  areaCode: 123,
  prefix: 456,
  suffix: 7890,
};

export const Pilot4 = Template.bind({});
Pilot4.args = {
  id: 4,
  airline: "AA",
  firstName: "Michael",
  lastName: "Zimber",
  fleet: "FO",
  seat: 737,
  domicile: "GEG",
  photo: "/images/michael-zimber.jpeg",
  trainingFacility: "Riviera State 32/106",
  company: "Twitter, Inc.",
  address1: "795 Folsom Ave,",
  address2: "Suite 600",
  city: "San Francisco",
  state: "CA",
  postalCode: 94107,
  areaCode: 123,
  prefix: 456,
  suffix: 7890,
};

export const Pilot5 = Template.bind({});
Pilot5.args = {
  id: 5,
  airline: "AA",
  firstName: "Sandra",
  lastName: "Smith",
  fleet: "FO",
  seat: 737,
  domicile: "GEG",
  photo: "/images/sandra-smith.jpeg",
  trainingFacility: "Riviera State 32/106",
  company: "Twitter, Inc.",
  address1: "795 Folsom Ave,",
  address2: "Suite 600",
  city: "San Francisco",
  state: "CA",
  postalCode: 94107,
  areaCode: 123,
  prefix: 456,
  suffix: 7890,
};

export const Pilot6 = Template.bind({});
Pilot6.args = {
  id: 6,
  airline: "AA",
  firstName: "Janet",
  lastName: "Carton",
  fleet: "FO",
  seat: 737,
  domicile: "GEG",
  photo: "/images/janet-carton.jpeg",
  trainingFacility: "Riviera State 32/106",
  company: "Twitter, Inc.",
  address1: "795 Folsom Ave,",
  address2: "Suite 600",
  city: "San Francisco",
  state: "CA",
  postalCode: 94107,
  areaCode: 123,
  prefix: 456,
  suffix: 7890,
};
