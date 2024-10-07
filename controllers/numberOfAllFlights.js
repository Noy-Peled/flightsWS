const { numberOfFlights } = require("../services/numberOfFlightsService");
const { DetermineReturnValue } = require("../utils/returnResponse");

//  controller function to handle the GET request for all fligths.
//  return all the fligths data as JSON or a 500 error if something goes wrong.

const getAllFligths = async (req, res) => {
  try {
    const allFlights = await numberOfFlights("all");
    const resp = DetermineReturnValue(allFlights);
    res.json(resp);
  } catch (error) {
    res.status(500).json({message: "Error fetching flights", error});
  }
};

module.exports = { getAllFligths };
