const { flightsToSpecificCountry } = require("../services/specificFlightsService");


//  controller function to handle the GET request for flights to specific country.
//  return the flights to specific country's data as JSON or a 500 error if something goes wrong.

const getFlightsToSpecificCountry = async (req, res) => {
  try {
    const country = req.params.country;
    const flightsTo = await flightsToSpecificCountry(country);
    res.json(flightsTo);
  } catch (error) {
    res.status(500).json({message: "Error fetching flights", error});
  }
};

module.exports = { getFlightsToSpecificCountry };
