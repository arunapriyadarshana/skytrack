import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";

import { FlightDetails } from "@/types";
import FlightDetailsCard from "@/components/FlightDetailsCard";
import flightDetailsService from "@/services/flight.service";

const App = () => {
  const [flightData, setflightData] = useState<FlightDetails[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchFlights = async () => {
    setIsLoading(true);
    try {
      const response = await flightDetailsService.scheduledFlights();
      setflightData(response.data || []);
      console.log("Flight Data: ", response.data);
    } catch (error) {
      console.log("Failed to fetch flights: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchFlights();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#1565C0" />
          <Text style={styles.loadingText}>Loading Flights...</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.listContent}
          data={flightData}
          renderItem={({ item }) => <FlightDetailsCard data={item} />}
          keyExtractor={(item, index) =>
            `${item.flight?.number || "unknown"}-${
              item.flight_date || "unknown"
            }-${index}`
          }
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No Flights Found</Text>
            </View>
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: "#E3F2FD", // Light theme background
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E3F2FD", // Match the app's background
  },
  loadingText: {
    marginTop: 10,
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#1565C0", // Blue text color
  },
  listContent: {
    paddingBottom: 16, // Adds space at the bottom of the list
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    color: "#9E9E9E", // Muted gray for the empty list text
  },
});
