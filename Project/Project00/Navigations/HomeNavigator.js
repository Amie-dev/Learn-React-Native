import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigation } from './BottomTabNavigation';

// Recharge
import { Mobile } from '../Screen/RechargeBill/Mobile';
import { Broadband } from '../Screen/RechargeBill/Broadband';
import { DTH } from '../Screen/RechargeBill/DTH';
import { FastTag } from '../Screen/RechargeBill/FastTag';
import { Gas } from '../Screen/RechargeBill/Gas';
import { PlayCode } from '../Screen/RechargeBill/PlayCode';
import { PostPaid } from '../Screen/RechargeBill/PostPaid';
import { Water } from '../Screen/RechargeBill/Water';

// Insurance
import { Bike } from '../Screen/Insurance/Bike';
import { Car } from '../Screen/Insurance/Car';
import { Health } from '../Screen/Insurance/Health';

// Help
import { Feedback } from '../Screen/HelpSupport/Feedback';
import { WhatsApp } from '../Screen/HelpSupport/WhatsApp';
import { Email } from '../Screen/HelpSupport/Email';

export const ProjectNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="MainTabs">

      {/* 🔥 Bottom Tabs */}
      <Stack.Screen
        name="MainTabs"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />

      {/* 🔥 All Screens */}
      <Stack.Screen name="Mobile" component={Mobile} />
      <Stack.Screen name="DTH" component={DTH} />
      <Stack.Screen name="Broadband" component={Broadband} />
      <Stack.Screen name="PlayCode" component={PlayCode} />
      <Stack.Screen name="Gas" component={Gas} />
      <Stack.Screen name="Water" component={Water} />
      <Stack.Screen name="PostPaid" component={PostPaid} />
      <Stack.Screen name="FastTag" component={FastTag} />

      <Stack.Screen name="Health" component={Health} />
      <Stack.Screen name="Bike" component={Bike} />
      <Stack.Screen name="Car" component={Car} />

      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="WhatsApp" component={WhatsApp} />
      <Stack.Screen name="Email" component={Email} />

    </Stack.Navigator>
  );
};