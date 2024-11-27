import { View, Text, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import "./global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/Button";
const beachImage = require("../assets/meditation-images/beach.webp");

const App = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
          className="flex-1"
        >
          <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
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
                onPress={() => console.log("tapped")}
                title="Get Started"
              />
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
      <StatusBar style="light" />
    </View>
  );
};

export default App;
