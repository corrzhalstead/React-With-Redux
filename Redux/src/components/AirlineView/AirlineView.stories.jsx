import React from "react";
import { AirlineView } from "./AirlineView";

export default {
  title: "Interactive components/AirlineView",
  component: AirlineView,
};

const Template = (args) => <AirlineView {...args} />;

export const ExampleWithNameAndLink = Template.bind({});
ExampleWithNameAndLink.args = {
  view: {
    name: "American Airlines",
    path: "/american-airlines/bidtypes",
  },
};
