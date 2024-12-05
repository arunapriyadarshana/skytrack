import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  KeyboardTypeOptions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import icons from "@/constants/icons";

const FormField = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  style,
  ...props
}: {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  style?: any;
  [key: string]: any;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          value={value}
          style={styles.input}
          onChangeText={onChangeText}
          secureTextEntry={label.toLowerCase() === "password" && !showPassword}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
        />
        {label.toLowerCase() === "password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? icons.eye : icons.eyeHide}
              resizeMode="contain"
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    gap: 10,
    width: "100%",
    position: "relative",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  inputContainer: {
    position: "relative",
    width: "100%",
    justifyContent: "center",
    height: 50,
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 5
  },
  input: {
    width: "100%",
    fontSize: 20,
  },
  icon: {
    position: "absolute",
    right: 10,
    top: -24,
    width: 24,
    height: 24,
  }
});
