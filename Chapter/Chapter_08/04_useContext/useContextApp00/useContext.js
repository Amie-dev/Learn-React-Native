import { View, Text, SafeAreaView } from 'react-native';
import { Child1 } from './components/Child1';
import { Child2 } from './components/Child2';
import { Child3 } from './components/Child3';
import { createContext } from 'react';

export const UserContext = createContext();

export const UseContextHookScreen = ({ Childern }) => {
  console.log('Component is pass or not ', Childern);
  return (
    <UserContext.Provider
      value={{
        name: 'Aminul',
        age: '20',
      }}
    >
      <Child1 />
      {Childern}
    </UserContext.Provider>
  );
};
