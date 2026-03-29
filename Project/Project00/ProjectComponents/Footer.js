import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export const Footer = ({ state, navigation }) => {
  const [pressed, setPressed] = useState(null);
  console.log(state, navigation);
  const tabs = [
    { name: 'Home', icon: '🏠' },
    { name: 'Margin', icon: '💰' },
    { name: 'Support', icon: '🎧', center: true }, // center button
    { name: 'History', icon: '📜' },
    { name: 'Settings', icon: '⚙️' },
  ];

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 8,
        borderTopWidth: 1,
        borderColor: '#ddd',
      }}
    >
      {tabs.map((tab, index) => {
        const isFocused = state.index === index;
        const isPressed = pressed === tab.name;

        const onPress = () => {
          navigation.navigate(tab.name);
        };

        // 🔥 Center Button UI
        if (tab.center) {
          return (
            <TouchableOpacity
              key={tab.name}
              onPress={onPress}
              onPressIn={() => setPressed(tab.name)}
              onPressOut={() => setPressed(null)}
              style={{ alignItems: 'center', marginTop: -30 }}
            >
              <View
                style={{
                  width: 65,
                  height: 65,
                  backgroundColor: '#1e40af',
                  borderRadius: 35,
                  justifyContent: 'center',
                  alignItems: 'center',
                  transform: [{ scale: isPressed ? 1.2 : 1 }],
                  elevation: 6,
                }}
              >
                <Text style={{ fontSize: 28, color: 'white' }}>{tab.icon}</Text>
              </View>

              <Text style={{ fontSize: 12, color: '#1e40af', marginTop: 4 }}>
                {tab.name}
              </Text>
            </TouchableOpacity>
          );
        }

        // 🔥 Normal Tabs
        return (
          <TouchableOpacity
            key={tab.name}
            onPress={onPress}
            onPressIn={() => setPressed(tab.name)}
            onPressOut={() => setPressed(null)}
            style={{ alignItems: 'center' }}
          >
            <Text
              style={{
                fontSize: 22,
                color: isFocused ? '#1e40af' : 'gray',
                transform: [{ scale: isPressed ? 1.3 : 1 }],
              }}
            >
              {tab.icon}
            </Text>

            <Text
              style={{
                fontSize: 12,
                color: isFocused ? '#1e40af' : 'gray',
              }}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
