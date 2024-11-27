import { View, Text, FlatList, Pressable, Image } from "react-native";
import React from "react";
import { GallaryPriviewData } from "@/constants/models/affirmationCatagory";
import { Link } from "expo-router";

interface GuidedAffirmationsGallaryProps {
  title: string;
  preview: GallaryPriviewData[];
}

const GuidedAffirmationsGallary = ({
  title,
  preview,
}: GuidedAffirmationsGallaryProps) => {
  return (
    <View className="my-5">
      <View className="mb-2 ">
        <Text className="text-white font-bold text-xl">{title}</Text>
      </View>
      <View className="space-y-2">
        <FlatList
          data={preview}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View className="h-36 w-32 rounded-md mr-4 ">
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    className="w=full h-full"
                  />
                </View>
              </Pressable>
            </Link>
          )}
          horizontal
        />
      </View>
    </View>
  );
};

export default GuidedAffirmationsGallary;
