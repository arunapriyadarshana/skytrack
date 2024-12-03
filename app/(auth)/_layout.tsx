import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
      {/* Set the StatusBar color and style */}
      <StatusBar style="dark" backgroundColor="#42A5F5" />

      <Stack
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#42A5F5", // Set header color to match status bar
          },
        }}
      >
        <Stack.Screen name="auth/(login)" />
        <Stack.Screen name="auth/(register)" />
        {/* <Stack.Screen name="auth/(forgot-password)" options={{ headerShown: false }} /> */}
      </Stack>
    </>
  );
};

export default AuthLayout;
