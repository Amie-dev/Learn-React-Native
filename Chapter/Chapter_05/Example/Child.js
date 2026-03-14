import { Text, View } from 'react-native';

const Child = ({ name }) => {
  return (
    <View className="w-full h-64 mt-20 bg-black flex items-center justify-center">
      <Text className="text-white text-2xl">{name}</Text>
    </View>
  );
};

export default Child;
