import React from "react";
import { HeaderView } from "./HeaderView";
import { LogoView } from "../LogoView/LogoView";
import * as Airlines from "../NavBarView/NavBarView.stories";

export default {
  title: "Components/HeaderView",
  component: HeaderView,
};

const Template = (args) => <HeaderView {...args} />;

export const DropdownSection = Template.bind({});
DropdownSection.args = {
  logoView: <LogoView />,
  navbarView: [
    {
      ...Airlines.AirlineDropdown.args,
      airlineName: "American Airlines",
      bidTypesPath: "/american-airlines/bidtypes",
      pilotsPath: "/american-airlines/pilots",
    },
    {
      ...Airlines.AirlineDropdown.args,
      airlineName: "Alaska Airlines",
      bidTypesPath: "/alaska-airlines/bidtypes",
      pilotsPath: "/alaska-airlines/pilots",
    },
    {
      ...Airlines.AirlineDropdown.args,
      airlineName: "Frontier Airlines",
      bidTypesPath: "/frontier-airlines/bidtypes",
      pilotsPath: "/frontier-airlines/pilots",
    },
    {
      ...Airlines.AirlineDropdown.args,
      airlineName: "UPS",
      bidTypesPath: "/ups/bidtypes",
      pilotsPath: "/ups/pilots",
    },
  ],
};
