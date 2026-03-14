# Controlled vs Uncontrolled Components (React / React Native)

When working with **forms or user input**, React provides two ways to handle input fields:

1. **Controlled Components**
2. **Uncontrolled Components**

These methods determine **how form data is managed inside a component**.

---

# 1. Controlled Components

## Definition

A **Controlled Component** is an input element whose **value is controlled by React state**.

This means the **React component manages the input value** using state.

Whenever the user types something, the **state updates and React re-renders the UI**.

---

## How it Works

```text
User Input → onChange / onChangeText → State Update → UI Update
```

React always keeps the **source of truth in the component state**.

---

## Example (React Native)

```javascript
import React, { useState } from "react";
import { SafeAreaView, TextInput, Text } from "react-native";

const ControlledExample = () => {

  const [name, setName] = useState("");

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text>Your name is: {name}</Text>
    </SafeAreaView>
  );
};

export default ControlledExample;
```

---

## Explanation

### State Creation

```js
const [name, setName] = useState("");
```

Stores the input value.

---

### Input Field

```js
<TextInput
value={name}
onChangeText={(text) => setName(text)}
/>
```

* `value` → controlled by state
* `onChangeText` → updates state

---

## Output Example

If the user types:

```
Aminul
```

The screen will show:

```
Your name is: Aminul
```

---

## Advantages of Controlled Components

* Easy **form validation**
* Better **control over input values**
* Data always available in **React state**
* Easy to perform **dynamic UI updates**

---

# 2. Uncontrolled Components

## Definition

An **Uncontrolled Component** stores its own internal state inside the DOM (or native component).

React **does not control the input value directly**.

Instead, we access the value using **refs**.

---

## How it Works

```text
User Input → Stored in Input Field → Access via Ref
```

React reads the value **only when needed**.

---

## Example (React Native)

```javascript
import React, { useRef } from "react";
import { SafeAreaView, TextInput, Button, Text } from "react-native";

const UncontrolledExample = () => {

  const inputRef = useRef();

  const showValue = () => {
    alert(inputRef.current._lastNativeText);
  };

  return (
    <SafeAreaView>
      <TextInput
        ref={inputRef}
        placeholder="Enter your name"
      />

      <Button
        title="Show Name"
        onPress={showValue}
      />
    </SafeAreaView>
  );
};

export default UncontrolledExample;
```

---

## Explanation

### Creating Ref

```js
const inputRef = useRef();
```

A reference to the input field.

---

### Attaching Ref

```js
<TextInput ref={inputRef} />
```

This connects the input field to the reference.

---

### Accessing Value

```js
inputRef.current
```

Gets the current value from the input.

---

# Controlled vs Uncontrolled Comparison

| Feature     | Controlled                | Uncontrolled              |
| ----------- | ------------------------- | ------------------------- |
| Data Source | React State               | DOM / Native Input        |
| Control     | Fully controlled by React | Controlled by input field |
| Validation  | Easy                      | Harder                    |
| Performance | Slightly slower           | Slightly faster           |
| Recommended | Yes (most cases)          | Rare cases                |

---

# Simple Visual Comparison

### Controlled

```
React State
     ↓
Input Field
     ↓
User Types
     ↓
State Updates
```

---

### Uncontrolled

```
Input Field
     ↓
User Types
     ↓
Value Stored in Input
     ↓
React Accesses using Ref
```

---

# Best Practice

In modern React and React Native:

**Controlled Components are recommended.**

They provide:

* Better form control
* Validation
* Predictable behavior

---

# Example Real Use Case (Login Form)

Controlled components are typically used in:

* Login forms
* Registration forms
* Search bars
* User profile forms

---

# Key Points to Remember

1. **Controlled Components**

   * Managed by React state
   * Uses `useState`
   * Recommended approach

2. **Uncontrolled Components**

   * Managed by the input element itself
   * Uses `useRef`
   * Used in special cases

---

