import React from "react";
import { ASPilotsPage } from "./ASPilotsPage";

import { Provider } from "react-redux";

//Mock up reduz store
const store = {
  getState: () => {
    return {
      pilots: [],
    };
  },
  subscribe: () => 0, //ignore
};

export default {
  title: "Pages /ASPilotsPage",
  component: ASPilotsPage,
};

const Template = (args) => (
  <Provider store={store}>
    <ASPilotsPage {...args} />
  </Provider>
);

export const AlaskaAirlines = Template.bind({});
