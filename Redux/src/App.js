import React from "react";
import "../src/styles.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  HeaderView from "./pages/header/index";
import HomePage from "./pages/home/index";
import Footer from "./components/FooterView/FooterView";
import AABidTypesPage from "./pages/american-airlines/bidtypes";

import AAPilotsPage from "./pages/american-airlines/pilots/index";
import ASPilotsPage from "./pages/alaska-airlines/ASPilotsPage";
import FAPilotsPage from "./pages/frontier-airlines/FAPilotsPage";
import UPSPilotsPage from "./pages/ups/UPSPilotsPage";
import AddPilot from "./pilots-redux/AddPilot";


const App = () =>  {

  return (
      <Router>
           <HeaderView />
         
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/american-airlines/bidtypes" component={AABidTypesPage} />
                <Route path="/american-airlines/pilots" component={AAPilotsPage} />
                <Route path="/alaska-airlines/pilots" component={ASPilotsPage} />
                <Route path="/frontier-airlines/pilots" component={FAPilotsPage} />
                <Route path="/ups/pilots" component={UPSPilotsPage} />
                {/* <Route path="/ups/pilots" component={UPSPilotsPage} /> */}

              <Route path="/pilot/add" component={AddPilot} />
              {/* <Route path="/pilot/add" component={AddPilot} /> */}
                {/* <Route path="/pilot/add/ups" component={<AddPilot airline={"UP"} company={"UPS"}/>} /> */}
                   {/* <Route path="/pilot/add/aa" component={<AddPilot airline={"AA"} company={"American Airlines"}/>} /> */}
            </Switch>
            <Footer />
        
      </Router>
  );
 }
 
 export default App;












 




