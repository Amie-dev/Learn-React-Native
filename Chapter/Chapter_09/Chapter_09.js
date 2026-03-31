import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Chapter_09 = () => {

  const [data, setData] = useState('');
  const [array, setArray] = useState([]);
  const [obj, setObj] = useState({});
  const [num, setNum] = useState('');
  const [input, setInput] = useState('');

  const KEY = 'MY_DATA';

  // 🔹 Save Data
  const saveData = async () => {
    try {
      await AsyncStorage.setItem(KEY, input);
      console.log('Data Saved');
      setInput('');
    } catch (error) {
      console.log('Save Error', error);
    }
  };

  // 🔹 Get Data
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(KEY);
      if (value !== null) {
        setData(value);
      }
    } catch (error) {
      console.log('Get Error', error);
    }
  };

  // 🔹 Update Data
  const updateData = async () => {
    try {
      const updatedValue = input + ' (Updated)';
      await AsyncStorage.setItem(KEY, updatedValue);
      console.log('Data Updated');
      setInput('');
    } catch (error) {
      console.log('Update Error', error);
    }
  };

  // 🔹 Delete Data
  const deleteData = async () => {
    try {
      await AsyncStorage.removeItem(KEY);
      setData('');
      console.log('Data Deleted');
    } catch (error) {
      console.log('Delete Error', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Async Storage</Text>

      <View>
        <Text>Save String Data</Text>

        <TextInput
          placeholder='Enter Data'
          value={input}
          onChangeText={setInput}
          style={styles.input}
        />

        <Text>Get Data: {data}</Text>

        <View style={styles.btnContainer}>
          <Button onPress={saveData} title='Save Data' />
          <Button title='Get Data' onPress={getData} />
          <Button title='Delete Data' onPress={deleteData} />
          <Button title='Update Data' onPress={updateData} />
        </View>
      </View>
    </View>
  )
}

export default Chapter_09

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
  btnContainer: {
    gap: 10,
  }
});