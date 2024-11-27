import { View, Text, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import "./global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/Button";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";
const beachImage = require("../assets/meditation-images/beach.webp");

const App = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <SafeAreaView className="flex-1 px-1 justify-between">
            <View>
              <Text className="text-white text-4xl text-center font-bold">
                Simple Meditation
              </Text>
              <Text className="text-white text-2xl text-center mt-3">
                Simplifying Meditaion for Everyone
              </Text>
            </View>

            <View>
              <Button
                onPress={() => router.push("/nature-meditate")}
                title="Get Started"
              />
            </View>
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
      <StatusBar style="light" />
    </View>
  );
};

export default App;
