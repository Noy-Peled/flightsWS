const { getData } = require("../repositories/flightsApiRepo");
const { toUpperCase } = require("../utils/toUpperCase")


// Returns the number of flights from a country, or a message if none exist.
const flightsFromSpecificCountry = async (country) => {
  const upperCaseCountry = toUpperCase(country);
  const data = await getData();
  const outbound = data.filter((flight) => flight.CHCINT && flight.CHCKZN && flight.CHLOCCT === upperCaseCountry);
  return outbound.length !== 0 ? outbound.length : "no outbound Flights";
};

// Returns the number of flights to a country, or a message if none exist.
const flightsToSpecificCountry = async (country) => {
  const upperCaseCountry = toUpperCase(country);
  const data = await getData();
  const inbound = data.filter((flight) =>!flight.CHCINT && !flight.CHCKZN && flight.CHLOCCT === upperCaseCountry);
  return inbound.length !== 0 ? inbound.length : "no inbound Flights";
};

// Returns the number of flights by specific country, or a message if none exist.
const allSpecificCountryFlights = async (country) => {
  const upperCaseCountry = toUpperCase(country);
  const data = await getData();
  const allFlights = data.filter((flight) => flight.CHLOCCT === upperCaseCountry);
  return allFlights.length !== 0 ? allFlights.length : "no Flights";
};

module.exports = {
  flightsFromSpecificCountry,
  flightsToSpecificCountry,
  allSpecificCountryFlights,
};
