import React from "react";
import { BidTypeView } from "./BidTypeView";

export default {
  title: "BidType Components/BidTypeView",
  component: BidTypeView,
};

const Template = (args) => <BidTypeView {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  info: "CAPTAIN ANC 736",
  status: "Current",
  bidPeriods: 1,
  lastImport: "Nov 1 2017 12:00AM",
  isImporting: false,
};

export const Importing = Template.bind({});
Importing.args = {
  ...Default.args,
  status: "Importing",

  isImporting: true,
};
