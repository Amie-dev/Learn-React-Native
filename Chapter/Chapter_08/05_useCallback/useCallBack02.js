import { Button, Text, TouchableOpacity, View } from 'react-native';
import { Child } from './child';
import { useCallback, useState } from 'react';

export const UseCallBackScreen02 = () => {
  const [count, setCount] = useState(0);
  const [toggleTheme, settoggleTheme] = useState(false);

  const onPress = useCallback(() => {
    console.log('Run Only when Child or inside Child childern Here Click');
    console.log(toggleTheme);
    setCount(prev => prev + 1);
  }, [toggleTheme]);

  return (
    <View>
      <View>
        <Text>Child is Here</Text>
        <Child onPress={onPress} />
      </View>
      <TouchableOpacity onPress={() => settoggleTheme(!toggleTheme)}>
        <Text>Toggle Theme : {toggleTheme}</Text>
      </TouchableOpacity>
    </View>
  );
};
