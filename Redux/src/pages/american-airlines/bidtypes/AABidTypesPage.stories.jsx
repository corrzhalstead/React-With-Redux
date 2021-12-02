import React from "react";
import { AABidTypesPage } from "./AABidTypesPage";
// import * as BidList from "../BidTypeListView/BidTypeListView.stories";
// import { BidTypeListView } from "../BidTypeListView/BidTypeListView";

export default {
  title: "Pages /AABidTypesPage",
  component: AABidTypesPage,
};

const Template = (args) => <AABidTypesPage {...args} />;

export const BidTypesInfo = Template.bind({});
// BidTypesInfo.args = {
//   bidTypesList: [
//     {
//       ...BidList.BidTypeList.args,
//     },
//   ],
// };
