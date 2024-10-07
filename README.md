# FlightsWS #


# Description:

FlightsWS is a web-server that gives information on inbound and outbound flights.
WS is running on `http://localhost:8080`.


# API Routes:

1. "/api/flights" - all API requests are routed through this base router, this is the main entry point for the WS.

2. "/api/flights/allFlights" - all fligths.

3. "/api/flights/inboundFlights" - all inbound flights.

4. "/api/flights/outboundFlights" - all outbound flights.

5. "/api/flights/allFlightsBy/:country" - all the flights by specific country, the country param is mandatory.

6. "/api/flights/flightsFrom/:country" - all the flights from specific country, the country param is mandatory.

7. "/api/flights/flightsTo/:country" - all the flights to specific country, the country param is mandatory.

8. "/api/flights/delayedFlights" - all delayed flights.

9. "/api/flights/popularDestination" - most popular flight destinations.

10. "/api/flights/quickGetaway" - two flight options for quick getaway, one from Israel and one to Israel.

--- all routes support GET requests only ---


# Build:

to build the WS, open the terminal and type the following command:

docker build -t flightsws . 


# run:

to run the WS, open the terminal and type the following command:

docker run -d -p 8080:8080 --name FlightsWSContainer flightsws

Open `http://localhost:8080/api/flights` to start using the FlightsWS.

