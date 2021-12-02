import React from "react";
import AdministrationView from "../../components/AdministrationView/index";
import VersionView from "../../components/VersionView/index";
import AirlineView from "../../components/AirlineView/index";

export const HomePage = () => {
  return (
    <>
      <div className="jumbotron">
        <section className="row ">
          <AdministrationView name="Tom Jones!" />
          <VersionView current="1.1.0" />
        </section>
      </div>

      <div className="row ms-5 view">
        <div className="col-md-6">
          <AirlineView
            name="American Airlines"
            path="/american-airlines/bidtypes"
          />
        </div>
        <div className="col-md-6">
          <AirlineView
            name="Alaska Airlines"
            path="/alaska-airlines/bidtypes"
          />
        </div>
      </div>
      <div className="row ms-5 view">
        <div className="col-md-6">
          <AirlineView
            name="Frontier Airlines"
            path="/frontier-airlines/bidtypes"
          />
        </div>
        <div className="col-md-6">
          <AirlineView name="UPS" path="/ups/bidtypes" />
        </div>
      </div>
    </>
  );
};

// export default HomePage;
