import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export const UseEffectScreen = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Aminul");

  // 🔁 1. Runs on EVERY render
  useEffect(() => {
    console.log("🔁 Runs on every render");
  });

  // 🟢 2. Runs ONLY ONCE (Component Mount)
  useEffect(() => {
    console.log("🟢 Runs only once (Component Mounted)");
  }, []);

  // 🔵 3. Runs when DEPENDENCY changes
  useEffect(() => {
    console.log("🔵 Count changed:", count);
  }, [count]);

  // 🧹 4. Cleanup Example
  useEffect(() => {
    console.log("⏱️ Timer started");

    const timer = setInterval(() => {
      console.log("Running interval...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("🧹 Cleanup: Timer cleared");
    };
  }, []);

  return (
    <View style={{ padding: 20 }}>

      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        useEffect Deep Dive
      </Text>

      {/* 🔁 Every Render */}
      <View style={{ marginBottom: 20 }}>
        <Text>1. Runs Every Render</Text>
        <Text>Open console to see logs</Text>
      </View>

      {/* 🟢 One Time */}
      <View style={{ marginBottom: 20 }}>
        <Text>2. Runs Only Once</Text>
      </View>

      {/* 🔵 Dependency Example */}
      <View style={{ marginBottom: 20 }}>
        <Text>3. With Dependency (Count)</Text>
        <Text>Count: {count}</Text>

        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Text>Increase Count</Text>
        </TouchableOpacity>
      </View>

      {/* 🧹 Cleanup Example */}
      <View style={{ marginBottom: 20 }}>
        <Text>4. Cleanup Function (Check Console)</Text>
      </View>

      {/* Extra Interaction */}
      <View style={{ marginTop: 20 }}>
        <Text>Name: {name}</Text>

        <TouchableOpacity onPress={() => setName("React Native")}>
          <Text>Change Name</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};