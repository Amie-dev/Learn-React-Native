Here is a **React Native Chapter 06 Practice Project** that helps you practice:

- **Flexbox Layout**
- **Responsive Design**
- **Dimensions API**
- **Platform-specific Styling**

This project builds a **Responsive Dashboard UI** with cards arranged using **Flexbox**.

---

# React Native Chapter 06 Practice Project

## Responsive Dashboard UI

### Features

This project demonstrates:

- Flexbox layout
- Responsive cards
- Dynamic screen width using Dimensions
- Platform-specific styling
- Grid layout

---

# Project UI Layout

```
-------------------------
|       Header          |
-------------------------
|   Card   |   Card     |
-------------------------
|   Card   |   Card     |
-------------------------
|        Footer         |
-------------------------
```

The layout automatically adjusts based on **screen size**.

---

# Step 1: Create Component

```javascript
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

const cardWidth = width / 2 - 20;

const Dashboard = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Dashboard</Text>
      </View>

      {/* Cards Container */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Users</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Orders</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Revenue</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Messages</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2026 App</Text>
      </View>
    </View>
  );
};

export default Dashboard;
```

---

# Step 2: Styling (Flexbox + Responsive)

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: Platform.OS === 'android' ? 40 : 20,
  },

  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4a90e2',
  },

  headerText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },

  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },

  card: {
    width: cardWidth,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,

    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  footer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },

  footerText: {
    fontSize: 14,
  },
});
```

---

# Concepts Practiced

## 1 Flexbox Layout

Used in:

```
flexDirection: "row"
flexWrap: "wrap"
justifyContent: "space-around"
```

This creates a **responsive grid layout**.

---

## 2 Responsive Design

Card width adjusts automatically:

```
const cardWidth = width / 2 - 20;
```

So cards fit **any screen size**.

---

## 3 Dimensions API

Used to get screen width:

```
const { width } = Dimensions.get("window");
```

---

## 4 Platform-specific Styling

Different padding for Android and iOS:

```
paddingTop: Platform.OS === "android" ? 40 : 20
```

---

# Expected Output UI

Example layout:

```
--------------------------
     My Dashboard
--------------------------

[ Users ]    [ Orders ]

[Revenue]    [Messages]

--------------------------
         Footer
--------------------------
```

---

# Challenge Exercises (Practice)

Try improving the project.

### 1 Add Icons to Cards

Use:

```
react-native-vector-icons
```

Example cards:

```
👤 Users
📦 Orders
💰 Revenue
✉ Messages
```

---

### 2 Make Cards Clickable

Use:

```
Pressable
TouchableOpacity
```

---

### 3 Add Responsive Font Size

Example:

```
fontSize: width * 0.05
```

---

### 4 Add ScrollView

If cards increase:

```
ScrollView
```

---

# Advanced Version Layout

Try building this layout:

```
---------------------------------
        Dashboard
---------------------------------

[ Profile Card ]

[Users] [Orders] [Revenue]

[ Chart / Analytics ]

---------------------------------
```

This combines **Flexbox + Responsive UI design**.

---

If you want, I can also show you a **much better real-world React Native practice project**:

**"Responsive E-Commerce Product Grid (Amazon-style UI)"**

That project will teach **Flexbox + FlatList + Responsive Grid**, which is **very commonly asked in interviews**.
