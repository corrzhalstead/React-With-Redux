import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

//action
import { pilotAdded } from "./pilotsSlice";
// import { UPSPilot } from "../pages/ups/UPSPilotsPage"
//function useQuery() {
//const { search } = useLocation();

// return React.useMemo(() => new URLSearchParams(search), [search]);
//}
export function AddPilot({ airline, company }) {
  const history = useHistory();
  //let query = useQuery();
  const dispatch = useDispatch();
  // const { airline } = useParams();

  // const [who, setAirline]= useState(airline);

  // const [airline, setAirline] = useState("AA", "AS", "FA", "UP");
  // const [company, setCompanny] = useState(
  //   "American Airlines",
  //   "Alaska Airlines",
  //   "Frontier Airlines",
  //   "UPS"
  // );
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [seat, setSeat] = useState("");
  const [fleet, setFleet] = useState();
  const [domicile, setDomicile] = useState("");
  const [trainingFacility, setTrainingFacility] = useState("");

  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [areaCode, setAreaCode] = useState("");
  const [prefix, setPrefix] = useState("");
  const [suffix, setSuffix] = useState("");

  const pilotId = useSelector((state) => state.pilots.length);

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleSeat = (e) => setSeat(e.target.value);
  const handleFleet = (e) => setFleet(e.target.value);
  const handleDomicile = (e) => setDomicile(e.target.value);
  const handleTrainingFacility = (e) => setTrainingFacility(e.target.value);
  const handleAddress1 = (e) => setAddress1(e.target.value);
  const handleAddress2 = (e) => setAddress2(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleState = (e) => setState(e.target.value);
  const handlePostalCode = (e) => setPostalCode(e.target.value);
  const handleAreaCode = (e) => setAreaCode(e.target.value);
  const handlePrefix = (e) => setPrefix(e.target.value);
  const handleSuffix = (e) => setSuffix(e.target.value);

  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }
  //console.log("airline: ", query.get("airline"));
  const handleClick = () => {
    // e.preventDefault();
    dispatch(
      pilotAdded({
        id: pilotId,
        airline,
        company,
        firstName,
        lastName,
        seat,
        fleet,
        domicile,
        trainingFacility,
        address1,
        address2,
        city,
        state,
        postalCode,
        areaCode,
        prefix,
        suffix,
      })
    );

    history("/ups/pilots");
    {
      {
        console.log(pilotAdded);
      }
    }

    // dispatch(pilotAdded(new_pilot));
    // if (airline === "AA") {
    //   history("/american-airlines/pilots");
    // } else if (airline === "AS") {
    //   history("/alaska-airlines/pilots");
    // } else if (airline === "FA") {
    //   history("/frontier-airlines/pilots");
    // } else {
    //   history("/ups/pilots");
    // }
  };

  return (
    <>
      <div className="card-form border-0 shadow">
        <h4 className="card-header mt-3">Add Pilot</h4>
        {console.log(airline)}
        <div className="card-body">
          {/* <form onSubmit={(e) => createPilot(e)}> */}
          <form>
            <div className="form-group">
              <input type="hidden" value={airline} />
            </div>
            {/* <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </div> */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                value={firstName}
                // onChange={(e) => setFirstName(e.target.value)}
                onChange={handleFirstName}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={lastName}
                // onChange={(e) => setLastName(e.target.value)}
                onChange={handleLastName}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Seat"
                value={seat}
                // onChange={(e) => setSeat(e.target.value)}
                onChange={handleSeat}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Fleet"
                value={fleet}
                // onChange={(e) => setFleet(e.target.value)}
                onChange={handleFleet}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Domicile"
                value={domicile}
                // onChange={(e) => setDomicile(e.target.value)}
                onChange={handleDomicile}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Training Facility"
                value={trainingFacility}
                // onChange={(e) => setTrainingFacility(e.target.value)}
                onChange={handleTrainingFacility}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Address 1"
                value={address1}
                // onChange={(e) => setAddress1(e.target.value)}
                onChange={handleAddress1}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Address 2"
                value={address2}
                // onChange={(e) => setAddress2(e.target.value)}
                onChange={handleAddress2}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                value={city}
                // onChange={(e) => setCity(e.target.value)}
                onChange={handleCity}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="State"
                value={state}
                // onChange={(e) => setState(e.target.value)}
                onChange={handleState}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Postal Code"
                value={postalCode}
                // onChange={(e) => setPostalCode(e.target.value)}
                onChange={handlePostalCode}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Area Code (123)"
                value={areaCode}
                // onChange={(e) => setAreaCode(e.target.value)}
                onChange={handleAreaCode}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Prefix"
                value={prefix}
                // onChange={(e) => setPrefix(e.target.value)}
                onChange={handlePrefix}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Suffix"
                value={suffix}
                // onChange={(e) => setSuffix(e.target.value)}
                onChange={handleSuffix}
                required
              />
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={pilotAdded}
            >
              Save Pilot
            </button>
            <button
              onClick={handleClick}
              className="btn btn-primary ms-3"
              type="submit"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddPilot;
