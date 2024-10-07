const { numberOfFlights } = require("../services/numberOfFlightsService");
const { DetermineReturnValue } = require("../utils/returnResponse");

//  controller function to handle the GET request for outbound fligths.
//  return the outbound fligths data as JSON or a 500 error if something goes wrong.

const getOutboundFligths = async (req, res) => {
  try {
    const outboundFlights = await numberOfFlights("outbound");
    const resp = DetermineReturnValue(outboundFlights);
    res.json(resp);
  } catch (error) {
    res.status(500).json({message: "Error fetching flights", error});
  }
};

module.exports = { getOutboundFligths };
