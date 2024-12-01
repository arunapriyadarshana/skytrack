import { Colors } from "@/constants/Colors";
import icons from "@/constants/icons";
import { Tabs } from "expo-router";
import React from "react";
import {
  ImageSourcePropType,
  View,
  Image,
  Text,
  StyleSheet,
} from "react-native";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#0047AB",
          tabBarInactiveTintColor: "#28282B",
          tabBarStyle: {
            backgroundColor: "#fafafa",
            borderTopWidth: 1,
            borderTopColor: "#fafafa",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({
              color,
              focused,
            }: {
              color: string;
              focused: boolean;
            }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({
              color,
              focused,
            }: {
              color: string;
              focused: boolean;
            }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                name="Create"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

const TabIcon = ({
  icon,
  color,
  name,
  focused,
}: {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={[styles.icon, { tintColor: color }]} />
      <Text
        style={[
          styles.text,
          {
            fontFamily: focused ? "Poppins-SemiBold" : "Poppins-Regular",
            color: color,
          },
        ]}
      >
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    // gap: 8,
  },
  icon: {
    width: 34,
    height: 34,
    resizeMode: "contain",
  },
  text: {
    fontSize: 20,
  },
});
