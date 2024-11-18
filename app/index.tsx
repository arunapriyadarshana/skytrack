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

  // Animation values
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(50);
  const buttonOpacity = useSharedValue(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimationFinished(true);

      opacity.value = withTiming(1, { duration: 800 });
      translateY.value = withTiming(0, { duration: 800 });

      // Delay button fade-in animation after middle container animation
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
            <Text style={styles.title}>AeroReserve</Text>

            <Animated.View style={buttonAnimatedStyle}>
              <CustomButton
                title="Login"
                handlePress={() => router.push("/(auth)/login")}
                containerStyle={{ width: 200 }}
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
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 40,
    color: "#333",
  },
  logo: {
    width: 300,
    height: 300,
    paddingLeft: 40,
  },
  lottieAnimation: {
    width: 400,
    height: 400,
  },
  midContainer: {
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translateX: -150 }, { translateY: -200 }],
  },
});
