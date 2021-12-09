import React from "react";
import { AirlineView } from "./AirlineView";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Interactive components/AirlineView",
  component: AirlineView,
};

const Template = (args) => (
  <Router>
    <AirlineView {...args} />;
  </Router>
);

export const ExampleWithNameAndLink = Template.bind({});
ExampleWithNameAndLink.args = {
  view: {
    name: "American Airlines",
    path: "/american-airlines/bidtypes",
  },
};
