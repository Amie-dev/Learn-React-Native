import React, { useLayoutEffect, useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

export const Broadband = ({ navigation }) => {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Broadband Recharge",

      headerStyle: {
        backgroundColor: "#1e40af",
        elevation: 4,
      },

      headerTitleStyle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
      },

      headerTitleAlign: "center",

      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 12 }}
        >
          <Text style={{ fontSize: 22, color: "#fff" }}>←</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View className="flex-1 bg-slate-100 p-4">

      {/* Card */}
      <View className="bg-white rounded-2xl p-4 shadow">

        {/* Broadband Number */}
        <Text className="text-sm text-gray-500 mb-1">
          Broadband Number
        </Text>
        <TextInput
          value={number}
          onChangeText={setNumber}
          placeholder="Enter Broadband number"
          keyboardType="number-pad"
          className="border border-gray-300 rounded-lg px-3 py-2 mb-4"
        />

        {/* Operator */}
        <Text className="text-sm text-gray-500 mb-1">
          Operator
        </Text>
        <View className="border border-gray-300 rounded-lg px-3 py-3 mb-4">
          <Text className="text-gray-700">
            Select Operator
          </Text>
        </View>

        {/* Amount */}
        <Text className="text-sm text-gray-500 mb-1">
          Amount
        </Text>
        <TextInput
          value={amount}
          onChangeText={setAmount}
          placeholder="Enter amount"
          keyboardType="number-pad"
          className="border border-gray-300 rounded-lg px-3 py-2 mb-5"
        />

        {/* Recharge Button */}
        <TouchableOpacity className="bg-blue-700 py-3 rounded-xl items-center">
          <Text className="text-white font-bold text-base">
            Proceed to Recharge
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};