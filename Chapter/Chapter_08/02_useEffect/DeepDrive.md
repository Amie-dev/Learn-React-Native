
---

# 📘 `useEffect` – Ultra Deep Dive (React Native)

---

## 🔹 1. Core Mental Model (VERY IMPORTANT)

👉 Think of `useEffect` as:

```text
“Run this code AFTER React updates the UI”
```

So the lifecycle becomes:

```text
Render → Paint UI → useEffect runs
```

---

## 🔹 2. Why `useEffect` Exists (Real Problem)

In React, components should be **pure functions**:

```js
UI = f(state)
```

👉 But real apps need:

* API calls
* Timers
* Subscriptions

These are **impure operations (side effects)**
➡️ `useEffect` is the safe place for them

---

# 🔥 3. Execution Timing (Deep Understanding)

## 🧠 Key Rule:

👉 `useEffect` runs **after commit phase**

### Phases:

```text
1. Render Phase (calculate UI)
2. Commit Phase (update UI)
3. Effect Phase (run useEffect)
```

---

## ⚡ Difference from `useLayoutEffect` (important)

| Hook            | Runs When    |
| --------------- | ------------ |
| useEffect       | After paint  |
| useLayoutEffect | Before paint |

👉 In React Native:

* `useEffect` = safe & preferred
* `useLayoutEffect` = rarely needed

---

# 🔁 4. Dependency Array – Deep Logic

## 🔹 How React Checks Dependencies?

React uses:

```text
Object.is (shallow comparison)
```

---

## 📌 Example:

```js
useEffect(() => {
  console.log("Runs");
}, [count]);
```

👉 Runs only when:

```js
oldCount !== newCount
```

---

## ⚠️ Important for Objects & Arrays

```js
const obj = { a: 1 };
```

Even if values same:

```js
{} !== {} // true ❗
```

👉 So effect runs again

---

## ✅ Fix:

Use stable references or memoization (`useMemo`)

---

# ⚠️ 5. Infinite Loop Explained (Deep)

```js
useEffect(() => {
  setCount(count + 1);
}, [count]);
```

### 🔥 What happens:

```text
count = 0 → setCount(1)
→ re-render
→ count = 1 → setCount(2)
→ re-render
→ infinite loop 💥
```

---

## ✅ Fix Pattern:

```js
useEffect(() => {
  if (count < 5) {
    setCount(prev => prev + 1);
  }
}, [count]);
```

---

# 🧹 6. Cleanup Function – Internal Flow

```js
useEffect(() => {
  console.log("Effect runs");

  return () => {
    console.log("Cleanup runs");
  };
}, [count]);
```

---

## 🔄 Execution Order:

```text
Initial Render:
→ Effect runs

Next Render (count changes):
→ Cleanup runs FIRST
→ Then Effect runs AGAIN

Unmount:
→ Cleanup runs
```

---

## 🎯 Key Rule:

👉 Cleanup runs:

* Before next effect
* On unmount

---

# 🔌 7. Real-World Patterns (Very Important)

---

## 📡 1. API Fetch Pattern (Best Practice)

```js
useEffect(() => {
  let isMounted = true;

  const fetchData = async () => {
    const res = await fetch("https://api.com/data");
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

👉 Prevents updating unmounted component

---

## ⏱️ 2. Interval Pattern

```js
useEffect(() => {
  const id = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => clearInterval(id);
}, []);
```

---

## 🎧 3. Event Listener Pattern

```js
useEffect(() => {
  const handler = () => console.log("Clicked");

  window.addEventListener("click", handler);

  return () => {
    window.removeEventListener("click", handler);
  };
}, []);
```

---

# 🧠 8. Stale Closure Problem (VERY IMPORTANT)

---

## ❌ Problem:

```js
useEffect(() => {
  setInterval(() => {
    console.log(count); // ❌ old value
  }, 1000);
}, []);
```

👉 Always prints old count

---

## ✅ Solution 1: Add dependency

```js
useEffect(() => {
  console.log(count);
}, [count]);
```

---

## ✅ Solution 2: useRef (advanced)

---

# 🔄 9. Splitting Effects (Best Practice)

❌ Bad:

```js
useEffect(() => {
  fetchData();
  console.log(count);
}, [count]);
```

---

✅ Good:

```js
useEffect(() => {
  fetchData();
}, []);

useEffect(() => {
  console.log(count);
}, [count]);
```

---

# ⚡ 10. Performance Optimization

---

## 🔹 Avoid unnecessary effects

❌

```js
useEffect(() => {
  console.log("Always runs");
});
```

---

✅ Use dependencies properly

---

## 🔹 Memoization

Use:

* `useMemo`
* `useCallback`

to prevent re-runs

---

# 🔍 11. Debugging useEffect

### Trick:

```js
useEffect(() => {
  console.log("Effect triggered", count);
}, [count]);
```

---

### Check dependencies carefully:

* Missing → stale bug
* Extra → extra renders

---

# 🎯 12. When NOT to Use useEffect (Important)

❌ Derived values:

```js
const total = price * quantity;
```

❌ Event handlers:

```js
onClick={() => doSomething()}
```

❌ Simple calculations

---

# 🧠 13. Advanced Interview Concepts

---

## 🔹 Q: Why does useEffect run twice in development?

👉 Because of **React Strict Mode**

* React intentionally runs effects twice
* Helps detect bugs

---

## 🔹 Q: Can we use async directly?

❌ Wrong:

```js
useEffect(async () => {});
```

✅ Correct:

```js
useEffect(() => {
  const fn = async () => {};
  fn();
}, []);
```

---

## 🔹 Q: Difference between dependency types?

| Type     | Behavior      |
| -------- | ------------- |
| []       | run once      |
| [state]  | run on change |
| no array | run always    |

---

# 🎯 Final Master Summary

```text
useEffect =
Run AFTER render
+ Handle side effects
+ Controlled by dependencies
+ Supports cleanup
```

---

# 🚀 Ultimate Learning Path

After mastering `useEffect`:

👉 `useRef` (fix stale closures)
👉 `useReducer` (complex state)
👉 Custom Hooks (real power 💥)

---
