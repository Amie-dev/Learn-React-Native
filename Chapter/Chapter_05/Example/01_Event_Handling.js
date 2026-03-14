import React from "react";
import { Alert, Button, Text, View, StyleSheet } from "react-native";

const EventHandle = () => {

  const handleClick = () => {
    console.log("Btn is Click");
    Alert.alert("Click", "Btn is click");
  };

  return (
    <View className=" flex items-center justify-center gap-4">
      <Text className="color-black bg-white font-semibold">
        Event handling in Button
      </Text>

      <Button title="Click BTN" onPress={handleClick} className=" bg-slate-600" />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "green",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     color: "white",
//     fontSize: 18,
//     marginBottom: 20,
//   },
// });

export default EventHandle;