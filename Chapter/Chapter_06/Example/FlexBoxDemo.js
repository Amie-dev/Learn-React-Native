import { View, Text } from 'react-native';
const FlexBoxDemo = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'red', flexWrap: '' }}>
      <View
        style={{ width: '100', height: '100', backgroundColor: 'yellow' }}
      ></View>
      <View
        style={{ width: '100', height: '100', backgroundColor: 'black' }}
      ></View>
    </View>
  );
};

export default FlexBoxDemo;

