const { numberOfFlights } = require("../services/numberOfFlightsService");
const { DetermineReturnValue } = require("../utils/returnResponse");

//  controller function to handle the GET request for inbound fligths.
//  return the inbound fligths data as JSON or a 500 error if something goes wrong.

const getInboundFligths = async (req, res) => {
  try {
    const inboundFlights = await numberOfFlights("inbound");
    const resp = DetermineReturnValue(inboundFlights);
    res.json(resp);
  } catch (error) {
    res.status(500).json({message: "Error fetching flights", error});
  }
};

module.exports = { getInboundFligths };
