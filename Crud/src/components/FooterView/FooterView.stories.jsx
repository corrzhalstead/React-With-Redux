import React from "react";
import { FooterView } from "./FooterView";

export default {
  title: "Components/FooterView",
  component: FooterView,
  // decorators: [story => <Footer>{story()}</Footer>]
};

const Template = () => <FooterView />;
export const Example = Template.bind({});
