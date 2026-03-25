

---

# 📘 useContext (Step-by-Step with `children`)

---

# 🔹 Step 1: Create Context

```js
import { createContext } from "react";

export const UserContext = createContext();
```

---

# 🔹 Step 2: Create a Provider Component (IMPORTANT)

👉 This is where **`children` comes into play**

```js
import React, { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("Aminul");

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};
```

---

## 🧠 What is `children`?

```text
children = all components inside this Provider
```

---

## 🔥 Example:

```js
<UserProvider>
  <Home />
  <Profile />
</UserProvider>
```

👉 Here:

```text
children = <Home /> + <Profile />
```

---

# 🔹 Step 3: Wrap Your App with Provider

```js
import { UserProvider } from "./UserProvider";

export default function App() {
  return (
    <UserProvider>
      <Home />
    </UserProvider>
  );
}
```

---

## 🧠 Flow:

```text
UserProvider
   ↓
children (Home, Profile, etc.)
   ↓
All can access context
```

---

# 🔹 Step 4: Use Context in Any Child

```js
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Text } from "react-native";

const Home = () => {
  const { name } = useContext(UserContext);

  return <Text>{name}</Text>;
};
```

---

# 🔁 Full Flow (with children)

```text
1. createContext()
2. create Provider component
3. wrap children inside Provider
4. children access via useContext()
```

---

# 🔥 Why `children` is IMPORTANT

---

## ❌ Without children:

```js
<UserContext.Provider value={...}>
  {/* nothing here */}
</UserContext.Provider>
```

👉 No component gets data ❌

---

## ✅ With children:

```js
<UserContext.Provider value={...}>
  {children}
</UserContext.Provider>
```

👉 All nested components get access ✅

---

# 🧠 Visual Understanding

```text
UserProvider
   ↓
{children}
   ↓
Home → useContext ✅
Profile → useContext ✅
```

---

# 🔥 Real Example (Complete)

```js
// UserProvider.js
export const UserProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <UserContext.Provider value={{ count, setCount }}>
      {children}
    </UserContext.Provider>
  );
};
```

---

```js
// App.js
<UserProvider>
  <Home />
</UserProvider>
```

---

```js
// Home.js
const Home = () => {
  const { count, setCount } = useContext(UserContext);

  return (
    <>
      <Text>{count}</Text>
      <Button title="Add" onPress={() => setCount(count + 1)} />
    </>
  );
};
```

---

# 🎯 Key Concept (VERY IMPORTANT)

```text
children = the bridge between Provider and components
```

---

# ⚠️ Common Mistake

❌ Forgetting children:

```js
export const Provider = () => {
  return <UserContext.Provider value={...} />;
};
```

👉 ❌ No UI inside → useless

---

# ✅ Correct:

```js
export const Provider = ({ children }) => {
  return (
    <UserContext.Provider value={...}>
      {children}
    </UserContext.Provider>
  );
};
```

---

# 🧠 Final Memory Trick

```text
Context = box
Provider = wrapper
children = what goes inside the box
useContext = take data from box
```

---

