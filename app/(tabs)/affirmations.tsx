import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import GuidedAffirmationsGallary from "@/components/GuidedAffirmationsGallary";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallary";

const affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <Text className="text-zinc-50 text-3xl font-bold mt-16">
            Chnage your beliefs with affirmations
          </Text>
          <View className="mt-8">
            {AFFIRMATION_GALLERY.map((affirmation, index) => (
              <GuidedAffirmationsGallary
                key={index}
                title={affirmation.title}
                preview={affirmation.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default affirmations;
