Alright — here is a **fully structured, detailed, and clean 📘 Chapter 7.3: Bottom Tab Navigation** written from scratch (same quality as your previous chapters).

---

# 📘 Chapter 7.3 — Bottom Tab Navigation (React Native)

---

# 🔷 1. What is Bottom Tab Navigation?

**Bottom Tab Navigation** provides a **tab bar at the bottom of the screen** that allows users to quickly switch between different screens.

👉 Each tab represents a **separate screen or section**

---

## 📱 Real-Life Examples

* Instagram (Home, Search, Reels, Profile)
* WhatsApp (Chats, Status, Calls)

---

## 📊 Visual Idea

```id="tab1"
-------------------------
|       Screen Content  |
-------------------------
| Home | Chat | Profile |
-------------------------
```

---

# 🔷 2. When to Use Bottom Tabs?

---

## ✅ Use Bottom Tabs When:

* You have **3–5 main screens**
* Users need **quick switching**
* Screens are equally important

---

## ❌ Avoid When:

* Too many screens (use Drawer instead)
* Deep navigation flow needed (use Stack)

---

# 🔷 3. Installation & Setup

---

## 📌 Step 1: Install Bottom Tabs

```bash id="tab2"
npm install @react-navigation/bottom-tabs
```

---

## 📌 Step 2: Install Dependencies (if not already)

```bash id="tab3"
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
```

---

## 📌 Step 3: Import Gesture Handler

```js id="tab4"
import 'react-native-gesture-handler';
```

---

## 📌 Step 4: iOS Setup

```bash id="tab5"
npx pod-install
```

---

# 🔷 4. Core Components

---

## 📌 1. NavigationContainer

* Root wrapper for app

---

## 📌 2. createBottomTabNavigator()

```js id="tab6"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
```

---

## 📌 3. Tab.Navigator

```js id="tab7"
<Tab.Navigator>
```

👉 Holds all tab screens

---

## 📌 4. Tab.Screen

```js id="tab8"
<Tab.Screen name="Home" component={HomeScreen} />
```

👉 Each tab = one screen

---

# 🔷 5. Basic Bottom Tab Example

---

## 📌 BottomTabNavigator.js

```js id="tab9"
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './Screen/HomeScreen';
import ChatScreen from './Screen/ChatScreen';
import ProfileScreen from './Screen/ProfileScreen';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>

        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};
```

---

# 🔷 6. How Tabs Work

```id="tab10"
Tap on Tab
↓
Screen changes instantly
↓
Each tab keeps its own state
```

---

# 🔷 7. Adding Icons to Tabs (IMPORTANT)

---

## 📌 Install Icons

```bash id="tab11"
npm install react-native-vector-icons
```

---

## 📌 Example with Icons

```js id="tab12"
import Icon from 'react-native-vector-icons/Ionicons';

<Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      let iconName;

      if (route.name === 'Home') iconName = 'home';
      else if (route.name === 'Chat') iconName = 'chatbubble';
      else if (route.name === 'Profile') iconName = 'person';

      return <Icon name={iconName} size={size} color={color} />;
    }
  })}
>
```

---

# 🔷 8. Tab Configuration Options

---

## 📌 Active & Inactive Colors

```js id="tab13"
screenOptions={{
  tabBarActiveTintColor: 'blue',
  tabBarInactiveTintColor: 'gray'
}}
```

---

## 📌 Tab Bar Style

```js id="tab14"
tabBarStyle: {
  backgroundColor: '#fff',
  height: 60
}
```

---

## 📌 Label Style

```js id="tab15"
tabBarLabelStyle: {
  fontSize: 12,
  fontWeight: '600'
}
```

---

## 📌 Hide Header

```js id="tab16"
options={{ headerShown: false }}
```

---

# 🔷 9. Customizing Tab Bar

---

## 📌 Example Styling

```js id="tab17"
<Tab.Navigator
  screenOptions={{
    tabBarStyle: {
      backgroundColor: '#f8f8f8',
      borderTopWidth: 0,
      elevation: 5
    },
    tabBarActiveTintColor: '#1e90ff',
    tabBarInactiveTintColor: '#888'
  }}
>
```

---

# 🔷 10. Passing Data Between Tabs

---

## 📌 Send Data

```js id="tab18"
navigation.navigate('Profile', { name: 'Aminul' });
```

---

## 📌 Receive Data

```js id="tab19"
import { useRoute } from '@react-navigation/native';

const route = useRoute();
const { name } = route.params;
```

---

# 🔷 11. Combining Tabs with Stack Navigation

---

## 📌 Structure

```id="tab20"
Bottom Tabs
 ├── Home Stack
 ├── Chat Stack
 └── Profile Stack
```

👉 Each tab can have its own stack

---

# 🔷 12. When to Use What?

---

| Navigation Type | Use Case        |
| --------------- | --------------- |
| Stack           | Screen flow     |
| Drawer          | Menu            |
| Tabs            | Quick switching |

---

# 🔷 13. Best Practices

---

✔ Keep 3–5 tabs only
✔ Use meaningful icons
✔ Keep labels short
✔ Avoid deep nesting inside tabs
✔ Combine with stack navigation

---

# 🔷 14. Common Mistakes

---

❌ Too many tabs
❌ Missing icons
❌ Poor styling
❌ Not installing dependencies
❌ Not handling header properly

---

# 🔷 15. Real App Example

```id="tab21"
App
 ├── Tabs
 │     ├── Home
 │     ├── Chat
 │     ├── Notifications
 │     └── Profile
```

---

# 🔷 16. Advanced Options

---

## 📌 Hide Tab Bar on Specific Screen

```js id="tab22"
options={{ tabBarStyle: { display: 'none' } }}
```

---

## 📌 Lazy Loading

```js id="tab23"
lazy={true}
```

👉 Loads screen only when opened

---

# 🔷 17. Final Summary

---

✔ Bottom Tabs = Quick navigation
✔ Built using `createBottomTabNavigator()`
✔ Best for:

* 3–5 screens
* Fast switching

✔ Key Features:

* Icons
* Styling
* Independent state per tab

---


