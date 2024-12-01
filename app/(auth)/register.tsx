import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";


const { height: windowHeight } = Dimensions.get("window");

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister =  () => {
    if (username === "" || email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

  
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
    width: 200,
  },
});
