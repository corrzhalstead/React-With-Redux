// import { faBackward } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useHistory, Link } from "react-router";
import genPhoto from "../../../public/images/gen-photo.png";
// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

// import { useDispatch, useSelector } from "react-redux";

//action
// import { addPilot } from "../redux/pilotsSlice";
// import PropTypes from "prop-types";

export const FormView = ({ airline, onSavePilot }) => {
  // const history = useHistory();
  // const [isAdding, setIsAdding] = useState(false);
  const [firstName, setFirstName] = useState("Corrz");
  const [lastName, setLastName] = useState("Hals");
  //  const [airline, setAirline] = useState("AA");
  const [seat, setSeat] = useState("CPT");
  const [fleet, setFleet] = useState("737");
  const [domicile, setDomicile] = useState("GEG");
  const [trainingFacility, setTrainingFacility] = useState(
    "Riviera State 32/106"
  );
  // const [photo, setPhoto] = useState("");
  const [company, setCompany] = useState("American");
  const [address1, setAddress1] = useState("795 Folsom Ave");
  const [address2, setAddress2] = useState("Suite 600");
  const [city, setCity] = useState("San Francisco");
  const [state, setState] = useState("CA");
  const [postalCode, setPostalCode] = useState(2850);
  const [areaCode, setAreaCode] = useState(509);
  const [prefix, setPrefix] = useState(123);
  const [suffix, setSuffix] = useState(5678);

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
      company: company,
      address1,
      address2,
      city,
      state,
      postalCode: 94107,
      areaCode: 123,
      prefix: 456,
      suffix: 7890,
    });
    // history.goBack();
  };

  // const addCloseButtonCLicked = () => {
  //   setIsAdding(!isAdding);
  // };
  return (
    <>
      {/* <button
        className={`btn ${isAdding ? "btn-danger" : "btn-primary"}`}
        onClick={addCloseButtonCLicked}
      >
        {isAdding ? "Cancel" : "Add Pilot"}
      </button> */}
      <div className="card-form border-0 shadow">
        {/* {!isAdding === false ? (
          "no"
        ) : ( */}
        <div className="card-header mt-3">
          <div className="card-body">
            {/* <form onSubmit={(e) => createPilot(e)}> */}

            <form>
              <div className="form-group">
                <input type="hidden" value={airline} />
              </div>
              <div className="form-group">
                <input
                  type="hidden"
                  className="form-control"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
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
              {console.log(onSavePilot)}
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
        {/* )} */}
      </div>
    </>
  );
};

export default FormView;

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
