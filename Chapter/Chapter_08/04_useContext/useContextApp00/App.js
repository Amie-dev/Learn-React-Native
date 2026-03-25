import { Child1 } from './components/Child1';
import { UseContextHookScreen } from './useContext';
export const AppScreen = () => {
  return (
    <UseContextHookScreen>
      <AppContent />
    </UseContextHookScreen>
  );
};

const AppContent = () => {
  return (
    <>
      <Child1 />
    </>
  );
};
