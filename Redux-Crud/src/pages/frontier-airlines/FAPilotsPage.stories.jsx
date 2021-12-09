import React from "react";
import { FAPilotsPage } from "./FAPilotsPage";

import { Provider } from "react-redux";

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
  title: "Pages /FAPilotsPage",
  component: FAPilotsPage,
};

const Template = (args) => (
  <Provider store={store}>
    <FAPilotsPage {...args} />
  </Provider>
);

export const FrontierAirlines = Template.bind({});
