import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import EventHandle from "./01_Event_Handling";
import EventHandle_02 from "./02_Event_Handling";
import EventHandle_03 from "./03_Event_handling";
import Child from './Child'
import Hook_Form from "./React_Hook_Form"


const Main = () => {
  console.log("Hit");

  return (
    <ScrollView style={styles.container} className="m-20 mt-20 flex gap-8">
      <EventHandle />
      <EventHandle_02/>
      <EventHandle_03/>
      <Child name="amie"/>
      <Text className="mt-10 font-semibold text-center text-2xl">React Hook Form</Text>
      <Hook_Form/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});

export default Main;