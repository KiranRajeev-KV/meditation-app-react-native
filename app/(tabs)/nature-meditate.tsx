import { View, Text, FlatList, Pressable, ImageBackground } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { StatusBar } from "expo-status-bar";
import { MEDITATION_DATA } from "@/constants/MeditationData";
import meditaionImages from "@/constants/meditaion-images";
import { LinearGradient } from "expo-linear-gradient";

const NatureMeditate = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="mb-6 mt-8">
          <Text className="text-gray-200 mt-3 font-bold text-4xl text-left">
            Welcome Auco
          </Text>
          <Text className="text-indigo-100 text-xl font-medium">
            Start your meditation journey today.
          </Text>
        </View>
        <View className="mb-12">
          <FlatList
            data={MEDITATION_DATA}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => console.log(item.id)}
                className="h-48 my-3 rounded-md overflow-hidden"
              >
                <ImageBackground
                  source={meditaionImages[item.id - 1]}
                  resizeMode="cover"
                  className="flex-1 rounded-lg justify-center items-center"
                >
                  <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                    className="flex-1 justify-center items-center w-full"
                  >
                    <Text className="text-white font-bold text-3xl">
                      {item.title}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
            className="mb-20"
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </AppGradient>
      <StatusBar style="light" />
    </View>
  );
};

export default NatureMeditate;
