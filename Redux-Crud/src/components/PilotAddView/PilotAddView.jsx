import React, { useState } from "react";
import genPhoto from "../../../public/images/gen-photo.png";

export const PilotAddView = ({
  airline,
  company,
  onSavePilot,
  addCloseButtonCLicked,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [seat, setSeat] = useState("");
  const [fleet, setFleet] = useState("");
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
  const [error, setError] = useState("");

  const saveButtonClick = (e) => {
    e.preventDefault();
    let errorCheck = false;

    if (
      firstName.length < 1 ||
      lastName.length < 1 ||
      fleet.length < 1 ||
      seat.length < 1 ||
      domicile.length < 1 ||
      address1.length < 1 ||
      address2.length < 1 ||
      city.length < 1 ||
      state.length < 1 ||
      postalCode.length < 1 ||
      areaCode.length < 1 ||
      prefix.length < 1 ||
      suffix.length < 1
    ) {
      setError("Please fill out this field.");
      errorCheck = false;
    } else {
      errorCheck === true;

      onSavePilot({
        id: 100,
        airline,
        photo: genPhoto,
        firstName,
        lastName,
        fleet,
        seat,
        domicile,
        trainingFacility,
        company,
        address1,
        address2,
        city,
        state,
        postalCode,
        areaCode,
        prefix,
        suffix,
      });
      addCloseButtonCLicked();
      setFirstName("");
      setLastName("");
      setSeat("");
      setFleet("");
      setDomicile("");
      setTrainingFacility("");
      setAddress1("");
      setAddress2("");
      setCity("");
      setState("");
      setPostalCode("");
      setAreaCode("");
      setPrefix("");
      setSuffix("");
      setError("");
    }
  };

  return (
    <>
      <div className="card-form border-0 shadow">
        <h4 className="card-header mt-3">Add Pilot</h4>
        <div className="card-body">
          <form>
            <div className="form-group">
              <input type="hidden" value={airline} />
            </div>
            <div className="form-group">
              <input type="hidden" value={company} />
            </div>

            <div>
              <img
                src={genPhoto}
                alt="Pilot"
                className="photo rounded-circle"
                hidden
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <span className="error">{error}</span>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <span className="error">{error}</span>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Seat"
                value={seat}
                onChange={(e) => setSeat(e.target.value)}
                required
              />
            </div>
            <span className="error">{error}</span>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Fleet"
                value={fleet}
                onChange={(e) => setFleet(e.target.value)}
                required
              />
            </div>

            <span className="error">{error}</span>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Domicile"
                value={domicile}
                onChange={(e) => setDomicile(e.target.value)}
                required
              />
              <span className="error ">{error}</span>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Training Facility"
                value={trainingFacility}
                onChange={(e) => setTrainingFacility(e.target.value)}
                required
              />
              <span className="error">{error}</span>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Address 1"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                required
              />
              <span className="error ">{error}</span>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Address 2"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
              <span className="error ">{error}</span>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
              <span className="error ">{error}</span>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Postal Code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />
              <span className="error ">{error}</span>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Area Code (123)"
                value={areaCode}
                onChange={(e) => setAreaCode(e.target.value)}
                required
              />
              <span className="error ">{error}</span>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Prefix"
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                required
              />
              <span className="error ">{error}</span>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Suffix"
                value={suffix}
                onChange={(e) => setSuffix(e.target.value)}
                required
              />
              <span className="error ">{error}</span>
            </div>

            <button className="btn btn-primary" onClick={saveButtonClick}>
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PilotAddView;
