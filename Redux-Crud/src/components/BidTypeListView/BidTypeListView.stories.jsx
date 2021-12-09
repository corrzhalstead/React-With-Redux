import React from "react";
import { BidTypeListView } from "./BidTypeListView";

import * as BidType from "../BidTypeView/BidTypeView.stories";

export default {
  title: "BidType Components/BidTypeListView",
  component: BidTypeListView,
};

const Template = (args) => <BidTypeListView {...args} />;

export const BidTypeList = Template.bind({});
BidTypeList.args = {
  bidTypes: [
    {
      ...BidType.Default.args,
      id: 1,
      info: "CAPTAIN ANC 736",
      status: "Current",
      bidPeriods: 1,
      lastImport: "Nov 1 2017 12:00AM",
      isImporting: false,
    },
    {
      ...BidType.Default.args,
      id: 2,
      info: "CAPTAIN LAX 73G",
      status: "Current",
      bidPeriods: 1,
      lastImport: "Nov 1 2017 12:00AM",
      isImporting: false,
    },
    {
      ...BidType.Default.args,
      id: 3,
      info: "CAPTAIN PDX 73G",
      status: "Current",
      bidPeriods: 1,
      lastImport: "Nov 1 2017 12:00AM",
      isImporting: false,
    },
    {
      ...BidType.Default.args,
      id: 4,
      info: "CAPTAIN SEA 73G",
      status: "Current",
      bidPeriods: 1,
      lastImport: "Nov 1 2017 12:00AM",
      isImporting: false,
    },
    {
      ...BidType.Default.args,
      id: 5,
      info: "FIRST OFFICER ANC 73G",
      status: "Current",
      bidPeriods: 1,
      lastImport: "Nov 1 2017 12:00AM",
      isImporting: false,
    },
    {
      ...BidType.Default.args,
      id: 6,
      info: "FIRST OFFICER LAX 73G",
      status: "Current",
      bidPeriods: 1,
      lastImport: "Nov 1 2017 12:00AM",
      isImporting: false,
    },
  ],
};
