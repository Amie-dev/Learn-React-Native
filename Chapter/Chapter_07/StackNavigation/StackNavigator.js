import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './Screen/HomeScreen';
import { AboutScreen } from './Screen/About';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Home Screen' }}
        />

        <Stack.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{ title: 'About Screen' ,
            headerShown:false
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


// import { HomeScreen } from './Screen/HomeScreen';
// import { AboutScreen } from './Screen/About';


// import {NavigationContainer} from "@react-navigation/native"

// import {createStackNavigator} from "@react-navigation/stack"

// const Stack=createStackNavigator()


// export const StackNavigation=()=>{
//   return(
//     <NavigationContainer>

// <Stack.Navigator

// >
//   <Stack.Screen  name="HomeScreen" component={HomeScreen} 
//   options={{title:"Home Screen"}} />
//   <Stack.Screen name='AboutScreen'  
//   component={AboutScreen}
//   options={{
//     title:"About Screen"
//   }}

//   />

// </Stack.Navigator>

//     </NavigationContainer>
//   )
// }