---
# 📘 React Native Hook – `useReducer` (Deep Dive)
---

# 🔹 1. What is `useReducer`?

`useReducer` is a Hook in React that:

✅ Manages **complex state logic**

✅ Uses a **reducer function (like Redux)**

✅ Handles **multiple related state updates**

---

## 🧠 Simple Definition

```text
useReducer = manage state using actions + reducer function
```

---

# 🔥 2. Why `useReducer` is Needed

---

## ❌ Problem with useState

When state becomes complex:

```js
const [user, setUser] = useState({
  name: '',
  age: 0,
  isLoggedIn: false,
});
```

👉 Updating becomes messy ❌

---

## ✅ Solution: useReducer

```text
Centralized logic → clean → scalable
```

---

# 🔹 3. Basic Syntax

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

---

## 🧠 Breakdown

| Part         | Meaning                 |
| ------------ | ----------------------- |
| state        | current state           |
| dispatch     | function to send action |
| reducer      | logic handler           |
| initialState | starting value          |

---

# 🔹 Step-by-Step Implementation

---

# 🔹 Step 1: Create Initial State

```js
const initialState = {
  count: 0,
};
```

---

# 🔹 Step 2: Create Reducer Function

```js
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };

    case 'DECREMENT':
      return { count: state.count - 1 };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};
```

---

## 🧠 What is `action`?

```text
action = instruction (what to do)
```

---

# 🔹 Step 3: Use useReducer

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

---

# 🔹 Step 4: Dispatch Actions

```js
dispatch({ type: 'INCREMENT' });
dispatch({ type: 'DECREMENT' });
dispatch({ type: 'RESET' });
```

---

# 🔥 4. Complete Example (React Native)

```js
import React, { useReducer } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'INC':
      return { count: state.count + 1 };

    case 'DEC':
      return { count: state.count - 1 };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

export const UseReducerScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View>
      <Text>Count: {state.count}</Text>

      <TouchableOpacity onPress={() => dispatch({ type: 'INC' })}>
        <Text>Increase</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dispatch({ type: 'DEC' })}>
        <Text>Decrease</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dispatch({ type: 'RESET' })}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};
```

---

# 🔁 5. How It Works (Flow)

```text
dispatch(action)
   ↓
reducer receives action
   ↓
returns new state
   ↓
React updates UI
```

---

# 🔥 6. Action Object (Important)

```js
dispatch({
  type: 'INCREMENT',
  payload: 5,
});
```

---

## 🧠 Use payload

```js
case "ADD":
  return { count: state.count + action.payload };
```

---

# 🔄 7. useReducer vs useState

| Feature          | useState | useReducer |
| ---------------- | -------- | ---------- |
| Simple state     | ✅       | ❌         |
| Complex logic    | ❌       | ✅         |
| Multiple updates | ❌       | ✅         |
| Readability      | Medium   | High       |

---

# 🔥 8. Real-World Use Cases

---

## 📱 Use when:

- Form handling
- Authentication logic
- Complex UI states
- Multiple related state updates

---

# ⚠️ 9. Rules & Best Practices

---

## ❗ Rule 1: Never mutate state

❌ Wrong:

```js
state.count++;
return state;
```

---

✅ Correct:

```js
return { count: state.count + 1 };
```

---

## ❗ Rule 2: Always return new state

---

## ❗ Rule 3: Use meaningful action types

---

# 🔥 10. Advanced Example (Object State)

```js
const initialState = {
  name: '',
  age: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };

    case 'SET_AGE':
      return { ...state, age: action.payload };

    default:
      return state;
  }
};
```

---

# 🧠 11. Mental Model

```text
useReducer = mini Redux inside component
```

---

# 🎯 12. Interview Questions

---

## 🔹 Q1: Why use useReducer?

👉 For complex state logic

---

## 🔹 Q2: Difference from useState?

👉 useReducer centralizes logic

---

## 🔹 Q3: What is dispatch?

👉 Function to send action

---

## 🔹 Q4: What is reducer?

👉 Function that updates state

---

# ⚡ 13. Performance Insight

- Cleaner logic
- Easier debugging
- Scalable architecture

---

# 🎯 14. Visual Diagram

```text
UI → dispatch → reducer → new state → UI update
```

---

# 🧠 Memory Trick

```text
Reducer = switch-case logic
Dispatch = trigger action
```

---

# 🎯 Final Summary

- `useReducer` manages complex state
- Uses reducer + dispatch pattern
- Better than useState for large logic
- Similar to Redux

---
