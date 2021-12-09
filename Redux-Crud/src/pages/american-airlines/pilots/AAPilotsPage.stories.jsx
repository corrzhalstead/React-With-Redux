import React from "react";
import { AAPilotsPage } from "./AAPilotsPage";
// import PilotsPage from "../../../components/PilotsPage";

// import { store } from "../../../redux/store";

import { Provider } from "react-redux";
// import { action } from "@storybook/addon-actions";
// import * as PilotList from "../../../components/PilotsPage.stories";
// import PilotsPage from "../../../components/PilotsPage";

//Mock up redux store
const store = {
  getState: () => {
    return {
      pilots: [],
    };
  },
  subscribe: () => 0, //ignore
  // dispatch: action("dispatch"),
};

export default {
  title: "Pages /AAPilotsPage",
  component: AAPilotsPage,
};

const Template = (args) => (
  <Provider store={store}>
    <AAPilotsPage {...args} />
  </Provider>
);
export const AmericanAirlines = Template.bind({});
