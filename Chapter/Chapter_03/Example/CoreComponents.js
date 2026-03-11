import React, { useState } from 'react';
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  SectionList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// SafeAreaView prevents content from overlapping
// with device notch, status bar, or system UI
import { SafeAreaView } from 'react-native-safe-area-context';

const CoreComponents = () => {

  // ---------------- STATE ----------------
  // useState is used to store user input
  const [name, setName] = useState('');

  // ---------------- DATA FOR FLATLIST ----------------
  const listData = [1, 2, 3, 4, 5, 6, 7];

  // ---------------- DATA FOR SECTIONLIST ----------------
  const sectionData = [
    {
      title: 'Fruits',
      data: ['Apple', 'Mango', 'Banana'],
    },
    {
      title: 'Vegetables',
      data: ['Carrot', 'Potato', 'Tomato'],
    },
  ];

  return (

    // SafeAreaView protects UI from system UI areas
    <SafeAreaView style={{ flex: 1 }}>

      {/* ScrollView allows vertical scrolling when content exceeds screen */}
      <ScrollView>

        {/* Main container similar to <div> in web */}
        <View
          onLayout={(e) => {
            // onLayout event gives width/height/position
            console.log('Parent View Layout:', e.nativeEvent.layout);
          }}
          style={{
            backgroundColor: 'lightblue',
            padding: 20,
          }}
        >

          {/* Nested View used for layout grouping */}
          <View
            style={{
              backgroundColor: 'green',
              height: 200,
              width: 200,
              margin: 20,
            }}
          />

          {/* TEXT COMPONENT */}
          {/* Used to display text */}
          <Text
            style={{
              fontSize: 30,
              color: 'black',
              textAlign: 'center',
              marginBottom: 20,
            }}
            numberOfLines={1} // restricts number of lines
            ellipsizeMode="tail" // adds "..." if text overflows
          >
            This is a React Native Text Component Example
          </Text>

          {/* IMAGE FROM INTERNET */}
          <Image
            source={{
              uri: 'https://picsum.photos/200',
            }}
            style={{
              width: 80,
              height: 80,
              marginBottom: 20,
              backgroundColor: 'yellow',
            }}
            resizeMode="cover"
          />

          {/* LOCAL IMAGE EXAMPLE */}
          {/* 
          <Image
            source={require('./assets/logo.png')}
            style={{
              width: 80,
              height: 80,
              marginBottom: 20,
            }}
            resizeMode="contain"
          />
          */}

          {/* TEXT INPUT FIELD */}
          {/* Used to get user input */}
          <TextInput
            placeholder="Enter your name"
            value={name}
            onChangeText={(text) => setName(text)}
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              padding: 10,
              marginBottom: 15,
              borderRadius: 5,
            }}
          />

          {/* PASSWORD INPUT */}
          <TextInput
            placeholder="Enter Password"
            secureTextEntry={true} // hides password text
            onChange={(e) =>
              console.log('From onChange:', e.nativeEvent.text)
            }
            onChangeText={(text) =>
              console.log('From onChangeText:', text)
            }
            onFocus={() => console.log('Input Focused')}
            onBlur={() => console.log('Input Lost Focus')}
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              padding: 10,
              marginBottom: 20,
              borderRadius: 5,
            }}
          />

          {/* CUSTOM BUTTON USING TOUCHABLEOPACITY */}
          <TouchableOpacity
            onPress={() => {
              console.log('Login Button Pressed');
            }}
            activeOpacity={0.7}
            style={{
              backgroundColor: 'purple',
              padding: 12,
              marginBottom: 20,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>
              Login
            </Text>
          </TouchableOpacity>

          {/* DEFAULT BUTTON */}
          <Button
            title="Logout"
            color="red"
            onPress={() => console.log('Logout Pressed')}
          />

          {/* ---------------- FLATLIST SECTION ---------------- */}

          {/* Container with fixed height so FlatList can scroll */}
          <View style={{ height: 300 }}>

            {/* FlatList renders large lists efficiently */}
            <FlatList
              nestedScrollEnabled={true} // allows scrolling inside ScrollView
              style={{ marginTop: 20 }}
              data={listData}

              // unique key for each item
              keyExtractor={(item, index) => index.toString()}

              // each item render
              renderItem={({ item }) => (
                <View
                  style={{
                    backgroundColor: '#eee',
                    padding: 10,
                    marginVertical: 5,
                    borderRadius: 5,
                  }}
                >
                  <Text>Item: {item}</Text>
                </View>
              )}

              // header of the list
              ListHeaderComponent={
                <Text style={{ fontSize: 20, marginBottom: 10 }}>
                  FlatList Header
                </Text>
              }

              // footer of the list
              ListFooterComponent={
                <Text style={{ marginTop: 10 }}>
                  FlatList Footer
                </Text>
              }
            />
          </View>

          {/* ---------------- SECTIONLIST ---------------- */}

          {/* SectionList renders grouped lists */}
          <SectionList
            style={{ marginTop: 30 }}
            sections={sectionData}

            // unique key for each item
            keyExtractor={(item, index) => item + index}

            // item render
            renderItem={({ item }) => (
              <Text style={{ padding: 10 }}>{item}</Text>
            )}

            // section header render
            renderSectionHeader={({ section }) => (
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  backgroundColor: '#ddd',
                  padding: 6,
                }}
              >
                {section.title}
              </Text>
            )}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CoreComponents;