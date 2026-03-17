import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  // const navigation=useNavigation
  return (
    <View>
      <Text>Home Screen</Text>

      <Button
        title="Go to About"
        onPress={() => navigation.navigate("AboutScreen",{
          name:"Aminul From Home Page",
          user:{
            name:"Aminul"
            ,
            age:20,
            isPass:true,
            onClick:()=>(`Onclick`)
          }
        })}
      />
    </View>
  );
};