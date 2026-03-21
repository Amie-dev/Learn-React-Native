import React from 'react';
import { View, Text, Pressable } from 'react-native';

const Footer = () => {
  return (
    <View className="flex-row justify-around items-center bg-white py-3 border-t border-gray-200">
      <Pressable className="items-center">
        <Text className="text-xl">🏠</Text>
        <Text className="text-xs">Home</Text>
      </Pressable>

      <Pressable className="items-center">
        <Text className="text-xl">📂</Text>
        <Text className="text-xs">Category</Text>
      </Pressable>

      <Pressable className="items-center">
        <Text className="text-xl">❤️</Text>
        <Text className="text-xs">Wishlist</Text>
      </Pressable>

      <Pressable className="items-center">
        <Text className="text-xl">🛒</Text>
        <Text className="text-xs">Cart</Text>
      </Pressable>

      <Pressable className="items-center">
        <Text className="text-xl">👤</Text>
        <Text className="text-xs">Profile</Text>
      </Pressable>
    </View>
  );
};

export default Footer;
