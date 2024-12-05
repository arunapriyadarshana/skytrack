import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FlightDetails } from "@/types";
import { useCountContext } from "@/hooks/useCountContext";
import images from "@/constants/images";

interface FlightDetailsCardProps {
  data: FlightDetails;
}

const FlightDetailsCard: React.FC<FlightDetailsCardProps> = ({ data }) => {
  // Determine the background color based on the flight status
  const getStatusBackgroundColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "#D1FAE5"; // Light green
      case "scheduled":
        return "#FEF3C7"; // Light yellow
      case "landed":
        return "#FEE2E2"; // Light red
      default:
        return "#E5E7EB"; // Default gray
    }
  };

  const { dispatch } = useCountContext();

  const [isAdded, setIsAdded] = useState(false);

  const handlePress = () => {
    if (isAdded) {
      dispatch({ type: "decrement" });
    } else {
      dispatch({ type: "increment" });
    }
    setIsAdded(!isAdded);
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.row}>
        <Image source={images.flight} style={styles.image} />
        <View style={styles.detailsContainer}>
          <View style={styles.col}>
            <View
              style={[
                styles.flightStatusContainer,
                {
                  backgroundColor: getStatusBackgroundColor(data.flight_status),
                },
              ]}
            >
              <Text style={styles.flightStatus}>
                {data.flight_status.charAt(0).toUpperCase() +
                  data.flight_status.slice(1)}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.value}>{data.airline.name}</Text>
              <Text style={styles.value}>{data.flight.number}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.col}>
        <View style={styles.row}>
          <Text style={styles.label}>Flight Date:</Text>
          <Text style={styles.value}>{data.flight_date}</Text>
        </View>
        <View style={styles.rowWrap}>
          <Text style={styles.label}>Departure:</Text>
          <Text style={styles.valueWrap} numberOfLines={1} ellipsizeMode="tail">
            {data.departure.airport} ({data.departure.iata})
          </Text>
        </View>
        <View style={styles.rowWrap}>
          <Text style={styles.label}>Arrival:</Text>
          <Text style={styles.valueWrap} numberOfLines={1} ellipsizeMode="tail">
            {data.arrival.airport} ({data.arrival.iata})
          </Text>
        </View>
      </View>
      <View style={{
        justifyContent: "flex-end",
        alignItems:"flex-end"
      }}>
        {isAdded ? (
          <TouchableOpacity
            style={styles.viewDetailsButton}
            onPress={handlePress}
          >
            <Text style={styles.viewDetailsText}>Back</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.viewDetailsButton}
            onPress={handlePress}
          >
            <Text style={styles.viewDetailsText}>View More Details</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FlightDetailsCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  rowWrap: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap", // Enable wrapping for long text
    marginBottom: 8,
  },
  col: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  flightStatusContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  flightStatus: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#1F2937",
  },
  label: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#4B5563",
    marginRight: 8,
  },
  value: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#1F2937",
    marginRight: 16,
  },
  valueWrap: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#1F2937",
    marginRight: 16,
    flex: 1, // Ensure it takes up available space
  },
  viewDetailsButton: {
    backgroundColor: "#2563EB", // Theme primary color (blue)
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 16,
    width: "40%",
  },
  viewDetailsText: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#FFFFFF", // White text
  },
});
