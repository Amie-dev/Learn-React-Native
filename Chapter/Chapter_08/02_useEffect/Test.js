import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const UseEffectScreen = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  // 🔁 Runs on EVERY render
  useEffect(() => {
    console.log("🔁 Re-render happened");
  });

  // 🟢 Runs ONLY once
  useEffect(() => {
    console.log("🟢 Component Mounted");
  }, []);

  // 🔵 Runs when count changes
  useEffect(() => {
    console.log("🔵 Count changed:", count);
  }, [count]);

  // 🧹 Cleanup when num changes
  useEffect(() => {
    console.log("⏱️ Effect for num:", num);

    return () => {
      console.log("🧹 Cleanup before next num:", num);
    };
  }, [num]);

  // 👉 onPress functions
  const increaseCount = () => {
    // console.log("👉 Button Clicked: Increase Count");
    setCount(count + 1);
  };

  const increaseNum = () => {
    // console.log("👉 Button Clicked: Increase Num");
    setNum(num + 1);
  };

  const resetAll = () => {
    console.log("👉 Reset All");
    setCount(0);
    setNum(0);
  };

  return (
    <View style={{ padding: 20 }}>

      {/* COUNT SECTION */}
      <View style={{ marginBottom: 20 }}>
        <Text>Count: {count}</Text>

        <TouchableOpacity onPress={increaseCount}>
          <Text>Increase Count</Text>
        </TouchableOpacity>
      </View>

      {/* NUM SECTION */}
      <View style={{ marginBottom: 20 }}>
        <Text>Num: {num}</Text>

        <TouchableOpacity onPress={increaseNum}>
          <Text>Increase Num</Text>
        </TouchableOpacity>
      </View>

      {/* RESET */}
      <View>
        <TouchableOpacity onPress={resetAll}>
          <Text>Reset All</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};