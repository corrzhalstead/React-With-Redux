import React from "react";
import { PilotEditView } from "./PilotEditView";
import { Provider } from "react-redux";

// Mock up redux store
const store = {
  getState: () => {
    return {
      pilots: [],
    };
  },
  subscribe: () => 0, //ignore
};

export default {
  title: "Pilot Components/PilotEditView",
  component: PilotEditView,
};

const Template = (args) => (
  <Provider store={store}>
    <PilotEditView {...args} />
  </Provider>
);

export const EditForm = Template.bind({});
