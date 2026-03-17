Alright — let’s turn this into a **well-structured, deep, and professional Chapter 7.1** (like proper notes you can study or revise from). I’ll expand concepts, add clarity, flow, and practical understanding.

---

# 📘 Chapter 7.1 — Stack Navigation (React Native)

---

# 🔷 1. Introduction to Navigation

In mobile apps, users move between different screens (pages). This process is called **Navigation**.

👉 In React Native, navigation is handled using the library:

* React Navigation

---

# 🔷 2. What is Stack Navigation?

**Stack Navigation** is based on a **Stack Data Structure (LIFO)**:

👉 **Last In → First Out**

### 📌 Real-life Example:

* Open Home Screen
* Go to About Screen
* Go to Profile Screen

Now:

* Press back → Profile closes → About appears
* Press back → About closes → Home appears

---

### 📊 Stack Representation

```
Top → Profile Screen
       About Screen
Bottom → Home Screen
```

---

# 🔷 3. Installation & Setup

## 📌 Step 1: Install Core Library

```bash
npm install @react-navigation/native
```

---

## 📌 Step 2: Install Stack Navigator

```bash
npm install @react-navigation/stack
```

---

## 📌 Step 3: Install Required Dependencies

```bash
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
```

---

## 📌 Step 4: Platform Setup

### Android & iOS Important Setup

```js
import 'react-native-gesture-handler';
```

👉 Add this at the top of your entry file (index.js)

---

### iOS Only

```bash
npx pod-install
```

---

# 🔷 4. Core Components of Stack Navigation

## 📌 1. NavigationContainer

```js
<NavigationContainer>
```

### 🔹 Purpose:

* Wraps entire app
* Manages navigation state

👉 Think of it as **root controller**

---

## 📌 2. createStackNavigator()

```js
const Stack = createStackNavigator();
```

### 🔹 Purpose:

* Creates stack object
* Used to define screens

---

## 📌 3. Stack.Navigator

```js
<Stack.Navigator>
```

### 🔹 Purpose:

* Holds all screens
* Controls navigation behavior

---

## 📌 4. Stack.Screen

```js
<Stack.Screen name="HomeScreen" component={HomeScreen} />
```

### 🔹 Purpose:

* Defines each screen
* Connects route name with component

---

# 🔷 5. Full Code Explanation

## 📌 stackNav.js

```js
import { HomeScreen } from './Screen/HomeScreen';
import { AboutScreen } from './Screen/About';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Home Screen' }}
        />

        <Stack.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{
            title: 'About Screen',
            headerShown: false
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
```

---

## 📌 demo.js

```js
import { StackNavigation } from './StackNavigator';

export const StackDemo = () => {
  return <StackNavigation />;
};
```

---

# 🔷 6. Navigation Flow

```
HomeScreen → AboutScreen
        ← goBack()
```

---

# 🔷 7. Navigation Hooks

## 📌 useNavigation()

```js
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();
```

### 🔹 Use:

* Navigate between screens

---

## 📌 useRoute()

```js
import { useRoute } from '@react-navigation/native';

const route = useRoute();
```

### 🔹 Use:

* Access passed data

---

# 🔷 8. Navigation Methods (VERY IMPORTANT)

---

## ✅ 1. navigation.navigate()

```js
navigation.navigate('AboutScreen');
```

### ✔ Behavior:

* Moves to screen
* If already exists → reuses it

---

## ✅ 2. navigation.push()

```js
navigation.push('AboutScreen');
```

### ✔ Behavior:

* Always creates new screen instance

---

## 🔥 navigate vs push (CORE CONCEPT)

| Feature        | navigate | push      |
| -------------- | -------- | --------- |
| Instance       | Single   | Multiple  |
| Reuse screen   | Yes      | No        |
| Stack behavior | Smart    | Force new |

👉 Example:

```
navigate → Home → About → About (same)
push → Home → About → About (new)
```

---

## ✅ 3. navigation.goBack()

```js
navigation.goBack();
```

✔ Goes to previous screen

---

## ✅ 4. navigation.pop()

```js
navigation.pop();
```

✔ Removes current screen from stack

---

## ✅ 5. navigation.replace()

```js
navigation.replace('AboutScreen');
```

✔ Replaces current screen
✔ No back option

---

# 🔷 9. Passing Data Between Screens

---

## 📌 Step 1: Send Data

```js
navigation.navigate('AboutScreen', {
  name: 'Aminul',
  age: 22
});
```

---

## 📌 Step 2: Receive Data

```js
const route = useRoute();

const { name, age } = route.params;
```

---

## 📌 Output

```
name → Aminul
age → 22
```

---

# 🔷 10. Route & Params

| Concept | Description         |
| ------- | ------------------- |
| route   | Current screen info |
| params  | Passed data object  |

---

# 🔷 11. Header Customization

---

## 📌 Hide Header

```js
options={{ headerShown: false }}
```

---

## 📌 Change Title

```js
options={{ title: 'My Screen' }}
```

---

## 📌 Style Header

```js
options={{
  headerStyle: { backgroundColor: 'blue' },
  headerTintColor: '#fff',
  headerTitleStyle: { fontWeight: 'bold' }
}}
```

---

# 🔷 12. Navigation Lifecycle (Concept)

When navigating:

1. Screen is pushed to stack
2. Previous screen remains in memory
3. Back action removes top screen

---

# 🔷 13. When to Use What?

| Situation                   | Method   |
| --------------------------- | -------- |
| Normal navigation           | navigate |
| Open same screen repeatedly | push     |
| Remove current screen       | replace  |
| Go back                     | goBack   |
| Remove multiple screens     | pop      |

---

# 🔷 14. Best Practices

✅ Keep navigation in separate file (like `StackNavigator.js`)
✅ Use clear screen names
✅ Avoid deep nested stacks
✅ Use params only when needed
✅ Handle back navigation properly

---

# 🔷 15. Common Errors

❌ Missing `NavigationContainer`
❌ Wrong screen name in navigate
❌ Dependencies not installed
❌ Using push unnecessarily

---

# 🔷 16. Real Example Flow

```
Login → Home → Profile → Settings
         ↑       ↑
     goBack   replace
```

---

# 🔷 17. Final Summary

✔ Stack Navigation = Screen stack system
✔ Uses LIFO principle
✔ Core elements:

* NavigationContainer
* Stack.Navigator
* Stack.Screen

✔ Key methods:

* navigate vs push (VERY IMPORTANT)
* goBack, pop, replace

✔ Data sharing:

* navigate(params)
* useRoute()

---

