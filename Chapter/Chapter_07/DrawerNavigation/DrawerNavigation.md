Alright — here is a **fresh, fully structured, and detailed Chapter 7.2 (Drawer Navigation)** written from scratch, including **custom drawer, styling, and advanced concepts** 👇

---

# 📘 Chapter 7.2 — Drawer Navigation in React Native

---

# 🔷 1. What is Drawer Navigation?

**Drawer Navigation** is a navigation pattern where a **side menu (drawer)** slides in from the left or right side of the screen.

👉 It is used to:

* Provide access to multiple screens
* Organize app sections
* Improve user navigation in large apps

---

## 📱 Real-Life Idea

When you click ☰ (menu icon), a panel opens like:

```id="d1"
☰ Menu
│
├── Home
├── Profile
├── Settings
├── Help
└── Logout
```

---

# 🔷 2. When to Use Drawer Navigation?

## ✅ Use Drawer When:

* Your app has **many sections (5 or more)**
* You need a **main menu**
* You want global navigation access

## ❌ Avoid Drawer When:

* App is small (2–3 screens)
* Simple navigation is enough
* Quick switching is required (use tabs instead)

---

# 🔷 3. Installation & Setup

---

## 📌 Step 1: Install Drawer Navigation

```bash
npm install @react-navigation/drawer
```

---

## 📌 Step 2: Install Required Dependencies

```bash
npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context react-native-vector-icons
```

---

## 📌 Step 3: Setup Gesture Handler

Add at the top of your entry file:

```js
import 'react-native-gesture-handler';
```

---

## 📌 Step 4: iOS Setup

```bash
npx pod-install
```

---

# 🔷 4. Core Concepts

---

## 📌 1. NavigationContainer

* Root component
* Wraps the whole app

---

## 📌 2. createDrawerNavigator()

```js
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
```

👉 Creates drawer navigation system

---

## 📌 3. Drawer.Navigator

```js
<Drawer.Navigator>
```

👉 Container for all drawer screens

---

## 📌 4. Drawer.Screen

```js
<Drawer.Screen name="Home" component={HomeScreen} />
```

👉 Each screen = one menu item

---

# 🔷 5. Basic Drawer Navigation Example

---

## 📌 DrawerNavigator.js

```js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './Screen/HomeScreen';
import ProfileScreen from './Screen/ProfileScreen';
import SettingsScreen from './Screen/SettingsScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
```

---

# 🔷 6. Opening and Closing Drawer

---

## 📌 Using Navigation Methods

```js
navigation.openDrawer();     // open
navigation.closeDrawer();    // close
navigation.toggleDrawer();   // toggle
```

---

## 📌 Example Button

```js
import { Button } from 'react-native';

<Button title="Open Menu" onPress={() => navigation.openDrawer()} />
```

---

# 🔷 7. Adding Hamburger Menu Icon

---

## 📌 Example

```js
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Text style={{ fontSize: 20 }}>☰</Text>
    </TouchableOpacity>
  );
};
```

---

# 🔷 8. Drawer Configuration Options

---

## 📌 Drawer Position

```js
<Drawer.Navigator drawerPosition="left">
```

Options:

* left (default)
* right

---

## 📌 Drawer Type

```js
drawerType="slide"
```

Options:

* front
* back
* slide
* permanent

---

## 📌 Drawer Style

```js
drawerStyle={{
  backgroundColor: '#f0f0f0',
  width: 250
}}
```

---

## 📌 Screen Options

```js
screenOptions={{
  drawerActiveTintColor: 'blue',
  drawerInactiveTintColor: 'gray'
}}
```

---

# 🔷 9. Custom Drawer (IMPORTANT)

---

## 📌 Why Custom Drawer?

Default drawer is simple.
Custom drawer allows:

* Profile section
* Images
* Custom UI
* Logout button

---

## 📌 Step 1: Create Custom Drawer Component

```js
import React from 'react';
import { View, Text, Image } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

export const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>

      {/* Header Section */}
      <View style={{ padding: 20, backgroundColor: '#4a90e2' }}>
        <Image
          source={{ uri: 'https://via.placeholder.com/80' }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            marginBottom: 10
          }}
        />
        <Text style={{ color: '#fff', fontSize: 18 }}>
          Aminul
        </Text>
      </View>

      {/* Drawer Items */}
      <DrawerItemList {...props} />

      {/* Custom Item */}
      <DrawerItem
        label="Logout"
        onPress={() => alert('Logged out')}
      />

    </DrawerContentScrollView>
  );
};
```

---

## 📌 Step 2: Use Custom Drawer

```js
<Drawer.Navigator
  drawerContent={(props) => <CustomDrawer {...props} />}
>
```

---

# 🔷 10. Passing Data Between Screens

---

## 📌 Send Data

```js
navigation.navigate('Profile', { user: 'Aminul' });
```

---

## 📌 Receive Data

```js
import { useRoute } from '@react-navigation/native';

const route = useRoute();
const { user } = route.params;
```

---

# 🔷 11. Combining Drawer with Stack Navigation

---

## 📌 Structure

```id="d2"
Drawer
 ├── Home Stack
 ├── Profile Stack
 └── Settings Stack
```

👉 Each drawer item can have its own stack

---

# 🔷 12. Styling Tips

---

## 📌 Better UI

```js
screenOptions={{
  drawerStyle: {
    backgroundColor: '#fff',
    width: 260
  },
  drawerActiveBackgroundColor: '#e6f0ff',
  drawerActiveTintColor: '#1e90ff',
  drawerLabelStyle: {
    fontSize: 16,
    fontWeight: '600'
  }
}}
```

---

# 🔷 13. Best Practices

---

✔ Keep drawer simple and clean
✔ Use icons for better UX
✔ Group related items
✔ Use custom drawer for branding
✔ Combine with stack navigation

---

# 🔷 14. Common Mistakes

---

❌ Forgetting gesture handler import
❌ Not wrapping with NavigationContainer
❌ Too many drawer items
❌ Poor UI design

---

# 🔷 15. Drawer vs Other Navigation

| Feature  | Drawer     | Stack           | Tab          |
| -------- | ---------- | --------------- | ------------ |
| UI       | Sidebar    | Full screen     | Bottom bar   |
| Use      | Menu       | Flow            | Quick switch |
| Best for | Large apps | Screen sequence | Few screens  |

---

# 🔷 16. Real App Example

```id="d3"
App
 ├── Drawer
 │     ├── Dashboard
 │     ├── Profile
 │     ├── Orders
 │     ├── Settings
 │     └── Logout
```

---

# 🔷 17. Final Summary

---

✔ Drawer Navigation = Sidebar menu
✔ Built using `createDrawerNavigator()`
✔ Supports:

* Open/Close drawer
* Custom UI
* Styling
* Nested navigation

✔ Best for:

* Large applications
* Apps with multiple sections

---

