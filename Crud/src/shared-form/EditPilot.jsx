import React from "react";
// import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { FormView } from "../components/FormView/FormView";

//action
import { updatePilot } from "../redux/pilotsSlice";

export const EditFormPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const updateButtonClicked = (id) => {
    id.preventDefault();
    alert(`Update button clicked for id ${id}`);
    dispatch(updatePilot);
  };

  return (
    <>
      <div className="card-form border-0 shadow">
        <h4 className="card-header mt-3">Edit Pilot</h4>
        <FormView />
      </div>

      {/* <Link
        to={`edit/pilot${id}`}
        role="button"
        className="btn btn-primary py-1 px-4"
        onClick={() => updateButtonClicked(id)}
      >
        Edit
      </Link> */}

      <div className="mt-3 ms-5">
        <button
          type="button"
          className="btn-form btn btn-primary py-1 px-4 me-4"
          onClick={() => updateButtonClicked(id)}
        >
          Save
        </button>
        <button type="button" className="btn-form btn btn-primary py-1 px-3">
          Cancel
        </button>
      </div>
    </>
  );
};

export default EditFormPage;
