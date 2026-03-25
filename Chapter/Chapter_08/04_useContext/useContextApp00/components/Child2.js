import { View, Text } from 'react-native';
import { Child3 } from './Child3';
export const Child2 = () => {
  return (
    <View>
      <Text>Child 2</Text>
      <Child3/>
    </View>
  );
};
