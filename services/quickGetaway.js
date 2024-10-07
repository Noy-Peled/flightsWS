const { numberOfFlights } = require("./numberOfFlightsService");

const quickGataway = async () => {
  
  // Get the data of inbound and outbound fligths by using the numberOfFlights function and pass it the relevant parameters.
  const inboundFlights = await numberOfFlights("inbound");
  const outboundFlights = await numberOfFlights("outbound");
  const selectedFlights = [];
  const minDaysToGataway = 3;

  // run on inboundFlights and outboundFlights arrays and in each iteration comparing a value between them
  for (let i = 0; i < inboundFlights.length; i++) {
    for (let j = 0; j < outboundFlights.length; j++) {

      // check if the city is the same between the outbound and inbound flight, if true create new Date of arrival and departure.
      if (inboundFlights[i].CHLOC1T == outboundFlights[j].CHLOC1T) {
        const arrivalDate = new Date(inboundFlights[i].CHPTOL);
        const departureDate = new Date(outboundFlights[j].CHPTOL);

        // if the departure date is earlier than the arrival date, create a minimum date to return to Israel (by minDaysToGataway)
        if (departureDate < arrivalDate) {
          const minimumReturnDate = new Date(departureDate);
          minimumReturnDate.setDate(
            minimumReturnDate.getDate() + minDaysToGataway
          );

          // check if the arrivalDate is later than minimumReturnDate, if true concat the flight code and number and add to the array.
          if (arrivalDate > minimumReturnDate) {
            const departure = outboundFlights[j].CHOPER.concat(
              outboundFlights[j].CHFLTN
            );
            const arrival = inboundFlights[i].CHOPER.concat(
              inboundFlights[i].CHFLTN
            );
            selectedFlights.push({arrival: arrival, departure: departure});
          }
        }
      }
    }
  }

  // return the first value of the array.
  return selectedFlights[0] ? selectedFlights[0] : {};
};

module.exports = { quickGataway };
