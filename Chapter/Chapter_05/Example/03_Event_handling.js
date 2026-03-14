import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import Child from './Child';

const EventHandle_03 = () => {
  const [inputText, setInputText] = useState('');

  return (
    <View className="mt-5 flex items-center justify-center gap-3">
      <Text className="font-semibold">Input Text: {inputText}</Text>

      <TextInput
        placeholder="Enter input text"
        value={inputText}
        onChangeText={text => setInputText(text)}
        className="p-5 px-10 border-rose-100 border-2 rounded-md w-60"
      />
      {inputText.trim() !== '' ? <Child name={inputText} /> : ''}
    </View>
  );
};

export default EventHandle_03;
