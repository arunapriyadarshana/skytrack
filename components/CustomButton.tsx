import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyle,
  textStyle,
  isLoading,
}: {
  title: string;
  handlePress: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  isLoading?: boolean;
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        styles.container,
        containerStyle,
        isLoading ? styles.disabled : undefined,
      ]}
      disabled={isLoading}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C5D99", // Replace with your actual secondary color
    borderRadius: 12, // Adjusted for rounded corners (rounded-xl)
    minHeight: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff", // Replace with your actual primary color
    fontFamily: "Poppins-Bold",
    fontSize: 20, // Adjusted for text-lg
  },
  disabled: {
    opacity: 0.5,
  },
});

export default CustomButton;
