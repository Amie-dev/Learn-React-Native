import { useCallback, useEffect } from 'react';
import { Button, Text, View } from 'react-native';

export const UseCallBackScreen = () => {
  const [count, setCount] = useState(0);

  const fetchData = useCallback(() => {
    console.log('Fetching.....');
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <View>
      <Text>Count : {count}</Text>
      <Button
        onPress={() => {
          setCount(prev => prev + 1);
        }}
        title="Increment"
      />
    </View>
  );
};
