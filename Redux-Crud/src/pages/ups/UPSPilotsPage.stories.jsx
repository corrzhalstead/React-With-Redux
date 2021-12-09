import React from "react";
import { UPSPilotsPage } from "./UPSPilotsPage";
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
  title: "Pages /UPSPilotsPage",
  component: UPSPilotsPage,
};

const Template = (args) => (
  <Provider store={store}>
    <UPSPilotsPage {...args} />
  </Provider>
);

export const UPS = Template.bind({});
