import React from "react";
import { HomePage } from "./HomePage";
// import { AdministrationView } from "../AdministrationView/AdministrationView";
// import { VersionView } from "../VersionView/VersionView";
// import { LogoView } from "../LogoView/LogoView";
// import { FooterView } from "../FooterView/FooterView";

export default {
  title: "Pages /HomePage",
  component: HomePage,
};

const Template = (args) => <HomePage {...args} />;
export const HomeViewPage = Template.bind({});

// export const HomeViewPage = Template.bind({});
// HomeViewPage.args = {
//   administrationView: <AdministrationView name="Tom Jones!" />,
//   versionView: <VersionView current="1.1.0" />,
//   airlineView: [
//     {
//       name: "American Airlines",
//       path: "/american-airlines/bidtypes",
//     },

//     {
//       name: "Frontier Airlines",
//       path: "/frontier-airlines/bidtypes",
//     },
//     {
//       name: "Alaska Airlines",
//       path: "/alaska-airlines/bidtypes",
//     },
//     {
//       name: "UPS",
//       path: "/ups/bidtypes",
//     },
//   ],

// logoView: <LogoView />,
// navbarView: [
//   {
//     airlineName: "American Airlines",
//     bidTypesPath: "/american-airlines/bidtypes",
//     pilotsPath: "/american-airlines/pilots",
//   },
//   {
//     airlineName: "Alaska Airlines",
//     bidTypesPath: "/alaska-airlines/bidtypes",
//     pilotsPath: "/alaska-airlines/pilots",
//   },
//   {
//     airlineName: "Frontier Airlines",
//     bidTypesPath: "/frontier-airlines/bidtypes",
//     pilotsPath: "/frontier-airlines/pilots",
//   },
//   {
//     airlineName: "UPS",
//     bidTypesPath: "/ups/bidtypes",
//     pilotsPath: "/ups/pilots",
//   },
// ],

// footerView: <FooterView />,
// };
