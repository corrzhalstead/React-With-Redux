import React from "react";
import { BidTypeButtonsView } from "./BidTypeButtonsView";

export default {
  title: "BidType Components/BidTypeButtonsView",
  component: BidTypeButtonsView,
};

const Template = (args) => <BidTypeButtonsView {...args} />;

export const Buttons = Template.bind({});
Buttons.args = {
  id: 1,
  isImporting: false,
};

export const Imported = Template.bind({});
Imported.args = {
  id: 1,
  isImporting: true,
};
