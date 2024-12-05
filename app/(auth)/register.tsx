import { View, Text, ScrollView, StyleSheet, Dimensions, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, useRouter } from "expo-router";

const { height: windowHeight } = Dimensions.get("window");

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const validateEmail = (email:string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = () => {
    if (username === "" || email === "" || password === "") {
      Alert.alert("Error","Please fill all fields");
      return;
    }

    if (username.length < 6) {
      Alert.alert("Error","Username must be at least 6 characters long");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long");
      return;
    }

    router.push("/active");

  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Register</Text>
          <View style={styles.inputContainer}>
            <FormField
              label="Username"
              placeholder="Enter your username"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
            <FormField
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <FormField
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
          </View>
          <CustomButton
            title="Register"
            handlePress={() => {
              handleRegister();
            }}
            containerStyle={styles.registerButton}
          />

          <Text>
            Already have an account?{" "}
            <Link href="/login" style={{ color: "#1C5D99" }}>
              Login
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "100%",
    minHeight: windowHeight * 0.85,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
  },
  inputContainer: {
    justifyContent: "center",
    gap: 10,
    width: "100%",
    padding: 40,
  },
  registerButton: {
    backgroundColor: "#1C5D99",
    borderRadius: 12,
    minHeight: 46,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});
