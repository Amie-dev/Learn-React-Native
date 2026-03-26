import { useMemo, useState } from 'react';
import { View, Text, Alert } from 'react-native';

export const UseMemoScreen = () => {
  const [count, setCount] = useState(0);

  const [count1, setCount1] = useState(0);

  const calculateValue = x => {
    Alert.alert('This is only show When change Counter 2');
    return x * 10;
  };

  // const calculatedValue=calculateValue(count1)  /* without useMemo every time any component re-render this will run */

  const calculatedValue = useMemo(() => calculateValue(count1), [count1]);

  return (
    <View>
      <Text>UseMemo</Text>

      {/* Counter 1 */}
      <View>
        <Text>Counter 1 : {count}</Text>
        <Text onPress={() => setCount(Math.floor(Math.random() * 2000 + 1))}>
          Change Counter 1
        </Text>
      </View>

      {/* Counter 2 */}
      <View>
        <Text>Counter 2 : {count1}</Text>
        <Text onPress={() => setCount1(Math.floor(Math.random() * 2000 + 1))}>
          Change Counter 2
        </Text>

        <Text>Counter 2 * 10 = {calculatedValue}</Text>
      </View>
    </View>
  );
};
