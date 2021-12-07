// import React, { useState } from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";
// // import { addPilot } from "../../redux/pilotsSlice";

// // import { deletePilot } from "../../pilots-redux/pilotsSlice";
// // import { useDispatch } from "react-redux";

// export function PilotHeader() {
//   const [isAdding, setIsAdding] = useState(false);
//   // const dispatch = useDispatch();

//   // const updateButtonClicked = (id) => {
//   //   alert(`Update button clicked for id ${id}`);
//   // };

//   const addCloseButtonCLicked = () => {
//     setIsAdding(!isAdding);
//   };

//   return (
//     <>
//       <Router>
//         <div className="container bg-white row">
//           <div className="col-xs-8 col-sm-8 col-lg-8 flex-grow-1 ms-5">
//             <h3 className="text-secondary ">Pilots</h3>
//             <nav className="" aria-label="breadcrumb ">
//               <ol className="breadcrumb mb-4">
//                 <li className="breadcrumb-item">
//                   <Link to="#">Home</Link>
//                 </li>
//                 <li className="breadcrumb-item">
//                   <Link to="#">App Views</Link>
//                 </li>
//                 <li
//                   className="breadcrumb-item active flex-grow-1 "
//                   aria-current="page"
//                 >
//                   Contacts
//                 </li>
//                 <div className="add col-sm-4 col-md-4 col-lg-4">
//                   <button
//                     className={`btn ${
//                       isAdding ? "btn-danger" : "btn-primary"
//                     } `}
//                     onClick={addCloseButtonCLicked}
//                   >
//                     {isAdding ? "Close" : "Add Pilot"}
//                   </button>
//                   {/* <Link
//                     to="/pilot/add"
//                     role="button"
//                     className="btn btn-primary mt-2"
//                     onClick={() => addPilot}
//                   >
//                     Add Pilot
//                   </Link> */}
//                 </div>
//               </ol>
//             </nav>
//           </div>
//         </div>
//       </Router>
//     </>
//   );
// }
