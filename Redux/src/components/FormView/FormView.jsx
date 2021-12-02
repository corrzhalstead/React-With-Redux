import React from "react";
// import PropTypes from "prop-types";

export function FormView({
  firstName,
  lastName,
  fleet,
  seat,
  domicile,
  facility,
  address1,
  address2,
  city,
  state,
  postalCode,
  areaCode,
  prefix,
  suffix,
}) {
  return (
    <>
      <form className="ms-2">
        <div className="form-group">
          <label forhtml="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={firstName}
            required
          />
        </div>
        <div className="form-group">
          <label forhtml="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={lastName}
          />
        </div>
        <div className="form-group">
          <label forhtml="fleet">Fleet</label>
          <input
            type="text"
            className="form-control"
            id="fleet"
            value={fleet}
          />
        </div>
        <div className="form-group">
          <label forhtml="seat">Seat</label>
          <input type="text" className="form-control" id="seat" value={seat} />
        </div>
        <div className="form-group">
          <label forhtml="domicile">Domicile</label>
          <input
            type="text"
            className="form-control"
            id="domicile"
            value={domicile}
          />
        </div>
        <div className="form-group">
          <label forhtml="facility">Training Facility</label>
          <input
            type="text"
            className="form-control"
            id="facility"
            value={facility}
          />
        </div>
        <div className="form-group">
          <label forhtml="address1">Address 1</label>
          <input
            type="text"
            className="form-control"
            id="address1"
            value={address1}
          />
        </div>
        <div className="form-group">
          <label forhtml="address2">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="address2"
            value={address2}
          />
        </div>
        <div className="form-group">
          <label forhtml="city">City</label>
          <input type="text" className="form-control" id="city" value={city} />
        </div>
        <div className="form-group">
          <label forhtml="state">State</label>
          <input
            type="text"
            className="form-control"
            id="state"
            value={state}
          />
        </div>
        <div className="form-group">
          <label forhtml="postalCode">Postal Code</label>
          <input
            type="text"
            className="form-control"
            id="postalCode"
            value={postalCode}
          />
        </div>
        <div className="form-group">
          <label forhtml="areaCode">Area Code</label>
          <input
            type="text"
            className="form-control"
            id="areaCode"
            value={areaCode}
          />
        </div>
        <div className="form-group">
          <label forhtml="prefix">Prefix</label>
          <input
            type="text"
            className="form-control"
            id="prefix"
            value={prefix}
          />
        </div>
        <div className="form-group">
          <label forhtml="suffix">Suffix</label>
          <input
            type="text"
            className="form-control"
            id="suffix"
            value={suffix}
          />
        </div>
      </form>
    </>
  );
}

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
// };
