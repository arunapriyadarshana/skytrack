import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import images from "@/constants/images";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const App = () => {
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  const opacity = useSharedValue(0);
  const translateY = useSharedValue(50);
  const buttonOpacity = useSharedValue(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimationFinished(true);

      opacity.value = withTiming(1, { duration: 800 });
      translateY.value = withTiming(0, { duration: 800 });

      setTimeout(() => {
        buttonOpacity.value = withTiming(1, { duration: 800 });
      }, 800);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  const buttonAnimatedStyle = useAnimatedStyle(() => ({
    opacity: buttonOpacity.value,
  }));

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {!isAnimationFinished ? (
          <LottieView
            source={require("@/assets/animations/airplane.json")}
            autoPlay
            loop={false}
            style={styles.lottieAnimation}
          />
        ) : (
          <Animated.View style={[styles.midContainer, animatedStyle]}>
            <Image
              source={images.logo}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.title}>SkyTrack</Text>
            <Text style={styles.description}>
              Your ultimate flight tracker, providing real-time updates on
              active, landed, and scheduled flights.
            </Text>

            <Animated.View style={buttonAnimatedStyle}>
              <CustomButton
                title="Get Started"
                handlePress={() => router.push("/(auth)/login")}
                containerStyle={{ width: 250, height: 44, marginTop:40 }}
              />
            </Animated.View>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#F5F7FA",
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 40,
    color: "#1C5D99",
    marginTop: 20,
  },
  description: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  lottieAnimation: {
    width: 300,
    height: 300,
  },
  midContainer: {
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translateX: -150 }, { translateY: -150 }],
  },
});
