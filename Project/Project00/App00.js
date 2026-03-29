import { NavigationContainer } from '@react-navigation/native';
import { ProjectNavigation } from './Navigations/HomeNavigator';
import { BottomTabNavigation } from './Navigations/BottomTabNavigation';
export const App00 = () => {
  return (
    <NavigationContainer>
      <ProjectNavigation />
      {/* <BottomTabNavigation /> */}
    </NavigationContainer>
  );
};
