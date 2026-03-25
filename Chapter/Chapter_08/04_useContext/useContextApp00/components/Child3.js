import { useContext } from 'react';
import { View, Text } from 'react-native';
import { UserContext } from '../useContext';
export const Child3 = () => {
  const newUser = useContext(UserContext);
  console.log(newUser);
  return (
    <View>
      <Text>Child 3</Text>
      <Text>Name : {newUser.name}</Text>
      <Text>Age : {newUser.age}</Text>
    </View>
  );
};
