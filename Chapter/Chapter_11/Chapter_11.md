

# 📘 React Native Vector Icons – Notes

## 🔹 1. What is React Native Vector Icons?

**React Native Vector Icons** is a popular library that provides **customizable icons** for React Native apps.

Instead of using images, it uses **icon fonts**, which are:

* Scalable (no pixel loss)
* Lightweight
* Easy to style (color, size)

---

## 🔹 2. Installation

### Step 1: Install package

```bash
npm install react-native-vector-icons
```

### Step 2: (For newer React Native ≥ 0.60)

Auto-linking works, so no manual linking needed.

### Step 3: For Android

Make sure this is added in:

```
android/app/build.gradle
```

```gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

---

## 🔹 3. Importing Icons

You can import different icon sets:

```js
import Icon from 'react-native-vector-icons/FontAwesome';
```

Other popular icon sets:

* MaterialIcons
* Ionicons
* Feather
* AntDesign
* Entypo

---

## 🔹 4. Basic Usage

```js
import Icon from 'react-native-vector-icons/FontAwesome';

<Icon name="home" size={30} color="blue" />
```

### Props:

* `name` → icon name
* `size` → icon size
* `color` → icon color

---

## 🔹 5. Example with Button

```js
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <View>
      <Icon name="heart" size={40} color="red" />
      <Text>Like</Text>
    </View>
  );
};
```

---

## 🔹 6. Using Icons in Buttons

```js
<TouchableOpacity style={{ flexDirection: 'row' }}>
  <Icon name="add-circle" size={25} color="green" />
  <Text>Add Item</Text>
</TouchableOpacity>
```

---

## 🔹 7. Using Icons in Navigation

### Example: Bottom Tabs

```js
import Ionicons from 'react-native-vector-icons/Ionicons';

<Tab.Screen
  name="Home"
  component={HomeScreen}
  options={{
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="home" color={color} size={size} />
    ),
  }}
/>
```

---

## 🔹 8. Dynamic Icons

```js
<Icon
  name={isLiked ? 'heart' : 'heart-o'}
  size={30}
  color="red"
/>
```

---

## 🔹 9. Styling Icons

Icons behave like text, so you can style them:

```js
<Icon name="star" style={{ margin: 10 }} size={25} color="gold" />
```

---

## 🔹 10. Common Issues & Fixes

### ❌ Icon not showing

✔ Run:

```bash
npx react-native run-android
```

✔ Clean build:

```bash
cd android && ./gradlew clean
```

---

### ❌ Font not linked

✔ Ensure:

```gradle
fonts.gradle
```

is added

---

### ❌ Wrong icon name

✔ Check icon names from:
👉 [https://oblador.github.io/react-native-vector-icons/](https://oblador.github.io/react-native-vector-icons/)

---

## 🔹 11. Advantages

✅ Lightweight
✅ Scalable
✅ Easy to customize
✅ Multiple icon libraries
✅ Works on both Android & iOS

---

## 🔹 12. Disadvantages

❌ Need correct icon names
❌ Initial setup issues sometimes
❌ Font loading issues in some builds

---

## 🔹 13. Best Practices

* Use consistent icon library across app
* Avoid too many different icon sets
* Use meaningful icons (UX friendly)
* Keep size consistent in UI

---

## 🔹 14. Popular Icon Sets

| Icon Set      | Use Case             |
| ------------- | -------------------- |
| FontAwesome   | General UI           |
| MaterialIcons | Android-like UI      |
| Ionicons      | Modern mobile UI     |
| Feather       | Minimal design       |
| AntDesign     | Clean & professional |

---

## 🔹 15. Real Use Cases

* Navigation icons
* Buttons (Add, Delete, Edit)
* Status indicators
* Social media icons
* Form inputs (eye, lock, email)

---

## ✅ Summary

React Native Vector Icons:

* Replace images with scalable icons
* Easy to use and style
* Essential for modern UI design

---


