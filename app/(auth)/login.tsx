import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import { useRouter } from "expo-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    console.log("Email: ", email + " Password: ", password);
    router.push("/active");
 
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputContainer}>
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
          title="Login"
          handlePress={() => {
            handleLogin();
          }}
          containerStyle={styles.loginButton}
        />
        <Text >
          Haven't registered yet?{" "}
          <Link href="/register" style={{ color: "#1C5D99" }}>
            Register
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: "100%",
    height: "100%",
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
  loginButton: {
    backgroundColor: "#1C5D99",
    borderRadius: 12,
    minHeight: 56,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});
