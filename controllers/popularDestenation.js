const { popularDestination } = require("../services/popularDestination");
const { DetermineReturnValue } = require("../utils/returnResponse");

//  controller function to handle the GET request for popular flights destination.
//  return the popular flights destination data as JSON or a 500 error if something goes wrong.

const getPopularDestination = async (req, res) => {
  try {
    const popularCountry = await popularDestination();
    const resp = DetermineReturnValue(popularCountry)
    res.json(resp);
  } catch (error) {
    res.status(500).json({message: "Error fetching flights", error});
  }
};

module.exports = { getPopularDestination };
