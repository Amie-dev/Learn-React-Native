Alright — now let’s create a **complete master note 📘 (Chapter 7 Summary)** that includes **ALL navigation types together** in a clean, structured, and revision-friendly format.

---

# 📘 Chapter 7 — React Native Navigation (Complete Notes)

---

# 🔷 1. Introduction to Navigation

Navigation is the process of moving between different screens in a mobile application.

👉 In React Native, navigation is handled using:

* React Navigation

---

# 🔷 2. Types of Navigation

There are **3 main navigation types**:

```id="navtypes"
1. Stack Navigation
2. Drawer Navigation
3. Bottom Tab Navigation
```

---

# 🔷 3. Common Installation (For All)

```bash id="install"
npm install @react-navigation/native

npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
```

👉 Additional packages:

```bash id="install2"
# Stack
npm install @react-navigation/stack

# Drawer
npm install @react-navigation/drawer

# Bottom Tabs
npm install @react-navigation/bottom-tabs
```

---

# 🔷 4. Core Components (Used Everywhere)

---

## 📌 1. NavigationContainer

```js id="core1"
<NavigationContainer>
```

✔ Root wrapper
✔ Manages navigation state

---

## 📌 2. Navigator

Examples:

```js id="core2"
Stack.Navigator
Drawer.Navigator
Tab.Navigator
```

✔ Holds screens

---

## 📌 3. Screen

```js id="core3"
<Stack.Screen name="Home" component={HomeScreen} />
```

✔ Represents each screen

---

# 🔷 5. Stack Navigation

---

## 📌 Concept

* Based on **LIFO (Last In First Out)**
* Works like screen history

---

## 📊 Flow

```id="stackflow"
Home → Profile → Settings
        ← goBack()
```

---

## 📌 Key Methods

| Method   | Use                |
| -------- | ------------------ |
| navigate | Normal navigation  |
| push     | Multiple instances |
| goBack   | Back               |
| pop      | Remove screens     |
| replace  | Replace screen     |

---

## 📌 Use Case

✔ Login flow
✔ Form steps
✔ Screen transitions

---

# 🔷 6. Drawer Navigation

---

## 📌 Concept

* Sidebar menu
* Hidden navigation panel

---

## 📊 Structure

```id="drawerflow"
☰ Menu
 ├── Home
 ├── Profile
 └── Settings
```

---

## 📌 Key Methods

| Method       | Use         |
| ------------ | ----------- |
| openDrawer   | Open menu   |
| closeDrawer  | Close menu  |
| toggleDrawer | Toggle menu |
| navigate     | Move screen |

---

## 📌 Use Case

✔ Apps with many sections
✔ Dashboard apps
✔ Admin panels

---

# 🔷 7. Bottom Tab Navigation

---

## 📌 Concept

* Tabs at bottom
* Fast switching

---

## 📊 Layout

```id="tabflow"
[ Home | Chat | Profile ]
```

---

## 📌 Features

✔ Icons
✔ Independent state
✔ Fast switching

---

## 📌 Use Case

✔ Social media apps
✔ Small apps with main sections

---

# 🔷 8. Comparison of Navigation Types

---

| Feature | Stack       | Drawer     | Tabs         |
| ------- | ----------- | ---------- | ------------ |
| UI      | Full screen | Sidebar    | Bottom bar   |
| Flow    | Sequential  | Menu-based | Parallel     |
| Use     | Screen flow | Sections   | Quick switch |
| Example | Login flow  | Dashboard  | Instagram    |

---

# 🔷 9. Navigation Methods Summary

---

| Method       | Description     |
| ------------ | --------------- |
| navigate     | Go to screen    |
| push         | New instance    |
| goBack       | Previous screen |
| pop          | Remove screens  |
| replace      | Replace screen  |
| openDrawer   | Open drawer     |
| toggleDrawer | Toggle drawer   |

---

# 🔷 10. Passing Data Between Screens

---

## 📌 Send Data

```js id="data1"
navigation.navigate('Profile', { name: 'Aminul' });
```

---

## 📌 Receive Data

```js id="data2"
import { useRoute } from '@react-navigation/native';

const route = useRoute();
const { name } = route.params;
```

---

# 🔷 11. Navigation Hooks

---

## 📌 useNavigation

```js id="hook1"
const navigation = useNavigation();
```

✔ Used to navigate

---

## 📌 useRoute

```js id="hook2"
const route = useRoute();
```

✔ Access params

---

# 🔷 12. Combining Navigation Types (IMPORTANT)

---

## 📊 Real App Structure

```id="combine"
Drawer
 ├── Home (Tab Navigation)
 │      ├── Feed
 │      ├── Chat
 │      └── Profile
 ├── Settings
 └── Logout
```

---

👉 Explanation:

* Drawer = Main menu
* Tabs = Quick switching
* Stack = Inside each screen

---

# 🔷 13. Example Structure Code

```js id="combinecode"
<NavigationContainer>
  <Drawer.Navigator>

    <Drawer.Screen name="HomeTabs" component={TabNavigator} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />

  </Drawer.Navigator>
</NavigationContainer>
```

---

# 🔷 14. Best Practices

---

✔ Use Stack for screen flow
✔ Use Tabs for main sections
✔ Use Drawer for large apps
✔ Combine navigators properly
✔ Keep UI clean

---

# 🔷 15. Common Mistakes

---

❌ Using wrong navigator type
❌ Too many tabs or drawer items
❌ Not structuring navigation properly
❌ Missing dependencies

---

# 🔷 16. Quick Decision Guide

```id="decision2"
Need screen flow? → Stack
Need side menu? → Drawer
Need quick switch? → Tabs
```

---

# 🔷 17. Final Summary

---

✔ Navigation is core of mobile apps
✔ Three main types:

* Stack → Flow
* Drawer → Menu
* Tabs → Quick switch

✔ Combine them for real apps

---

# 🚀 Final Tip

👉 **Real apps NEVER use just one navigation type**
They use a combination like:

```id="final"
Drawer + Tabs + Stack = Complete App
```

---

---
