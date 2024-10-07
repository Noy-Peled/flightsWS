const express = require("express");

const { isValidParams } = require("../midelleweres/validParams");
const { getAllFligths } = require("../controllers/numberOfAllFlights");
const { getInboundFligths } = require("../controllers/numberOfInboundFlights");
const { getOutboundFligths } = require("../controllers/numberOfOutboundFlights");
const { getDelayedFligths } = require("../controllers/numberOfDelayedFlights");
const { getFlightsFromSpecificCountry } = require("../controllers/flightsFromSpecificCountry");
const { getFlightsToSpecificCountry } = require("../controllers/flightsToSpecificCountry");
const { getAllFlightsOfSpecificCountry } = require("../controllers/allFlightsOfSpecificCountry");
const { getPopularDestination } = require("../controllers/popularDestenation");
const { getquickGataway } = require("../controllers/quickGetaway");

// create router with express.
router = express.Router();


// create routes for evey controller, with middlewere to check valid data.
router.get("/allFlights", getAllFligths);

router.get("/inboundFlights", getInboundFligths);

router.get("/outboundFlights", getOutboundFligths);

router.get("/allFlightsBy/:country", isValidParams, getAllFlightsOfSpecificCountry);

router.get("/flightsFrom/:country", isValidParams, getFlightsFromSpecificCountry);

router.get("/flightsTo/:country", isValidParams, getFlightsToSpecificCountry);

router.get("/delayedFlights", getDelayedFligths);

router.get("/popularDestination", getPopularDestination);

router.get("/quickGetaway", getquickGataway);


module.exports = router;
