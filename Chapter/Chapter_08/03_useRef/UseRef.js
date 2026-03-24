import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

export const UseRefHookScreen = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  const previousCount = useRef(0);
  const intervalRef = useRef(null);
  
// const prev = previousCount.current;


  // ✅ Track previous count
  useEffect(() => {
    console.log('Before update:', previousCount.current);
    console.log('Current value:', count);

    previousCount.current = count;
  }, [count]);

  // ✅ Timer using useRef (BEST PRACTICE)
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <View style={{ padding: 20 }}>
      {/* Count Section */}
      <View style={{ marginBottom: 20 }}>
        <Text>Current Count: {count}</Text>
         {/* <Text>Previous Count: {prev}</Text> */}
        <Text>Previous Count: {previousCount.current}</Text>

        <TouchableOpacity
          onPress={() => setCount(Math.floor(Math.random() * 100))}
        >
          <Text>Change Count</Text>
        </TouchableOpacity>
      </View>

      {/* Input Focus */}
      <View style={{ marginBottom: 20 }}>
        <TextInput
          ref={inputRef1}
          placeholder="Input 1"
          style={{ borderWidth: 1, marginBottom: 10 }}
        />
        <Button
          title="Focus Input 1"
          onPress={() => inputRef1.current.focus()}
        />
      </View>

      <View style={{ marginBottom: 20 }}>
        <TextInput
          ref={inputRef2}
          placeholder="Input 2"
          style={{ borderWidth: 1, marginBottom: 10 }}
        />
        <Button
          title="Focus Input 2"
          onPress={() => inputRef2.current.focus()}
        />
      </View>

      {/* Timer Section */}
      <View>
        <Text>Timer: {timer}</Text>

        <Button
          title="Stop Timer"
          onPress={() => clearInterval(intervalRef.current)}
        />
      </View>
    </View>
  );
};
