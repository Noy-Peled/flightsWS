const { quickGataway } = require("../services/quickGetaway");

//  controller function to handle the GET request for quick getaway flights.
//  return the  quick getaway flights data as JSON or a 500 error if something goes wrong.

const getquickGataway = async (req, res) => {
  try {
    const quickGatawayFlight = await quickGataway();
    res.json(quickGatawayFlight);
  } catch (error) {
    res.status(500).json({message: "Error fetching flights", error});
  }
};

module.exports = { getquickGataway };
