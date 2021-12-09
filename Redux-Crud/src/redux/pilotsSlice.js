import { createSlice } from "@reduxjs/toolkit";

// import { act } from "react-test-renderer";

const initialState = {
  pilots: [
    {
      id: 1,
      airline: "AA",
      photo: "../../../public/images/john-smith.jpeg",
      firstName: "John",
      lastName: "Smith",
      fleet: 737,
      seat: "CPT",
      domicile: "GEG",
      trainingFacility: "Riviera State 32/106",
      company: "American Airlines",
      address1: "795 Folsom Ave",
      address2: "Suite 600",
      city: "San Francisco",
      state: "CA",
      postalCode: 94107,
      areaCode: 123,
      prefix: 456,
      suffix: 7890,
    },

    {
      id: 2,
      airline: "AA",
      firstName: "Alex",
      lastName: "Johnathan",
      fleet: 738,
      seat: "CPT",
      domicile: "GEG",
      photo: "../../../public/images/alex-johnathan.jpeg",
      trainingFacility: "Riviera State 32/106",
      company: "American Airlines",
      address1: "728 Malcom Ave,",
      address2: "Suite 100",
      city: "San Diego",
      state: "CA",
      postalCode: 92025,
      areaCode: 256,
      prefix: 435,
      suffix: 2860,
    },
    {
      id: 3,
      airline: "AA",
      firstName: "Monica",
      lastName: "Smith",
      fleet: 435,
      seat: "CPT",
      domicile: "LAX",
      photo: "../../../public/images/monica-smith.jpeg",
      trainingFacility: "Montana State 32/106",
      company: "American Airlines",
      address1: "256 Colton Ave,",
      address2: "Suite 500",
      city: "Los Angeles",
      state: "CA",
      postalCode: 90010,
      areaCode: 506,
      prefix: 258,
      suffix: 7777,
    },
    {
      id: 4,
      airline: "AA",
      firstName: "Michael",
      lastName: "Zimber",
      fleet: 200,
      seat: "FOX",
      domicile: "LAX",
      photo: "../../../public/images/michael-zimber.jpeg",
      trainingFacility: "Angeles State 32/106",
      company: "American Airlines",
      address1: "320 London Ave,",
      address2: "Suite 500",
      city: "Los Angeles",
      state: "CA",
      postalCode: 90010,
      areaCode: 503,
      prefix: 200,
      suffix: 6262,
    },
    {
      id: 5,
      airline: "AA",
      firstName: "Sandra",
      lastName: "Smith",
      fleet: 701,
      seat: "FOX",
      domicile: "LAX",
      photo: "../../../public/images/sandra-smith.jpeg",
      trainingFacility: "Angeles State 32/106",
      company: "American Airlines",
      address1: "101 Peter Ave,",
      address2: "Suite 200",
      city: "Los Angeles",
      state: "CA",
      postalCode: 90010,
      areaCode: 250,
      prefix: 958,
      suffix: 8263,
    },
    {
      id: 6,
      airline: "AA",
      firstName: "Janet",
      lastName: "Carton",
      fleet: 300,
      seat: "FOX",
      domicile: "LAX",
      photo: "../../../public/images/janet-carton.jpeg",
      trainingFacility: "Lisbon State 32/106",
      company: "American Airlines",
      address1: "300 Grande Ave,",
      address2: "Suite 301",
      city: "San Francisco",
      state: "CA",
      postalCode: 92010,
      areaCode: 556,
      prefix: 321,
      suffix: 6543,
    },
    {
      id: 7,
      airline: "AS",
      firstName: "Janice",
      lastName: "Mitchell",
      fleet: 215,
      seat: "VGA",
      domicile: "LAX",
      photo: "../../../public/images/janet-carton.jpeg",
      trainingFacility: "Nevada State 32/106",
      company: "Alaska Airlines",
      address1: "101 Joseph Ave,",
      address2: "Suite 310",
      city: "Los Angeles",
      state: "CA",
      postalCode: 92001,
      areaCode: 528,
      prefix: 523,
      suffix: 2626,
    },
    {
      id: 8,
      airline: "AS",
      firstName: "Samantha",
      lastName: "Gabul",
      fleet: 295,
      seat: "ANA",
      domicile: "GEG",
      photo: "../../../public/images/sandra-smith.jpeg",
      trainingFacility: "Stevens State 32/106",
      company: "Alaska Airlines",
      address1: "120 Murphy Ave,",
      address2: "Suite 300",
      city: "Spokane",
      state: "WA",
      postalCode: 99210,
      areaCode: 509,
      prefix: 123,
      suffix: 4567,
    },
    {
      id: 9,
      airline: "AS",
      firstName: "Joshua",
      lastName: "Miller",
      fleet: 900,
      seat: "FOX",
      domicile: "DFW",
      photo: "../../../public/images/michael-zimber.jpeg",
      trainingFacility: "George State 32/106",
      company: "Alaska Airlines",
      address1: "200 Division Ave,",
      address2: "Suite 501",
      city: "Dallas",
      state: "TX",
      postalCode: 75034,
      areaCode: 259,
      prefix: 633,
      suffix: 7890,
    },
    {
      id: 10,
      airline: "AS",
      firstName: "Alexis",
      lastName: "Johnson",
      fleet: 900,
      seat: "AIH",
      domicile: "DFW",
      photo: "../../../public/images/alex-johnathan.jpeg",
      trainingFacility: "Michael State 32/106",
      company: "Alaska Airlines",
      address1: "201 Hungary Ave,",
      address2: "Suite 100",
      city: "Dallas",
      state: "TX",
      postalCode: 75100,
      areaCode: 355,
      prefix: 456,
      suffix: 1212,
    },
    {
      id: 11,
      airline: "AS",
      photo: "../../../public/images/john-smith.jpeg",
      firstName: "Jackson",
      lastName: "Bills",
      fleet: 235,
      seat: "ASA",
      domicile: "SFO",
      trainingFacility: "Montana State 32/106",
      company: "Alaska Airlines",
      address1: "250 Nevada Ave",
      address2: "Suite 200",
      city: "San Francisco",
      state: "CA",
      postalCode: 94110,
      areaCode: 502,
      prefix: 234,
      suffix: 7890,
    },
    {
      id: 12,
      airline: "FA",
      firstName: "Vanessa",
      lastName: "Mitch",
      seat: "CPT",
      fleet: 201,
      domicile: "STL",
      photo: "../../../public/images/monica-smith.jpeg",
      trainingFacility: "George State 32/106",
      company: "Frontier Airlines",
      address1: "300 Gabriel Ave,",
      address2: "Suite 230",
      city: "Phoenix",
      state: "AZ",
      postalCode: 78010,
      areaCode: 825,
      prefix: 300,
      suffix: 2031,
    },
    {
      id: 13,
      airline: "FA",
      photo: "../../../public/images/john-smith.jpeg",
      firstName: "Arthur",
      lastName: "Yap",
      fleet: 200,
      seat: "ASA",
      domicile: "SFO",
      trainingFacility: "Colville State 32/106",
      company: "Frontier Airlines",
      address1: "101 Alcona Ave",
      address2: "Suite 810",
      city: "San Francisco",
      state: "CA",
      postalCode: 94105,
      areaCode: 258,
      prefix: 578,
      suffix: 3250,
    },
    {
      id: 14,
      airline: "FA",
      firstName: "Cristy",
      lastName: "Fermin",
      fleet: 205,
      seat: "FOX",
      domicile: "LAX",
      photo: "../../../public/images/janet-carton.jpeg",
      trainingFacility: "Acosta State 32/106",
      company: "Frontier Airlines",
      address1: "265 Albany Ave,",
      address2: "Suite 205",
      city: "Los Angeles",
      state: "CA",
      postalCode: 92405,
      areaCode: 652,
      prefix: 123,
      suffix: 2828,
    },
    {
      id: 15,
      airline: "FA",
      firstName: "Enrique",
      lastName: "Gil",
      fleet: 750,
      seat: "CPT",
      domicile: "DFW",
      photo: "../../../public/images/michael-zimber.jpeg",
      trainingFacility: "Bowden State 32/106",
      company: "Frontier Airlines",
      address1: "301 Border Ave,",
      address2: "Suite 200",
      city: "Dallas",
      state: "TX",
      postalCode: 72025,
      areaCode: 625,
      prefix: 633,
      suffix: 7890,
    },
    {
      id: 16,
      airline: "UP",
      firstName: "Aljur",
      lastName: "Abrenica",
      fleet: 255,
      seat: "CPT",
      domicile: "LAX",
      photo: "../../../public/images/alex-johnathan.jpeg",
      trainingFacility: "Canyon State 32/106",
      company: "UPS",
      address1: "625 Cedar Ave,",
      address2: "Suite 210",
      city: "Los Angeles",
      state: "CA",
      postalCode: 70210,
      areaCode: 354,
      prefix: 678,
      suffix: 9000,
    },
    {
      id: 17,
      airline: "UP",
      photo: "../../../public/images/john-smith.jpeg",
      firstName: "Dennis",
      lastName: "Trillo",
      fleet: 850,
      seat: "ASA",
      domicile: "SFO",
      trainingFacility: "Columbia State 32/106",
      company: "UPS",
      address1: "200 Denmark Ave",
      address2: "Suite 110",
      city: "San Francisco",
      state: "CA",
      postalCode: 94115,
      areaCode: 258,
      prefix: 987,
      suffix: 7321,
    },
    {
      id: 18,
      airline: "UP",
      firstName: "Liza",
      lastName: "Sembrano",
      fleet: 312,
      seat: "ANA",
      domicile: "GEG",
      photo: "../../../public/images/sandra-smith.jpeg",
      trainingFacility: "Gibson State 32/106",
      company: "UPS",
      address1: "256 Graham Ave,",
      address2: "Suite 105",
      city: "Seattle",
      state: "WA",
      postalCode: 99200,
      areaCode: 509,
      prefix: 123,
      suffix: 4567,
    },
  ],
};

export const pilotsSlice = createSlice({
  name: "pilots",
  initialState,
  reducers: {
    // addPilot(state, action) => {
    //   return {
    //     ...state,
    //     pilots: [...state.pilots, action.payload]
    //   }
    // },

    // updatePilot(state, action) {
    //   state.pilots = action.payload;
    // },
    deletePilot: (state, action) => {
      const filteredPilots = state.pilots.filter(
        (pilot) => pilot.id !== action.payload.id
      );

      return {
        ...state,
        pilots: filteredPilots,
      };
    },

    addPilot: (state, action) => {
      action.payload.id = state.pilots[state.pilots.length - 1].id + 1;

      return {
        ...state,
        pilots: [...state.pilots, action.payload],
      };
    },

    // editPilot: (state, action) => {
    //   state.pilots = action.payload;
    // const {
    //   id,
    //   airline,
    //   firstName,
    //   lastName,
    //   fleet,
    //   photo,
    //   seat,
    //   company,
    //   domicile,
    //   trainingFacility,
    //   address1,
    //   address2,
    //   city,
    //   state,
    //   postalCode,
    //   areaCode,
    //   prefix,
    //   suffix,
    // } = action.payload;

    //   state.pilots = state.pilots.map((pilot) =>
    //     pilot.id === action.payload.id
    //       ? {
    //           ...state,
    //         }
    //       : pilot
    //   );
    // },

    // editPilot: (state, action) => {
    //   //find the pilot to replace
    //   //replace the pilot
    //   //return the new array
    //   const index = state.pilots.filter(
    //     (pilot) => pilot.id === action.payload.id
    //   );

    //   state.pilots[index] = {
    //     ...state.pilot.pilots[index],
    //     // pilots: [...state.pilots, action.payload],
    //   };
    // },

    updatePilot(state, action) {
      const {
        id,
        // airline,
        // photo,
        firstName,
        lastName,
        fleet,
        seat,
        domicile,
        trainingFacility,
        company,
        address1,
        address2,
      } = action.payload;
      const findPilot = state.pilots.find((pilot) => pilot.id === id);
      // const existingPilot = state.pilots.find(pilot => pilot.id === id)
      if (findPilot) {
        // existingPilot.id = id
        // existingPilot.airline = airline
        // existingPilot.photo = photo;
        findPilot.firstName = firstName;
        findPilot.lastName = lastName;
        findPilot.fleet = fleet;
        findPilot.seat = seat;
        findPilot.domicile = domicile;
        findPilot.trainingFacility = trainingFacility;
        findPilot.company = company;
        findPilot.address1 = address1;
        findPilot.address2 = address2;
      }
    },
  },
});

export const selectPilots = (state) => state.pilots.pilots;
// export const selectTasks = (state) => state.pilots;
// export const { pilotAdded, userUpdated } = pilotsSlice.actions;
export const { addPilot, deletePilot, updatePilot } = pilotsSlice.actions;
export default pilotsSlice.reducer;
