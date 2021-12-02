import React from "react";
import { BidTypePage } from "./BidTypePage";
import * as BidList from "../BidTypeListView/BidTypeListView.stories";
// import { BidTypeListView } from "../BidTypeListView/BidTypeListView";

export default {
  title: "BidType Components/BidTypePage",
  component: BidTypePage,
};

const Template = (args) => <BidTypePage {...args} />;

export const BidTypesInfo = Template.bind({});
BidTypesInfo.args = {
  bidTypeList: [
    {
      ...BidList.BidTypeList.args,
    },
  ],
};
