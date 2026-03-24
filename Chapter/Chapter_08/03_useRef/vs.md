
---

# 📘 Difference Between `useState` vs `useRef`

Both are Hooks from React, but they are used for **completely different purposes**.

---

# 🔥 1. Core Difference (Simple)

```text
useState → triggers UI update (re-render)
useRef   → does NOT trigger UI update
```

---

# 📊 2. Detailed Comparison Table

| Feature                | useState             | useRef               |
| ---------------------- | -------------------- | -------------------- |
| Causes re-render       | ✅ Yes                | ❌ No                 |
| Stores value           | ✅ Yes                | ✅ Yes                |
| UI updates             | ✅ Yes                | ❌ No                 |
| Mutable                | ❌ (immutable update) | ✅ (direct change)    |
| Persist across renders | ✅ Yes                | ✅ Yes                |
| Best use               | UI data              | Hidden/internal data |

---

# 🧠 3. Syntax Difference

### 🔹 useState

```js
const [count, setCount] = useState(0);
```

---

### 🔹 useRef

```js
const countRef = useRef(0);
```

---

# 🔁 4. How They Behave (VERY IMPORTANT)

---

## 🔹 useState Flow

```text
Click Button
   ↓
setState()
   ↓
Re-render component
   ↓
UI updates
```

---

## 🔹 useRef Flow

```text
Update ref.current
   ↓
NO re-render
   ↓
UI stays same
```

---

# ⚡ 5. Practical Example

---

## ✅ useState (UI updates)

```js
const [count, setCount] = useState(0);

<TouchableOpacity onPress={() => setCount(count + 1)}>
  <Text>{count}</Text>
</TouchableOpacity>
```

👉 UI updates when clicked

---

## ❌ useRef (UI does NOT update)

```js
const countRef = useRef(0);

const handleClick = () => {
  countRef.current++;
  console.log(countRef.current);
};

<TouchableOpacity onPress={handleClick}>
  <Text>{countRef.current}</Text>
</TouchableOpacity>
```

👉 UI does NOT update

---

# 🎯 6. When to Use What

---

## ✅ Use `useState` when:

* UI should update
* Data is visible on screen
* Forms, counters, toggles

---

## ✅ Use `useRef` when:

* No UI update needed
* Store previous value
* Access components (TextInput focus)
* Store timers / IDs

---

# 🔥 7. Real Example Together

```js
const Demo = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  renderCount.current++;

  return (
    <>
      <Text>Count: {count}</Text>
      <Text>Render Count: {renderCount.current}</Text>

      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>Increase</Text>
      </TouchableOpacity>
    </>
  );
};
```

---

## 🧠 What Happens:

```text
Click Button
   ↓
count changes → re-render
   ↓
renderCount increases automatically
```

---

# ⚠️ 8. Common Mistakes

---

## ❌ Using useRef instead of state

```js
const count = useRef(0); // ❌ UI won't update
```

---

## ❌ Expecting re-render

```js
ref.current = 10; // ❌ no UI change
```

---

## ❌ Mutating state

```js
state = newValue; // ❌
```

---

# 🧠 9. Interview One-Liners

---

👉 **Q: Main difference?**
`useState` triggers re-render, `useRef` does not.

---

👉 **Q: When to use useRef?**
To store values that don’t affect UI.

---

👉 **Q: Why not useState everywhere?**
Because unnecessary re-renders hurt performance.

---

# 🎯 10. Visual Comparison

```text
useState:
   setState()
      ↓
   Re-render
      ↓
   UI update

useRef:
   ref.current change
      ↓
   NO re-render
      ↓
   UI same
```

---

# 🧠 Memory Trick

```text
useState = UI state (visible)
useRef   = hidden memory (invisible)
```

---

# 🎯 Final Summary

* `useState` → for UI & reactivity
* `useRef` → for persistence without re-render
* Both persist values, but behavior is different

---

