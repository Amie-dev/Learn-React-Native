
---

# 📘 useContext (Step-by-Step Notes)

---

# 🔹 Step 1: Create Context

👉 First, create a context using `createContext`

```js id="step1"
import { createContext } from "react";

export const UserContext = createContext();
```

---

## 🧠 What happens here?

```text id="s1exp"
React creates a global container to store data
```

---

# 🔹 Step 2: Provide Value (Wrap Your App)

👉 Use **Provider** to pass data

```js id="step2"
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

## 🧠 What happens here?

```text id="s2exp"
Provider makes data available to ALL child components
```

---

# 🔹 Step 3: Provide Context to Components

👉 Any component inside Provider can access data

```text id="s3exp"
App (Provider)
   ↓
Home
   ↓
Child
   ↓
GrandChild
```

👉 No need to pass props manually ❌

---

# 🔹 Step 4: Use Context (Consume Data)

👉 Use `useContext` to get data

```js id="step4"
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Text } from "react-native";

const Home = () => {
  const user = useContext(UserContext);

  return <Text>{user.name}</Text>;
};
```

---

## 🧠 What happens here?

```text id="s4exp"
Component directly reads value from Provider
```

---

# 🔁 Full Flow (Very Important)

```text id="flow1"
1. createContext()
2. Provider wraps components
3. value is passed
4. useContext reads value
```

---

# 🔥 Step 5: Dynamic Data (useState + Context)

👉 Make context dynamic

```js id="step5"
const [count, setCount] = useState(0);

<UserContext.Provider value={{ count, setCount }}>
  <Home />
</UserContext.Provider>
```

---

## 👉 Use anywhere:

```js id="step6"
const { count, setCount } = useContext(UserContext);

<Text>{count}</Text>
<Button title="Add" onPress={() => setCount(count + 1)} />
```

---

# ⚠️ Step 6: Important Rules

---

## ❗ Rule 1: Must use inside Provider

```js id="rule1"
useContext(UserContext); // ❌ if no Provider
```

---

## ❗ Rule 2: Value change → re-render

```text id="rule2"
Provider value changes → ALL consumers re-render
```

---

## ❗ Rule 3: Avoid new object every render

❌ Wrong:

```js id="rule3bad"
<UserContext.Provider value={{ count }}>
```

---

✅ Correct:

```js id="rule3good"
const value = useMemo(() => ({ count }), [count]);

<UserContext.Provider value={value}>
```

---

# 🔥 Step 7: Custom Hook (Best Practice)

---

## ✅ Create hook

```js id="step7"
export const useUser = () => useContext(UserContext);
```

---

## ✅ Use it

```js id="step8"
const { count } = useUser();
```

---

# 🎯 Step 8: Real Use Cases

```text id="usecases"
- Authentication (user login)
- Theme (dark/light)
- Language settings
- Global app data
```

---

# 🧠 Memory Trick

```text id="memory"
create → provide → consume
```

---

# 🎯 Final Summary

```text id="finalsum"
1. createContext()
2. Wrap with Provider
3. Pass value
4. useContext to access
```

---
