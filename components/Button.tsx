import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface ButtonProps {
  onPress: () => void;
  title: string;
  textStyle?: string;
  containerStyle?: string;
}

const Button = ({
  onPress,
  title,
  textStyle = "",
  containerStyle = "",
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyle}`}
      onPress={onPress}
    >
      <Text className={`font-semibold text-lg ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
