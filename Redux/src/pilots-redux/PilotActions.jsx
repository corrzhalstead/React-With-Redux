export const CREATE_PILOTS = "CREATE_PILOTS";
export const GET_PILOTS = "GET_PILOTS";
export const UPDATE_PILOTS = "UPDATE_PILOTS";
export const DELETE_PILOTS = "DELETE_PILOTS";
export const SELECT_PILOTS = "SELECT_PILOTS";
export const CLEAR_PILOTS = "CLEAR_PILOTS";
export const DELETE_SELECTED_PILOTS = "DELETE_SELECTED_PILOTS";

// add PILOTS action
export const addPilot = (pilot) => ({
  type: CREATE_PILOTS,
  payload: pilot,
});

// get PILOTS id
export const getPilots = (id) => ({
  type: GET_PILOTS,
  payload: id,
});

// update PILOTS
export const updatePilot = (pilot) => ({
  type: UPDATE_PILOTS,
  payload: pilot,
});

// delete PILOTS
export const deletePilot = (id) => ({
  type: DELETE_PILOTS,
  payload: id,
});

// // select all PILOTS
// export const selectAllPILOTS = (id) => ({
//   type: SELECT_PILOTS,
//   payload: id,
// });

// // delete all PILOTS
// export const deleteAllPILOTS = () => ({
//   type: DELETE_SELECTED_PILOTS,
// });

// // clear selected PILOTS
// export const clearAllPILOTS = () => ({
//   type: CLEAR_PILOTS,
// });
