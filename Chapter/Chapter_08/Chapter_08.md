
---

# 📘 React Native Hooks – Discussion Topics

## 🔹 1. What are Hooks in React Native?

**Hooks** are special functions introduced in React (and used in React Native) that allow you to use **state and lifecycle features inside functional components**.

👉 Before Hooks, these features were only available in **class components**.

### 💡 Simple Definition:

Hooks = Functions that “hook into” React features (state, lifecycle, context, etc.)

### Example:

```js
import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
};
```

---

## 🔹 2. Why Hooks are Introduced?

Hooks were introduced to solve problems in **class components**.

### 🚫 Problems in Class Components:

* Complex lifecycle methods
* Hard to reuse logic
* Confusing `this` keyword
* Large and messy code

### ✅ Benefits of Hooks:

* Cleaner and shorter code
* Better logic reuse
* No need for classes
* Easy to understand

👉 Hooks were officially introduced in **React 16.8**

---

## 🔹 3. Rules of Hooks

To use Hooks correctly, follow these rules:

### 📌 Rule 1: Only call Hooks at the top level

❌ Wrong:

```js
if (condition) {
  useState(); // ❌
}
```

✅ Correct:

```js
const [value, setValue] = useState();
```

---

### 📌 Rule 2: Only call Hooks inside React functions

* Functional Components ✅
* Custom Hooks ✅
* Normal JS functions ❌

---

### 📌 Rule 3: Hooks must be called in same order

React depends on order to track state.

---

## 🔹 4. Class Component vs Functional Components

| Feature        | Class Component   | Functional Component |
| -------------- | ----------------- | -------------------- |
| Syntax         | Complex           | Simple               |
| State          | this.state        | useState             |
| Lifecycle      | lifecycle methods | useEffect            |
| Code Length    | More              | Less                 |
| Performance    | Slightly slower   | Better               |
| Learning Curve | Hard              | Easy                 |

### Example:

#### Class Component:

```js
class Counter extends React.Component {
  state = { count: 0 };

  render() {
    return <Text>{this.state.count}</Text>;
  }
}
```

#### Functional Component:

```js
const Counter = () => {
  const [count, setCount] = useState(0);
  return <Text>{count}</Text>;
};
```

---

## 🔹 5. useState Hook (with Example)

`useState` is the most basic and commonly used Hook.

### 📌 Syntax:

```js
const [state, setState] = useState(initialValue);
```

### 📌 Example:

```js
const App = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Enter name"
        onChangeText={setName}
      />
      <Text>Hello {name}</Text>
    </View>
  );
};
```

### 📌 Key Points:

* `state` → current value
* `setState` → updates value
* Re-render happens automatically

---

## 🔹 6. Common Mistakes with Hooks

### ❌ 1. Calling Hooks inside loops/conditions

```js
if (true) {
  useState(); // ❌
}
```

---

### ❌ 2. Updating state incorrectly

```js
setCount(count + 1); // sometimes wrong (async issue)
```

✅ Better:

```js
setCount(prev => prev + 1);
```

---

### ❌ 3. Forgetting dependency array in useEffect

```js
useEffect(() => {
  console.log("Runs every time"); // ❌
});
```

---

### ❌ 4. Mutating state directly

```js
state.push(item); // ❌
```

---

## 🔹 7. Real-world Use Case of Hooks

### 📱 Example: Login Form

```js
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(email, password);
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};
```

### 💡 Real Uses:

* Forms handling
* API calls (useEffect)
* Navigation state
* Animations
* Dark mode toggle

---

## 🔹 8. Next Step in Learning Hooks

After `useState`, learn these important Hooks:

### 📌 Core Hooks:

* `useEffect` → side effects (API, lifecycle)
* `useContext` → global state
* `useRef` → DOM/reference access

### 📌 Advanced Hooks:

* `useReducer`
* `useMemo`
* `useCallback`

---

## 🎯 Final Summary

* Hooks make React Native development **simpler and modern**
* Replace class components with functional components
* `useState` is the starting point
* Follow rules strictly
* Avoid common mistakes

---

