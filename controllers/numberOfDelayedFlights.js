const { numberOfFlights } = require("../services/numberOfFlightsService");
const { DetermineReturnValue } = require("../utils/returnResponse");

//  controller function to handle the GET request for delayed fligths.
//  return the delayed fligths data as JSON or a 500 error if something goes wrong.

const getDelayedFligths = async (req, res) => {
  try {
    const delayedFlights = await numberOfFlights("delayed");
    const resp = DetermineReturnValue(delayedFlights);
    res.json(resp);
  } catch (error) {
    res.status(500).json({message: "Error fetching flights", error});
  }
};

module.exports = { getDelayedFligths };
