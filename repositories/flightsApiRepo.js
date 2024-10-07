const axios = require("axios");

const apiUrl =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=e83f763b-b7d7-479e-b172-ae981ddc6de5&limit=300";

// fetches flight data from API with axios and return the record
const getData = async () => {
  const { data: flightsData } = await axios.get(apiUrl);
  return flightsData?.result?.records;
};

module.exports = { getData };
