Here is a **React Native Amazon-style UI Practice Project** in **one file**.
This project practices:

- Flexbox Grid Layout
- Responsive Design
- Dimensions API
- Platform Styling
- ScrollView
- Pressable Cards

It creates a **simple Amazon-like product grid**.

---

# Amazon-Style Product Grid (All in One File)

```javascript
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Dimensions,
  Platform,
} from 'react-native';

const { width } = Dimensions.get('window');

// Responsive card width (2 columns)
const cardWidth = width / 2 - 20;

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: '₹1999',
    image: 'https://picsum.photos/200?1',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: '₹2999',
    image: 'https://picsum.photos/200?2',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: '₹1499',
    image: 'https://picsum.photos/200?3',
  },
  {
    id: 4,
    name: 'Gaming Mouse',
    price: '₹799',
    image: 'https://picsum.photos/200?4',
  },
  {
    id: 5,
    name: 'Laptop Stand',
    price: '₹999',
    image: 'https://picsum.photos/200?5',
  },
  {
    id: 6,
    name: 'USB Keyboard',
    price: '₹699',
    image: 'https://picsum.photos/200?6',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <Text style={styles.headerText}>Amazon UI</Text>
      </View>

      <ScrollView>
        <View style={styles.grid}>
          {products.map(item => (
            <Pressable key={item.id} style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />

              <Text style={styles.title}>{item.name}</Text>

              <Text style={styles.price}>{item.price}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: Platform.OS === 'android' ? 40 : 20,
  },

  header: {
    height: 60,
    backgroundColor: '#ff9900',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 10,
  },

  card: {
    width: cardWidth,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },

  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },

  title: {
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
  },

  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'green',
  },
});
```

---

# What You Learn From This Project

### 1. Flexbox Grid

```javascript
flexDirection: 'row';
flexWrap: 'wrap';
justifyContent: 'space-around';
```

Creates a **2-column responsive layout**.

---

### 2. Responsive Card Width

```javascript
const cardWidth = width / 2 - 20;
```

Automatically adjusts for **different screen sizes**.

---

### 3. Dimensions API

```javascript
const { width } = Dimensions.get('window');
```

Used to calculate **dynamic layouts**.

---

### 4. Platform Styling

```javascript
paddingTop: Platform.OS === 'android' ? 40 : 20;
```

Adjusts spacing for Android/iOS.

---

### 5. Pressable Components

```javascript
<Pressable style={styles.card}>
```

Makes product cards **clickable**.

---

# Expected UI

Example layout:

```
----------------------
     Amazon UI
----------------------

[ Product ] [ Product ]

[ Product ] [ Product ]

[ Product ] [ Product ]
```

---

# Bonus Improvements (Try Yourself)

Add these features:

### 1 Search Bar (Amazon style)

```
🔍 Search products
```

---

### 2 Add Rating Stars

```
⭐⭐⭐⭐☆
```

---

### 3 Add "Add to Cart" Button

```
[ Add to Cart ]
```

---

### 4 Use FlatList Instead of map()

More optimized.

---
