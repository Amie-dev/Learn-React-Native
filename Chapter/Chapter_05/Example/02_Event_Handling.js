import { useState } from "react";
import { View, Text, Button } from "react-native";

const EventHandle_02 = () => {
  const [count, setCount] = useState(0);

  return (
    <View className="flex m-2 p-3 justify-center items-center">

      <View className="justify-center items-center mb-4">
        <Text className="text-lg font-bold">
          Count: {count}
        </Text>
      </View>

      <View className="flex-row gap-3">
        <Button title="Increment" onPress={() => setCount(count + 1)} />

        <Button
          title="Decrement"
          disabled={count === 0}
          onPress={() => setCount(count - 1)}
        />

        <Button title="Reset" onPress={() => setCount(0)} />
      </View>

    </View>
  );
};

export default EventHandle_02;