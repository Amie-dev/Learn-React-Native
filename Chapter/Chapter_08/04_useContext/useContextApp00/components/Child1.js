import { View, Text } from 'react-native';
import { Child2 } from './Child2';
export const Child1 = () => {
  return (
    <View>
      <Text>Child 1</Text>
      <Child2/>
    </View>
  );
};
