const { flightsFromSpecificCountry } = require("../services/specificFlightsService");


//  controller function to handle the GET request for flights from specific country.
//  return the flights from specific country's data as JSON or a 500 error if something goes wrong.

const getFlightsFromSpecificCountry = async (req, res) => {
  try {
    const country = req.params.country;
    const flightsFrom = await flightsFromSpecificCountry(country);
    res.json(flightsFrom);
  } catch (error) {
    res.status(500).json({ message: "Error fetching flights", error });
  }
};

module.exports = { getFlightsFromSpecificCountry };
