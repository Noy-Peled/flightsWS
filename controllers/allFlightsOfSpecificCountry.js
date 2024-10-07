const { allSpecificCountryFlights } = require("../services/specificFlightsService");


//  controller function to handle the GET request for all flights by specific country.
//  return all the flights by specific country's data as JSON or a 500 error if something goes wrong.

const getAllFlightsOfSpecificCountry = async (req, res) => {
  try {
    const country = req.params.country;
    const allFlights = await allSpecificCountryFlights(country);
    res.json(allFlights);
  } catch (error) {
    res.status(500).json({ message: "Error fetching flights", error });
  }
};

module.exports = { getAllFlightsOfSpecificCountry };
