// export const getAllFlights = async () => {
//   const apiUrl = "https://api.aviationstack.com/v1/flights";
//   const apiKey = "520aaea960d4a4feba613039795b456b";

//   const response = await fetch(
//     `${apiUrl}?access_key=${apiKey}&limit=20&offset=0`
//   );
//   if (!response.ok) {
//     throw new Error(`Failed to fetch flights: ${response.statusText}`);
//   }

//   const data = await response.json();

//   return data;
// };


const apiUrl = "https://api.aviationstack.com/v1/flights";
const apiKey = "61667f7b6c341b968822d9dfca8f1985";

const flightDetailsService = {
  landedFlights: async () => {
    try {
      const response = await fetch(
        `${apiUrl}?access_key=${apiKey}&limit=20&offset=0&flight_status=landed`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch flights: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching flight data:", error);
      throw error; // Re-throw to handle the error in the calling function
    }
    },
    
    activeFlights: async () => {
        try {
            const response = await fetch(
              `${apiUrl}?access_key=${apiKey}&limit=20&offset=0&flight_status=active`
            );
            if (!response.ok) {
            throw new Error(`Failed to fetch flights: ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching flight data:", error);
            throw error; // Re-throw to handle the error in the calling function
        }
    },
    
    scheduledFlights: async () => {
        try {
            const response = await fetch(
              `${apiUrl}?access_key=${apiKey}&limit=20&offset=0&flight_status=scheduled`
            );
            if (!response.ok) {
            throw new Error(`Failed to fetch flights: ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching flight data:", error);
            throw error; // Re-throw to handle the error in the calling function
        }
    }
};

export default flightDetailsService;