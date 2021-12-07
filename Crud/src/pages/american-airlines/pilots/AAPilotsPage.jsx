import React from "react";
// import PropTypes from "prop-types";

// import PilotHeader from "../../../components/PilotHeader/index";
import PilotsListView from "../../../components/PilotsListView/index";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// import { selectPilots } from "../../../pilots-redux/pilotsSlice";

// import { pilotAdded } from "../../../pilots-redux/pilotsSlice";

export const AAPilotsPage = () => {
  // export const AAPilotsPage = () => {
  // const pilots = useSelector((state) => state.pilots);

  // const storedPilots = useSelector(selectPilots);
  // if (storedPilots && storedPilots.length > 0) {
  //   pilots = storedPilots.filter((pilots) => pilots.airline === "AA");
  // }

  // const [airline] = useState("AA");

  return (
    <>
      {/* <div className="">
        <PilotHeader />
      </div> */}

      <div className="">
        <PilotsListView airline="AA" pilots={[]} />
      </div>
      {/* <div>
        <div className="container-pilots card-page ">
          {pilots.map((pilot, id) => (
            <PilotView key={id} {...pilot} />
          ))}
        </div>
      </div> */}
    </>
  );
};

export default AAPilotsPage;

// AAPilotsPage.propTypes = {
//   pilots: PropTypes.arrayOf({
//     id: PropTypes.number,
//     airline: PropTypes.string,
//     firstName: PropTypes.string.isRequired,
//     lastName: PropTypes.string.isRequired,
//     fleet: PropTypes.number.isRequired,
//     seat: PropTypes.string.isRequired,
//     domicile: PropTypes.string.isRequired,
//     trainingFacility: PropTypes.string.isRequired,
//     address1: PropTypes.string.isRequired,
//     address2: PropTypes.string,
//     city: PropTypes.string.isRequired,
//     state: PropTypes.string.isRequired,
//     postalCode: PropTypes.number.isRequired,
//     areaCode: PropTypes.number.isRequired,
//     prefix: PropTypes.number.isRequired,
//     suffix: PropTypes.number.isRequired,
//   }),
// };
