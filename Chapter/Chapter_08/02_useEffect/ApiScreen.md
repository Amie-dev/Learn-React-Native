
---

# 📡 1. Real API Fetch Example (React Native)

### ✅ Full Working Example

```js
import React, { useEffect, useState } from "react";
import { Text, View, FlatList, ActivityIndicator } from "react-native";

export const ApiScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>API Data</Text>

      <FlatList
        data={data.slice(0, 10)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.title}</Text>
        )}
      />
    </View>
  );
};
```

---

## 🔥 What’s Happening Here

```text
Component Mount
      ↓
useEffect runs
      ↓
API call
      ↓
setData()
      ↓
Re-render UI
```

---

## ⚠️ Safe API Pattern (Avoid Memory Leak)

```js
useEffect(() => {
  let isMounted = true;

  const fetchData = async () => {
    const res = await fetch("url");
    const data = await res.json();

    if (isMounted) {
      setData(data);
    }
  };

  fetchData();

  return () => {
    isMounted = false;
  };
}, []);
```

---

# 🐞 2. Common Bugs + Debugging Tricks

---

## ❌ Bug 1: Infinite Loop

```js
useEffect(() => {
  setCount(count + 1);
}, [count]); // ❌
```

### 💥 Problem:

```text
Update → Render → Update → Render → Infinite loop
```

---

### ✅ Fix:

```js
useEffect(() => {
  if (count < 5) {
    setCount(prev => prev + 1);
  }
}, [count]);
```

---

## ❌ Bug 2: Missing Dependency

```js
useEffect(() => {
  console.log(count);
}, []); // ❌
```

👉 Always prints old value

---

### ✅ Fix:

```js
useEffect(() => {
  console.log(count);
}, [count]);
```

---

## ❌ Bug 3: Async Directly in useEffect

```js
useEffect(async () => {  // ❌
  await fetch();
}, []);
```

---

### ✅ Fix:

```js
useEffect(() => {
  const fetchData = async () => {};
  fetchData();
}, []);
```

---

## ❌ Bug 4: Object Dependency Re-run

```js
const obj = { a: 1 };

useEffect(() => {
  console.log("Runs every time");
}, [obj]); // ❌ always new reference
```

---

### ✅ Fix:

Use stable reference or `useMemo`

---

## 🧠 Debugging Tricks

---

### 🔍 Trick 1: Log dependency changes

```js
useEffect(() => {
  console.log("Effect triggered", count);
}, [count]);
```

---

### 🔍 Trick 2: Check render vs effect

```js
console.log("Render");

useEffect(() => {
  console.log("Effect");
});
```

👉 Helps understand execution order

---

### 🔍 Trick 3: Identify infinite loops

If console keeps printing:

```text
Effect → Effect → Effect → ...
```

👉 Check dependencies immediately

---

# 📊 3. Dependency Array Explained (Visual)

---

## 🔹 Case 1: No Dependency Array

```js
useEffect(() => {});
```

### 🔁 Flow:

```text
Render → Effect
Render → Effect
Render → Effect
```

👉 Runs EVERY time

---

## 🔹 Case 2: Empty Array `[]`

```js
useEffect(() => {}, []);
```

### 🔁 Flow:

```text
Render → Effect
(no more runs)
```

👉 Runs ONLY ONCE

---

## 🔹 Case 3: With Dependency `[count]`

```js
useEffect(() => {}, [count]);
```

### 🔁 Flow:

```text
Render → Effect
count changes → Effect
count changes → Effect
```

---

## 🔹 Case 4: Multiple Dependencies

```js
useEffect(() => {}, [count, name]);
```

### 🔁 Flow:

```text
count changes → Effect
name changes → Effect
```

---

## 🔹 Case 5: Object/Array Dependency ⚠️

```js
useEffect(() => {}, [obj]);
```

### 🔁 Flow:

```text
Render → new obj → Effect
Render → new obj → Effect
```

👉 Runs EVERY time ❗

---

## 🎯 Golden Rule

```text
Effect runs when dependency reference changes
```

---

# 🎯 Final Master Summary

### 🧠 Remember:

```text
useEffect =
After Render
+ Dependency Controlled
+ Side Effects
+ Cleanup Support
```

---

# 🚀 What You Should Practice Next

Try building:

✅ API screen with search filter

✅ Timer app with cleanup

✅ Form validation using useEffect

---

