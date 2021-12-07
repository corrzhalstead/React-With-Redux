import React from "react";
import "../src/styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderView from "./pages/header/index";
import HomePage from "./pages/home/index";
import Footer from "./components/FooterView/FooterView";
import AABidTypesPage from "./pages/american-airlines/bidtypes";

import AAPilotsPage from "./pages/american-airlines/pilots/AAPilotsPage";
import ASPilotsPage from "./pages/alaska-airlines/ASPilotsPage";
import FAPilotsPage from "./pages/frontier-airlines/FAPilotsPage";
import UPSPilotsPage from "./pages/ups/UPSPilotsPage";
import AddPilot from "./shared-form/AddPilot";
// import * as PilotList from "./components/PilotView/PilotView.stories";

const App = () => {
  return (
    <Router>
      <HeaderView />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/american-airlines/bidtypes">
          <AABidTypesPage />
        </Route>
        <Route path="/american-airlines/pilots">
          <AAPilotsPage pilots={[]} />
        </Route>
        <Route path="/alaska-airlines/pilots">
          <ASPilotsPage pilots={[]} />
        </Route>
        <Route path="/frontier-airlines/pilots">
          <FAPilotsPage pilots={[]} />
        </Route>
        <Route path="/ups/pilots">
          <UPSPilotsPage pilots={[]} />
        </Route>

        {/* <Route path="/ups/pilots" component={UPSPilotsPage} /> */}

        <Route path="/pilot/add">
          <AddPilot />
        </Route>
        {/* <Route path="/pilot/add" component={AddPilot} />
        <Route path="/pilot/add" component={AddPilot} /> */}
        {/* <Route path="/pilot/add" component={AddPilot} /> */}
        {/* <Route path="/pilot/add/ups" component={<AddPilot airline={"UP"} company={"UPS"}/>} /> */}
        {/* <Route path="/pilot/add/aa" component={<AddPilot airline={"AA"} company={"American Airlines"}/>} /> */}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
