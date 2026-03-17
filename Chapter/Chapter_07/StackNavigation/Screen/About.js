import { useNavigationState, useRoute } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';

export const AboutScreen = ({ navigation }) => {
  const route = useRoute();
  const states=useNavigationState(state=>state.routes.length)

  console.log(route);
  console.log('Routes', useNavigationState(state=>(
    state
  )))

  return (
    <View>
      <Text>About Screen {route.params.name}</Text>

      <Text>
        {route.params.user.name}

        {route.params.user.age}
        {route.params.user.isPass}
        {route.params.user.onClick}
      </Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};
