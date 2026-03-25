
---

# 📘 React Native Hook – `useContext` (Deep Dive)

---

# 🔹 1. What is `useContext`?

`useContext` is a Hook in React that allows you to:

✅ Share data **globally** across components
✅ Avoid **prop drilling**
✅ Access context value directly

---

## 🧠 Simple Definition

```text
useContext = Access global data without passing props manually
```

---

# 🔥 2. Problem `useContext` Solves (Prop Drilling)

---

## ❌ Without Context (Problem)

```text
App → Parent → Child → GrandChild
```

Passing props:

```js
<App user="Aminul">
  <Parent user={user}>
    <Child user={user}>
      <GrandChild user={user} />
    </Child>
  </Parent>
</App>
```

👉 This is called **prop drilling** ❌

---

## ✅ With Context

```text
App (Provider)
   ↓
Any Component → useContext()
```

👉 Direct access — no prop passing needed

---

# 🔹 3. Basic Syntax

---

## Step 1: Create Context

```js id="ctx1"
import { createContext } from "react";

export const MyContext = createContext();
```

---

## Step 2: Provide Value

```js id="ctx2"
<MyContext.Provider value={{ name: "Aminul" }}>
  <App />
</MyContext.Provider>
```

---

## Step 3: Consume Value

```js id="ctx3"
import { useContext } from "react";

const data = useContext(MyContext);
```

---

# 🔁 4. How It Works (Flow)

```text
Provider sets value
   ↓
React stores it internally
   ↓
Consumer reads via useContext
   ↓
Re-render when value changes
```

---

# 📊 5. Key Characteristics

| Feature             | useContext |
| ------------------- | ---------- |
| Avoid prop drilling | ✅          |
| Global state        | ✅          |
| Re-render on change | ✅          |
| Easy to use         | ✅          |

---

# 🔥 6. Complete Example (React Native)

---

## 📁 Create Context

```js id="ctx4"
import { createContext } from "react";

export const UserContext = createContext();
```

---

## 📁 Wrap App

```js id="ctx5"
import { UserContext } from "./UserContext";

export default function App() {
  return (
    <UserContext.Provider value={{ name: "Aminul" }}>
      <Home />
    </UserContext.Provider>
  );
}
```

---

## 📁 Use in Child

```js id="ctx6"
import { useContext } from "react";
import { Text } from "react-native";
import { UserContext } from "./UserContext";

const Home = () => {
  const user = useContext(UserContext);

  return <Text>{user.name}</Text>;
};
```

---

# 🧠 7. Re-render Behavior (Important)

---

## 🔁 When Provider value changes:

```js
<UserContext.Provider value={{ name: "New Name" }}>
```

👉 ALL consumers re-render

---

## ⚠️ Important:

```js id="ctx7"
value={{ name: "Aminul" }}
```

👉 This creates NEW object every render ❌

---

## ✅ Fix (Optimization)

```js id="ctx8"
const value = useMemo(() => ({ name: "Aminul" }), []);

<UserContext.Provider value={value}>
```

---

# 🔥 8. Real-World Use Cases

---

## 📱 Common Uses:

* User authentication
* Theme (dark/light)
* Language (i18n)
* Global settings
* App-wide state

---

# ⚠️ 9. Common Mistakes

---

## ❌ 1. Using without Provider

```js id="ctx9"
useContext(MyContext); // ❌ undefined
```

---

## ❌ 2. Overusing Context

👉 Not for all state — only global data

---

## ❌ 3. Recreating value object

```js id="ctx10"
value={{ count }} // ❌ causes re-renders
```

---

## ❌ 4. Large Context

👉 Splitting context is better

---

# 🔄 10. useContext vs Props

---

| Feature      | Props     | useContext |
| ------------ | --------- | ---------- |
| Passing data | Manual    | Automatic  |
| Deep nesting | ❌ Problem | ✅ Easy     |
| Reusability  | Medium    | High       |

---

# 🔥 11. useContext + useState (Power Combo)

---

```js id="ctx11"
const [count, setCount] = useState(0);

<MyContext.Provider value={{ count, setCount }}>
```

---

## 🔥 Use anywhere:

```js id="ctx12"
const { count, setCount } = useContext(MyContext);
```

---

👉 Now ANY component can update state

---

# 🧠 12. Advanced Pattern (Custom Hook)

---

## ✅ Cleaner approach

```js id="ctx13"
const useUser = () => useContext(UserContext);
```

---

## Use:

```js id="ctx14"
const user = useUser();
```

---

# 🎯 13. Interview Questions

---

## 🔹 Q1: Why useContext?

👉 To avoid prop drilling

---

## 🔹 Q2: Does it replace Redux?

👉 ❌ No, but can handle small global state

---

## 🔹 Q3: When does it re-render?

👉 When Provider value changes

---

## 🔹 Q4: Can multiple contexts be used?

👉 ✅ Yes

---

# ⚡ 14. Performance Considerations

---

## 🚨 Problem:

All consumers re-render

---

## ✅ Solution:

* Split contexts
* Use `useMemo`
* Use `React.memo`

---

# 🎯 15. Visual Diagram

```text
App (Provider)
   ↓
Component A → useContext
Component B → useContext
Component C → useContext
```

---

# 🧠 Memory Trick

```text
useContext = Global Props
```

---

# 🎯 Final Summary

* `useContext` shares data globally
* Avoids prop drilling
* Works with Provider/Consumer
* Re-renders on value change
* Best for global app state

---

