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
import PilotEditView from "./components/PilotEditView/PilotEditView";

const App = () => {
  return (
    <Router>
      <HeaderView />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/american-airlines/bidtypes" component={AABidTypesPage} />
        <Route path="/american-airlines/pilots" component={AAPilotsPage} />
        <Route path="/alaska-airlines/pilots" component={ASPilotsPage} />
        <Route path="/frontier-airlines/pilots" component={FAPilotsPage} />
        <Route path="/ups/pilots" component={UPSPilotsPage} />
        <Route exact path="/edit/pilot/:id" component={PilotEditView} />
        {/* <Route path="/edit/pilot">
          <PilotEditView />
        </Route> */}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
