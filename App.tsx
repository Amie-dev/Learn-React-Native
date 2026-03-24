/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import './global.css';
import { NewAppScreen } from '@react-native/new-app-screen';
// components
import CoreComponents from './Chapter/Chapter_03/Example/CoreComponents';
import AdvancedCoreComponents from './Chapter/Chapter_03/Example/Adv_Components';
//Chapter
// style
import InlineStyles from './Chapter/Chapter_04/Example/InlineStyles';
import StyleSheetStyles from './Chapter/Chapter_04/Example/StylesheetSytes';
import StyledComponents from './Chapter/Chapter_04/Example/StyledComponent';
import NativeWind from './Chapter/Chapter_04/Example/NativewindDemo';

//Event Handling
import Main from './Chapter/Chapter_05/Example/Main';

//flexbox and properties
import FlexBoxDemo from "./Chapter/Chapter_06/Example/FlexBoxDemo"
import UI from './Chapter/Chapter_06/Example/UI'

// Chapter 08
import {UseEffectScreen} from './Chapter/Chapter_08/02_useEffect/Test'


// Project
import {Project} from './Project/Project01/Project'

import {App00}  from './Project/Project00/App00'

import {App02} from "./Project/Project02/App02"

// Navagations

import {StackDemo} from "./Chapter/Chapter_07/StackNavigation/StackDemo"
import {DrawerNavigator} from './Chapter/Chapter_07/DrawerNavigation/DrawerNavigator'

import {BottomTabNavigator} from './Chapter/Chapter_07/BottomTab/BottomTabNavigator'


import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      {/* Chapter */}

      {/* Style */}
      {/* <InlineStyles/> */}
      {/* <StyleSheetStyles/> */}
      {/* <StyledComponents/> */}
      {/* <NativeWind/> */}

      {/* core Component */}
      {/* <CoreComponents/> */}
      {/* <AdvancedCoreComponents/> */}

      {/* Handle event */}
      {/* <Main /> */}

      {/* flex  and UI*/}
      {/* <FlexBoxDemo/> */}
      {/* <UI/> */}

      {/* Chapter 08 */}
      <UseEffectScreen/>


      {/* Project */}

      {/* <Project/> */}
      {/* <App00/> */}
      {/* <App02/> */}

      {/* Navigations all*/}
      {/* <StackDemo/> */}
      
      {/* <DrawerNavigator/> */}
      {/* <BottomTabNavigator/> */}



      {/* <AppContent /> */}
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Text
        style={{
          margin: 20,
          textAlign: 'center',
          fontSize: 29,
          backgroundColor: 'black',
          color: 'white',
        }}
      >
        This is from test
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
