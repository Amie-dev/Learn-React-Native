import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { CustomDrawer } from './CustomDrawer';
// Import Screens
import { Home } from './Screen/Home';
import { Chat } from './Screen/Chat';
import { Help } from './Screen/Help';
import { Setting } from './Screen/Setting';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerActiveTintColor: '#f2f2f2',
          drawerInactiveTintColor: 'gray',
          drawerLabelStyle: {
            fontSize: 16,
            color: 'White',
          },
          drawerActiveBackgroundColor: '#f2f2f2',
          drawerStyle: {
            backgroundColor: 'yellow',
          },
        }}
        // custom drawer
        drawerContent={props => <CustomDrawer {...props} />}
      >
        {/* Home Screen */}
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ size, color }) => (
              <Text style={{ fontSize: size, color }}>🏠</Text>
            ),
            drawerLabel: ({ focused }) => (
              <Text
                style={{
                  fontSize: 16,
                  color: focused ? 'blue' : 'gray',
                }}
              >
                Home
              </Text>
            ),
          }}
        />

        {/* Chat Screen */}
        <Drawer.Screen
          name="Chat"
          component={Chat}
          options={{
            drawerIcon: ({ size, color }) => (
              <Text style={{ fontSize: size, color }}>💬</Text>
            ),
            drawerLabel: ({ focused }) => (
              <Text
                style={{
                  fontSize: 16,
                  color: focused ? 'blue' : 'gray',
                }}
              >
                Chat
              </Text>
            ),
          }}
        />

        {/* Help Screen */}
        <Drawer.Screen
          name="Help"
          component={Help}
          options={{
            drawerIcon: ({ size, color }) => (
              <Text style={{ fontSize: size, color }}>❓</Text>
            ),
            drawerLabel: ({ focused }) => (
              <Text
                style={{
                  fontSize: 16,
                  color: focused ? 'blue' : 'gray',
                }}
              >
                Help
              </Text>
            ),
          }}
        />

        {/* Setting Screen */}
        <Drawer.Screen
          name="Setting"
          component={Setting}
          options={{
            drawerIcon: ({ size, color }) => (
              <Text style={{ fontSize: size, color }}>⚙️</Text>
            ),
            drawerLabel: ({ focused }) => (
              <Text
                style={{
                  fontSize: 16,
                  color: focused ? 'blue' : 'gray',
                }}
              >
                Setting
              </Text>
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


/*
// Custom Drawer

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from './Screen/Home';
import { Chat } from './Screen/Chat';
import { Help } from './Screen/Help';
import { Setting } from './Screen/Setting';
import { CustomDrawer } from './CustomDrawer';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Chat" component={Chat} />
        <Drawer.Screen name="Help" component={Help} />
        <Drawer.Screen name="Setting" component={Setting} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

*/