import React, { useState } from "react";
import { SafeAreaView, Text, Button } from "react-native";

const Counter = () => {

  const [count, setCount] = useState(0);

  return (
    <SafeAreaView>
      <Text>Count: {count}</Text>

      <Button
        title="Increase"
        onPress={() => setCount(count + 1)}
      />
    </SafeAreaView>
  );
};

export default Counter;