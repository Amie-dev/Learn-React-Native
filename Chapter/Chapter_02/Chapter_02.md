# React Native – Chapter 2 Notes

# Props, State, and Component Lifecycle (Detailed & Deep Explanation)

This chapter explains **how data flows inside React Native components and how components behave during their life cycle**.

The three main concepts are:

1. **Props**
2. **State**
3. **Component Lifecycle**

Understanding these concepts is essential for building **dynamic and interactive mobile applications**.

---

# 1. Props (Properties)

## Definition

**Props** are short for **Properties**.

Props are used to **pass data from one component to another component**.

They allow **parent components to communicate with child components**.

Props are **read-only**, meaning the receiving component **cannot modify them**.

---

## Props Flow

React follows a **one-way data flow**.

```
Parent Component
       ↓
Child Component
```

The parent sends data to the child through **props**.

---

## Example of Props

### Parent Component

```javascript
import { SafeAreaView } from "react-native";
import Greeting from "./Greeting";

export default function App() {
  return (
    <SafeAreaView>
      <Greeting name="Aminul" />
      <Greeting name="Rahul" />
      <Greeting name="Sara" />
    </SafeAreaView>
  );
}
```

---

### Child Component

```javascript
import { Text } from "react-native";

const Greeting = (props) => {
  return (
    <Text>
      Hello {props.name}
    </Text>
  );
};

export default Greeting;
```

---

## Output

```
Hello Aminul
Hello Rahul
Hello Sara
```

---

## Destructuring Props (Recommended)

Instead of writing `props.name`, we can **destructure props**.

```javascript
const Greeting = ({ name }) => {
  return (
    <Text>Hello {name}</Text>
  );
};
```

This makes the code **cleaner and easier to read**.

---

## Important Characteristics of Props

| Feature            | Description                               |
| ------------------ | ----------------------------------------- |
| Read-only          | Props cannot be modified                  |
| Passed from parent | Data flows from parent to child           |
| Immutable          | Cannot be changed inside component        |
| Reusable           | Same component can display different data |

---

# 2. State

## Definition

**State** is used to store **dynamic data inside a component**.

Unlike props, **state can change during the lifecycle of a component**.

State changes cause the component to **re-render (update the UI)**.

---

## Key Difference

| Props                  | State                    |
| ---------------------- | ------------------------ |
| Passed from parent     | Managed inside component |
| Read-only              | Can be changed           |
| Immutable              | Mutable                  |
| Used for communication | Used for dynamic UI      |

---

# State in Functional Components (useState Hook)

Modern React uses **Hooks**.

The most common hook is **useState**.

---

## Example

```javascript
import React, { useState } from "react";
import { SafeAreaView, Text, Button } from "react-native";

const Counter = () => {

  const [count, setCount] = useState(0);

  return (
    <SafeAreaView>
      <Text>Count: {count}</Text>

      <Button
        title="Increase"
        onPress={() => setCount(count + 1)}
      />
    </SafeAreaView>
  );
};

export default Counter;
```

---

## Explanation

### useState Hook

```
const [count, setCount] = useState(0);
```

* `count` → current state value
* `setCount` → function used to update state
* `0` → initial value

---

### Updating State

```
setCount(count + 1)
```

This updates the state and **automatically re-renders the UI**.

---

# State in Class Components

Before hooks existed, state was handled using **class components**.

---

## Example

```javascript
import React, { Component } from "react";
import { SafeAreaView, Text, Button } from "react-native";

class Counter extends Component {

  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <SafeAreaView>
        <Text>Count: {this.state.count}</Text>

        <Button
          title="Increase"
          onPress={this.increase}
        />
      </SafeAreaView>
    );
  }
}

export default Counter;
```

---

## Key Concepts

### Initial State

```
this.state = {
  count: 0
}
```

Defines the **initial state of the component**.

---

### Updating State

```
this.setState()
```

Used to update state in class components.

---

# 3. Component Lifecycle

## Definition

The **Component Lifecycle** refers to the **different stages a component goes through from creation to destruction**.

A component passes through **three main phases**:

1. Mounting
2. Updating
3. Unmounting

---

# 1. Mounting Phase

Mounting means **when a component is created and inserted into the UI**.

### Methods in Mounting Phase

| Method              | Description                            |
| ------------------- | -------------------------------------- |
| constructor()       | Initializes state                      |
| render()            | Returns JSX                            |
| componentDidMount() | Runs after component appears on screen |

---

### Example

```javascript
componentDidMount() {
  console.log("Component Mounted");
}
```

Used for:

* API calls
* Data fetching
* Setting timers

---

# 2. Updating Phase

Updating occurs when **props or state changes**.

React re-renders the component to reflect new data.

### Methods in Updating Phase

| Method                  | Description        |
| ----------------------- | ------------------ |
| shouldComponentUpdate() | Controls re-render |
| componentDidUpdate()    | Runs after update  |
| render()                | Re-renders UI      |

---

### Example

```javascript
componentDidUpdate() {
  console.log("Component Updated");
}
```

---

# 3. Unmounting Phase

Unmounting happens when a component is **removed from the screen**.

### Method

| Method                 | Description                      |
| ---------------------- | -------------------------------- |
| componentWillUnmount() | Cleanup before component removal |

---

### Example

```javascript
componentWillUnmount() {
  console.log("Component Removed");
}
```

Used for:

* Clearing timers
* Removing event listeners
* Cleaning resources

---

# Lifecycle Flow Diagram

```
Mounting
   ↓
constructor()
   ↓
render()
   ↓
componentDidMount()

Updating
   ↓
render()
   ↓
componentDidUpdate()

Unmounting
   ↓
componentWillUnmount()
```

---

# Lifecycle in Functional Components

Functional components use **Hooks** instead of lifecycle methods.

The main hook is:

## useEffect

Example:

```javascript
import React, { useEffect } from "react";

useEffect(() => {
  console.log("Component Mounted");

  return () => {
    console.log("Component Unmounted");
  };
}, []);
```

---

## Explanation

| Part        | Meaning                   |
| ----------- | ------------------------- |
| useEffect() | Lifecycle hook            |
| []          | Runs only once (mounting) |
| return()    | Cleanup function          |

---

# Props vs State Summary

| Feature     | Props            | State            |
| ----------- | ---------------- | ---------------- |
| Data Source | Parent Component | Inside Component |
| Mutability  | Immutable        | Mutable          |
| Usage       | Passing data     | Managing UI data |
| Update      | Cannot update    | Can update       |

---

# Key Takeaways

1. **Props** pass data between components.
2. **State** stores dynamic data inside components.
3. Changing state **re-renders the UI**.
4. **Lifecycle methods** control component behavior during different stages.
5. Modern React uses **Hooks instead of class lifecycle methods**.

---

If you want, I can also create the **next chapter notes**:

**Chapter 3:**

* Event Handling
* Handling User Input
* Forms in React Native
* Controlled vs Uncontrolled Components

(very important for building real apps).
