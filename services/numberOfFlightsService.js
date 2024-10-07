const { getData } = require("../repositories/flightsApiRepo");

// receives a string parameter, can be: "all"/"inbound"/"outbound"/"delayed".
// return the relevant number of flights according to the parameter it receives, if there is no data returns an appropriate message.
const numberOfFlights = async (dataType) => {
  const data = await getData();

  switch (dataType) {
    case "all":
      return data.length !== 0 ? data : "no Flights";

    case "inbound":
      const inbound = data.filter((flight) => !flight.CHCINT && !flight.CHCKZN);
      return inbound.length !== 0 ? inbound : "no inbound Flights";

    case "outbound":
      const outbound = data.filter((flight) => flight.CHCINT && flight.CHCKZN);
      return outbound.length !== 0 ? outbound : "no outbound Flights";

    case "delayed":
      const delayed = data.filter((flight) => flight.CHRMINE === "DELAYED");
      return delayed.length !== 0 ? delayed : "no delayed Flights";

    default:
      return "Invalid data type";
  }
};

module.exports = { numberOfFlights };
