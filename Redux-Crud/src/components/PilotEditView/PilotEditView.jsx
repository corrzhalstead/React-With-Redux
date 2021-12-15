import React, { useState } from "react";
import { useSelector } from "react-redux";
import genPhoto from "../../../public/images/gen-photo.png";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updatePilot } from "../../redux/pilotsSlice";

export const PilotEditView = ({ airline }) => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const pilot = useSelector((state) =>
    state.pilots.pilots.find((pilot) => pilot.id == id)
  );

  const [firstName, setFirstName] = useState(pilot.firstName);
  const [lastName, setLastName] = useState(pilot.lastName);
  const [seat, setSeat] = useState(pilot.seat);
  const [fleet, setFleet] = useState(pilot.fleet);
  const [domicile, setDomicile] = useState(pilot.domicile);
  const [trainingFacility, setTrainingFacility] = useState(
    pilot.trainingFacility
  );
  const [company, setCompany] = useState(pilot.company);
  const [city, setCity] = useState(pilot.city);
  const [state, setState] = useState(pilot.state);
  const [address1, setAddress1] = useState(pilot.address1);
  const [address2, setAddress2] = useState(pilot.address2);
  const [postalCode, setPostalCode] = useState(pilot.postalCode);
  const [areaCode, setAreaCode] = useState(pilot.areaCode);
  const [prefix, setPrefix] = useState(pilot.prefix);
  const [suffix, setSuffix] = useState(pilot.suffix);
  const [error, setError] = useState("");

  const updateButtonClicked = (e) => {
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

      if (firstName && lastName) {
        dispatch(
          updatePilot({
            id: pilot.id,
            airline,
            firstName: firstName,
            lastName: lastName,
            photo: genPhoto,
            fleet: fleet,
            seat: seat,
            domicile: domicile,
            trainingFacility: trainingFacility,
            company: company,
            address1: address1,
            address2: address2,
            city: city,
            state: state,
            postalCode: postalCode,
            areaCode: areaCode,
            prefix: prefix,
            suffix: suffix,
          })
        );
        history.goBack();
      }
    }
  };

  return (
    <>
      <div className="card-form border-0 shadow">
        <h4 className="card-header mt-3">Edit Pilot</h4>
        <div className="card-body">
          <form onSubmit={(e) => updateButtonClicked(e)}>
            <div className="form-group">
              <input type="hidden" value={airline} />
            </div>
            <div className="form-group">
              <input
                type="hidden"
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
              <span className="error">{error}</span>
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Seat"
                value={seat}
                onChange={(e) => setSeat(e.target.value)}
                required
              />
              <span className="error">{error}</span>
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
              <span className="error">{error}</span>
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
              <span className="error">{error}</span>
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
              <span className="error">{error}</span>
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
              <span className="error">{error}</span>
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
              <span className="error">{error}</span>
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
              <span className="error">{error}</span>
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
              <span className="error">{error}</span>
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
              <span className="error">{error}</span>
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
              <span className="error">{error}</span>
            </div>

            <button className="btn btn-primary" onClick={updateButtonClicked}>
              Save
            </button>

            <button className="btn btn-primary ms-3" type="submit">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PilotEditView;
