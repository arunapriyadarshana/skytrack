import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.contaier}>
        <Image source={images.logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>Welcome</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Username"
                      value="aruna"
                      
            style={styles.input}
          />
          <TextInput
            placeholder="Username"
            value="aruna"
            style={styles.input}
          />
        </View>

        <View style={styles.imageContainer}>
          <Image source={images.landing} resizeMode="contain" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  contaier: {
    // justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    position: "relative",
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: "#333",
  },
  imageContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    right: 0,
    zIndex: -1,
  },
  logo: {
    width: 100,
    height: 100,
  },
  mainImage: {},
  inputContainer: {
      width: "100%",
      display:"flex",
      alignItems: "center",
      padding: 20,
  },

  input: {
    width: "80%",
    height: 40,
    marginVertical: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});
