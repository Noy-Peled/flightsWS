const { getData } = require("../repositories/flightsApiRepo");
const { flightsFromSpecificCountry } = require("./specificFlightsService");

const popularDestination = async () => {
  const data = await getData();
  let countFlights = [];
  let countries = [];

  // checks if a country exists in the array of countries, if it exists don't add it to the array, if it doesn't exist add it.
  countries = data.filter((flight) => {
    if (!countries.includes(flight.CHLOCCT)) {
      countries.push(flight.CHLOCCT);
      return true;
    }
    console.log(`country ${flight.CHLOCCT} already exists in the array`);
    return false;
  });

  // for each country activate the flightsFromSpecificCountry function and return an object with country's name and number of flights.
  const promise = countries.map(async (country) => {
    const amount = await flightsFromSpecificCountry(country.CHLOCCT);
    return { country: country.CHLOCCT, amount: typeof amount === "string" ? 0 : amount };
  });

  // countFlights waits until all of the promises are resolved.
  countFlights = await Promise.all(promise);

  // finding the country with the most flights and return it.
  const popularCountry = countFlights.reduce((acc, current) => acc.amount > current.amount ? acc : current);

  // return the name of the popular country
  return popularCountry.country;
};

module.exports = { popularDestination };
