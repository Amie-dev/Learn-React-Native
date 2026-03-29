import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Footer } from '../ProjectComponents/Footer';
import { History } from '../Screen/Bottom/History';
import { Support } from '../Screen/Bottom/Support';
import { Margin } from '../Screen/Bottom/Margin';
import { Settings } from '../Screen/Bottom/Settings';
import HomeScreen from '../Screen/HomeScreen';
export const BottomTabNavigation = () => {
  const Bottom = createBottomTabNavigator();
  return (
    <Bottom.Navigator
      tabBar={props => <Footer {...props} />}
      screenOptions={{
        headerShown: false, // 🔥 hide all headers
      }}
    >
      <Bottom.Screen name="Home" component={HomeScreen} />

      <Bottom.Screen name="Margin" component={Margin} />
      <Bottom.Screen name="Support" component={Support} />
      <Bottom.Screen name="History" component={History} />
      <Bottom.Screen name="Settings" component={Settings} />
    </Bottom.Navigator>
  );
};
