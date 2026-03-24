
---

# 📘 React Native Hook – `useRef` (Deep Dive)

---

## 🔹 1. What is `useRef`?

`useRef` is a Hook in React that lets you:

✅ Store a value that **persists across renders**

✅ Access **UI elements (like TextInput)**

✅ Store data **without causing re-render**

---

## 🔹 2. Basic Syntax

```js
const ref = useRef(initialValue);
```

---

## 🔹 3. What does it return?

```js
{
  current: initialValue
}
```

👉 Example:

```js
const myRef = useRef(0);

console.log(myRef);
// { current: 0 }
```

---

## 🔹 4. Key Characteristics

| Feature                | useRef |
| ---------------------- | ------ |
| Persist value          | ✅ Yes  |
| Causes re-render       | ❌ No   |
| Mutable                | ✅ Yes  |
| Stores DOM / component | ✅ Yes  |

---

# 🔥 5. Why do we use `useRef`?

---

## ✅ 1. Store value WITHOUT re-render

```js
const countRef = useRef(0);

countRef.current++;
```

👉 UI will NOT update

---

## ✅ 2. Access UI Elements (React Native)

```js
const inputRef = useRef(null);

<TextInput ref={inputRef} />
```

👉 Used for:

* Focus input
* Clear input
* Measure layout

---

## ✅ 3. Persist values between renders

Unlike normal variables:

```js
let value = 0; // resets every render ❌
```

```js
const ref = useRef(0); // persists ✅
```

---

# 🔁 6. useRef vs useState (VERY IMPORTANT)

| Feature   | useState | useRef        |
| --------- | -------- | ------------- |
| Re-render | ✅ Yes    | ❌ No          |
| UI update | ✅ Yes    | ❌ No          |
| Mutable   | ❌ No     | ✅ Yes         |
| Best for  | UI state | hidden values |

---

## 🎯 Rule:

```text
If UI should update → useState  
If UI should NOT update → useRef
```

---

# 🧠 7. How `useRef` Works Internally

```text
Render → ref created
Re-render → same ref object reused
```

👉 React does NOT recreate it

---

# 🔥 8. Practical Examples

---

## 📌 Example 1: Persist Value Without Re-render

```js
const Demo = () => {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current++;
    console.log(countRef.current);
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <Text>Click</Text>
    </TouchableOpacity>
  );
};
```

---

## 📌 Example 2: Access TextInput

```js
import { TextInput, Button } from 'react-native';

const InputFocus = () => {
  const inputRef = useRef(null);

  return (
    <>
      <TextInput ref={inputRef} />
      <Button title="Focus" onPress={() => inputRef.current.focus()} />
    </>
  );
};
```

---

## 📌 Example 3: Store Previous Value

```js
const Demo = () => {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <Text>
      Current: {count}, Previous: {prevCount.current}
    </Text>
  );
};
```

---

# ⚠️ 9. Common Mistakes

---

## ❌ 1. Expecting re-render

```js
ref.current = 10;
```

👉 UI will NOT update

---

## ❌ 2. Using instead of state

```js
const count = useRef(0); // ❌ wrong for UI
```

---

## ❌ 3. Forgetting `.current`

```js
ref = 10; // ❌ wrong
```

---

## ❌ 4. Overusing useRef

👉 Don’t use it everywhere — only when needed

---

# 🔄 10. useRef + useEffect (Power Combo)

---

## 📌 Example: Interval Fix (Stale State Problem)

```js
const Demo = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(countRef.current); // always latest
    }, 1000);

    return () => clearInterval(interval);
  }, []);
};
```

👉 Fixes **stale closure problem**

---

# 🎯 11. Real-World Use Cases

---

## 📱 Common Uses:

* Input focus
* Previous state tracking
* Timer IDs
* Scroll position
* Animation values
* Avoid re-renders

---

# 🧠 12. Interview Questions

---

## 🔹 Q1: Why use `useRef` instead of `useState`?

👉 Because `useRef` does NOT trigger re-render

---

## 🔹 Q2: Does updating ref cause re-render?

👉 ❌ No

---

## 🔹 Q3: Can useRef store DOM or component?

👉 ✅ Yes (TextInput, View, etc.)

---

## 🔹 Q4: What is `.current`?

👉 The actual stored value inside ref

---

## 🔹 Q5: Can we store previous value?

👉 ✅ Yes using useEffect

---

# 🎯 13. Visual Flow

```text
Render
  ↓
useRef created
  ↓
User updates ref.current
  ↓
NO re-render
  ↓
Value persists
```

---

# 🧠 Memory Trick

```text
useRef = Box (value stays, UI not updated)
```

---

# 🎯 Final Summary

* `useRef` stores **mutable value**
* Does NOT trigger re-render
* Persists across renders
* Used for DOM access & hidden data
* Works great with `useEffect`

---
