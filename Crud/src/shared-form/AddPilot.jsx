import React from "react";
import { FormView } from "../components/FormView/FormView";
// import { useHistory } from "react-router-dom";

// import { useDispatch, useSelector } from "react-redux";

// //action
// import { pilotAdded } from "../redux/pilotsSlice";
// import { photo } from "../../public/images/alex-johnathan";
// import { UPSPilot } from "../pages/ups/UPSPilotsPage"
//function useQuery() {
//const { search } = useLocation();

// return React.useMemo(() => new URLSearchParams(search), [search]);
//}
// export function AddPilot({ airline, company }) {
export function AddPilot() {
  // const history = useHistory();
  // //let query = useQuery();
  // const dispatch = useDispatch();
  // // const { airline } = useParams();

  // const [who, setAirline]= useState(airline);

  // const [airline, setAirline] = useState("AA", "AS", "FA", "UP");
  // const [company, setCompanny] = useState(
  //   "American Airlines",
  //   "Alaska Airlines",
  //   "Frontier Airlines",
  //   "UPS"
  // );
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [seat, setSeat] = useState("");
  // const [fleet, setFleet] = useState();
  // const [domicile, setDomicile] = useState("");
  // const [trainingFacility, setTrainingFacility] = useState("");
  // // const [photo, setPhoto] = useState("");
  // const [address1, setAddress1] = useState("");
  // const [address2, setAddress2] = useState("");
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // const [postalCode, setPostalCode] = useState("");
  // const [areaCode, setAreaCode] = useState("");
  // const [prefix, setPrefix] = useState("");
  // const [suffix, setSuffix] = useState("");

  // const pilotId = useSelector((state) => state.pilots.length);

  // const handleFirstName = (e) => setFirstName(e.target.value);
  // const handleLastName = (e) => setLastName(e.target.value);
  // const handleSeat = (e) => setSeat(e.target.value);
  // const handleFleet = (e) => setFleet(e.target.value);
  // const handleDomicile = (e) => setDomicile(e.target.value);
  // const handleTrainingFacility = (e) => setTrainingFacility(e.target.value);
  // const handleAddress1 = (e) => setAddress1(e.target.value);
  // const handleAddress2 = (e) => setAddress2(e.target.value);
  // const handleCity = (e) => setCity(e.target.value);
  // const handleState = (e) => setState(e.target.value);
  // const handlePostalCode = (e) => setPostalCode(e.target.value);
  // const handleAreaCode = (e) => setAreaCode(e.target.value);
  // const handlePrefix = (e) => setPrefix(e.target.value);
  // const handleSuffix = (e) => setSuffix(e.target.value);

  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }
  //console.log("airline: ", query.get("airline"));
  // const handleClick = () => {
  //   // e.preventDefault();
  //   dispatch(
  //     pilotAdded({
  //       id: pilotId,
  //       airline,
  //       // photo,
  //       company,
  //       firstName,
  //       lastName,
  //       seat,
  //       fleet,
  //       domicile,
  //       trainingFacility,
  //       address1,
  //       address2,
  //       city,
  //       state,
  //       postalCode,
  //       areaCode,
  //       prefix,
  //       suffix,
  //     })
  //   );

  //   history("/");

  //   {
  //     console.log(pilotAdded);
  //   }
  // };

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
          // onClick={() => updateButtonClicked(id)}
        >
          Save
        </button>
        <button type="button" className="btn-form btn btn-primary py-1 px-3">
          Cancel
        </button>
      </div>
    </>
  );
}

export default AddPilot;
