import React from "react";
import { PilotsListView } from "./PilotsListView";
import * as PilotList from "../PilotView/PilotView.stories";

export default {
  title: "Pilot Components/PilotsListView",
  component: PilotsListView,
};

const Template = (args) => <PilotsListView {...args} />;

export const PilotsInfo = Template.bind({});
PilotsInfo.args = {
  pilots: [
    {
      ...PilotList.Pilot1.args,
    },
    {
      ...PilotList.Pilot2.args,
    },
    {
      ...PilotList.Pilot3.args,
    },
    {
      ...PilotList.Pilot4.args,
    },
    {
      ...PilotList.Pilot5.args,
    },
    {
      ...PilotList.Pilot6.args,
    },
  ],
};
