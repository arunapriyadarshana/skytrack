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
import { useCountContext } from "@/hooks/useCountContext";

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
            borderTopColor: "#fcfbfb",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="active"
          options={{
            title: "Active",
            header: () => <CustomHeader />,
            tabBarIcon: ({
              color,
              focused,
            }: {
              color: string;
              focused: boolean;
            }) => (
              <TabIcon
                icon={icons.activeIcon}
                color={color}
                name="Active"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="scheduled"
          options={{
            title: "Scheduled",
            header: () => <CustomHeader />,
            tabBarIcon: ({
              color,
              focused,
            }: {
              color: string;
              focused: boolean;
            }) => (
              <TabIcon
                icon={icons.scheduledIcon}
                color={color}
                name="Scheduled"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="landed"
          options={{
            title: "Landed",
            header: () => <CustomHeader />,
            tabBarIcon: ({
              color,
              focused,
            }: {
              color: string;
              focused: boolean;
            }) => (
              <TabIcon
                icon={icons.landingIcon}
                color={color}
                name="Landed"
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

const CustomHeader = () => {
  const { state } = useCountContext();
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.title}>Hi 👋, Aruna</Text>

      <View
        style={{
          backgroundColor: "#E3F2FD",
          width: 40,
          height: 40,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#2a2a2a", fontSize: 18 }}>{state}</Text>
      </View>
    </View>
  );
};

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
    top: 10,
    height: 50,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  text: {
    fontSize: 15,
  },
});

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: "#0047AB",
    height: 120,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 20,
    fontFamily: "Poppins-SemiBold",
    color: "#FFFFFF",
  },
});
