import { Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";

import { Home } from "./Screen/Home";
import { Chat } from "./Screen/Chat";
import { Help } from "./Screen/Help";
import { Setting } from "./Screen/Setting";
import {CustomBottomTab} from "./CustomeBottomTab"
const Bottom = createBottomTabNavigator();
//defult
// export const BottomTabNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Bottom.Navigator
//         screenOptions={{
//           tabBarActiveTintColor: "blue",
//           tabBarInactiveTintColor: "gray",
//           headerShown: true,
//         }}
       
//       >

//         {/* Home */}
//         <Bottom.Screen
//           name="Home"
//           component={Home}
//           options={{
//             tabBarIcon: ({ size, color }) => (
//               <Text style={{ fontSize: size, color }}>🏠</Text>
//             ),
//           }}
//         />

//         {/* Chat */}
//         <Bottom.Screen
//           name="Chat"
//           component={Chat}
//           options={{
//             tabBarIcon: ({ size, color }) => (
//               <Text style={{ fontSize: size, color }}>💬</Text>
//             ),
//           }}
//         />

//         {/* Help */}
//         <Bottom.Screen
//           name="Help"
//           component={Help}
//           options={{
//             tabBarIcon: ({ size, color }) => (
//               <Text style={{ fontSize: size, color }}>❓</Text>
//             ),
//           }}
//         />

//         {/* Setting */}
//         <Bottom.Screen
//           name="Setting"
//           component={Setting}
//           options={{
//             tabBarIcon: ({ size, color }) => (
//               <Text style={{ fontSize: size, color }}>⚙️</Text>
//             ),
//           }}
//         />

//       </Bottom.Navigator>
//     </NavigationContainer>
//   );
// };

//Custom
export const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Bottom.Navigator
        tabBar={(props) => <CustomBottomTab {...props} />}
        screenOptions={{
          headerShown: false, // 🔥 hide all headers
        }}
      >
        <Bottom.Screen name="Home" component={Home} />
        <Bottom.Screen name="Chat" component={Chat} />
        <Bottom.Screen name="Help" component={Help} />
        <Bottom.Screen name="Setting" component={Setting} />
      </Bottom.Navigator>
    </NavigationContainer>
  );
};