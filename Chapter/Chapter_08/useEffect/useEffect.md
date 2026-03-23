Here are **complete, deep, structured notes on `useEffect` in React Native** — from beginner to advanced 👇

---

# 📘 React Native Hook – `useEffect` (Deep Dive)

---

## 🔹 1. What is `useEffect`?

`useEffect` is a Hook in React that lets you handle **side effects** in functional components.

---

## 🔹 2. What are Side Effects?

Side effects = operations that affect things **outside the component**

### 📌 Examples:

* API calls 🌐
* Timers (`setTimeout`, `setInterval`) ⏱️
* Event listeners 🎧
* Logging 📜
* Updating document title

---

## 🔹 3. Basic Syntax

```js
useEffect(() => {
  // side effect code
}, [dependencies]);
```

---

## 🔹 4. Breakdown of Syntax

### 📌 1. Effect Function

```js
() => {
  // code runs here
}
```

👉 Runs after render

---

### 📌 2. Dependency Array `[ ]`

Controls **when effect runs**

---

## 🔹 5. How `useEffect` Works

### 🔄 Flow:

```text
Render → UI Painted → useEffect runs
```

👉 Important:

* Runs **after render**
* Does NOT block UI

---

## 🔹 6. Types of `useEffect` (VERY IMPORTANT)

---

## ✅ 1. Run on Every Render

```js
useEffect(() => {
  console.log("Runs every render");
});
```

👉 No dependency array

---

## ✅ 2. Run Only Once (Mount)

```js
useEffect(() => {
  console.log("Runs only once");
}, []);
```

👉 Like `componentDidMount`

---

## ✅ 3. Run on Specific State Change

```js
useEffect(() => {
  console.log("Count changed");
}, [count]);
```

👉 Runs only when `count` changes

---

## 🔹 7. Multiple Dependencies

```js
useEffect(() => {
  console.log("Runs when count or name changes");
}, [count, name]);
```

---

## 🔹 8. Cleanup Function (VERY IMPORTANT)

```js
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(timer);
    console.log("Cleanup done");
  };
}, []);
```

---

### 📌 Why Cleanup?

* Prevent memory leaks
* Stop unwanted background tasks

---

## 🔹 9. Lifecycle Mapping (Class vs Hooks)

| Class Lifecycle      | useEffect Equivalent       |
| -------------------- | -------------------------- |
| componentDidMount    | useEffect(() => {}, [])    |
| componentDidUpdate   | useEffect(() => {}, [dep]) |
| componentWillUnmount | cleanup function           |

---

## 🔹 10. Real-world Examples

---

## 📱 1. API Call Example

```js
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);
```

👉 Runs only once when screen loads

---

## ⏱️ 2. Timer Example

```js
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Tick...");
  }, 1000);

  return () => clearInterval(interval);
}, []);
```

---

## 🎯 3. Logging State Change

```js
useEffect(() => {
  console.log("Count changed:", count);
}, [count]);
```

---

## 🔹 11. Common Mistakes (IMPORTANT)

---

### ❌ 1. Missing Dependency

```js
useEffect(() => {
  console.log(count);
}, []); // ❌ count missing
```

👉 Causes stale value bug

---

### ❌ 2. Infinite Loop

```js
useEffect(() => {
  setCount(count + 1);
}, [count]); // ❌ infinite loop
```

---

### ❌ 3. Not Cleaning Up

```js
useEffect(() => {
  setInterval(() => {}, 1000); // ❌ memory leak
}, []);
```

---

### ❌ 4. Heavy Logic Inside useEffect

👉 Keep it clean and minimal

---

## 🔹 12. Best Practices

### ✅ Keep dependencies accurate

### ✅ Use cleanup when needed

### ✅ Split multiple effects

---

## 🔹 13. Advanced Concepts

---

### 🔸 1. Multiple useEffect

```js
useEffect(() => {
  console.log("Runs once");
}, []);

useEffect(() => {
  console.log("Runs on count change");
}, [count]);
```

---

### 🔸 2. Conditional Logic Inside Effect

```js
useEffect(() => {
  if (count > 5) {
    console.log("Count is greater than 5");
  }
}, [count]);
```

---

### 🔸 3. Async Function in useEffect

```js
useEffect(() => {
  const fetchData = async () => {
    const res = await fetch("url");
    const data = await res.json();
    console.log(data);
  };

  fetchData();
}, []);
```

---

## 🔹 14. When to Use `useEffect`?

Use it when:

* You need to perform side effects
* You want to run code after render
* You interact with external systems

---

## 🔹 15. When NOT to Use `useEffect`?

❌ For simple calculations
❌ For event handling
❌ For pure UI logic

---

## 🎯 Final Summary

* `useEffect` handles **side effects**
* Runs **after render**
* Controlled by dependency array
* Supports cleanup
* Replaces lifecycle methods

---

## 🧠 Memory Trick

```text
useEffect = After Render + Side Effects + Cleanup
```

---

