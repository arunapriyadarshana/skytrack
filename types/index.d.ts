export interface DepartureDetails {
  airport: string;
  timezone: string;
  iata: string;
  icao: string;
  terminal: string | null;
  gate: string | null;
  delay: number | null;
  scheduled: string;
  estimated: string;
  actual: string;
  estimated_runway: string;
  actual_runway: string;
}

export interface ArrivalDetails {
  airport: string;
  timezone: string;
  iata: string;
  icao: string;
  terminal: string | null;
  gate: string | null;
  baggage: string | null;
  delay: number | null;
  scheduled: string;
  estimated: string;
  actual: string;
  estimated_runway: string;
  actual_runway: string;
}

export interface AirlineDetails {
  name: string;
  iata: string;
  icao: string;
}

export interface FlightInfo {
  number: string;
  iata: string;
  icao: string;
  codeshared: string | null;
}

export interface AircraftDetails {
  registration: string;
  iata: string;
  icao: string;
  icao24: string;
}

export interface FlightDetails {
  flight_date: string;
  flight_status: string;
  departure: DepartureDetails;
  arrival: ArrivalDetails;
  airline: AirlineDetails;
  flight: FlightInfo;
  aircraft: AircraftDetails;
  live: string | null;
}
