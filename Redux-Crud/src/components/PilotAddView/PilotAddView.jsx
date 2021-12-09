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
  const [fleet, setFleet] = useState();
  const [domicile, setDomicile] = useState("");
  const [trainingFacility, setTrainingFacility] = useState("");

  // const [company, setCompany] = useState(company);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState();
  const [areaCode, setAreaCode] = useState();
  const [prefix, setPrefix] = useState();
  const [suffix, setSuffix] = useState();

  const saveButtonClick = (e) => {
    e.preventDefault();
    //Error Checking
    onSavePilot({
      id: 100,
      airline,
      // airline: "AA",
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
    // history.goBack();
  };

  // const addCloseButtonCLicked = () => {
  //   setIsAdding(!isAdding);
  // };
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
              <input
                type="hidden"
                // className="form-control"
                value={company}
                // onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div>
              <img
                src={genPhoto}
                alt="Pilot"
                className="photo rounded-circle"
                hidden
                // onChange={(e) => setPhoto(e.target.value)}
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
              {console.log(firstName, lastName)}
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
            {console.log("onSavePilot: ", onSavePilot)}
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

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Domicile"
                value={domicile}
                onChange={(e) => setDomicile(e.target.value)}
                required
              />
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
            </div>
            {/* <div> */}
            <button
              className="btn btn-primary"
              // type="submit"
              onClick={saveButtonClick}
            >
              Save
            </button>
            {/* </div> */}
            {/* <button
                className={`btn ${isAdding ? "btn-danger" : "btn-primary"}`}
                onClick={addCloseButtonCLicked}
              >
                {isAdding ? "Cancel" : "Add Pilot"}
              </button> */}

            <button className="btn btn-primary ms-3" type="submit">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PilotAddView;

// FormView.propTypes = {
//   firstName: PropTypes.string.isRequired,
//   lastName: PropTypes.string.isRequired,
//   fleet: PropTypes.string.isRequired,
//   seat: PropTypes.number.isRequired,
//   domicile: PropTypes.string.isRequired,
//   facility: PropTypes.string.isRequired,
//   address1: PropTypes.string.isRequired,
//   address2: PropTypes.string,
//   city: PropTypes.string.isRequired,
//   state: PropTypes.string.isRequired,
//   postalCode: PropTypes.number.isRequired,
//   areaCode: PropTypes.number.isRequired,
//   prefix: PropTypes.number.isRequired,
//   suffix: PropTypes.number.isRequired,

// }
