import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import { FlightDetails } from "@/types";
import FlightDetailsCard from "@/components/FlightDetailsCard";
import flightDetailsService from "@/services/getFlight.services";

const Landed = () => {
  const [flightData, setflightData] = useState<FlightDetails[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchFlights = async () => {
    try {
      const response = await flightDetailsService.landedFlights();
      setflightData(response.data || []);
      console.log("Flight Data: ", response.data);
    } catch (error) {
      console.error("Failed to fetch flights: ", error);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    // await fetchFlights();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  const Header = () => (
    <View style={styles.headerContainer}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.welcomeText}>Welcome Back,</Text>
          <Text style={styles.usernameText}></Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Fixed Header */}
      <Header />
      {/* Scrollable List */}
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
    </SafeAreaView>
  );
};

export default Landed;

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: "#E3F2FD", // Light theme background
  },
  headerContainer: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: "#E3F2FD", // Light blue for the header
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  welcomeText: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#1565C0", // Blue text color for welcome message
  },
  usernameText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 24,
    color: "#0D47A1", // Darker blue for the username text
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
