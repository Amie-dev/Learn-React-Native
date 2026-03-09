
# Learning About Components (React Native Notes)

## 1. What is a Component?

A **Component** is a reusable piece of UI (User Interface) in React Native.
Components allow developers to **divide the UI into small independent parts**.

Each component can be reused multiple times in different parts of an application.

### Example

Instead of writing the same code repeatedly, we create a component and reuse it.

Example:

* Header
* Button
* Login Form
* Profile Card

All of these can be **components**.

### Benefits of Components

* Code Reusability
* Easier Maintenance
* Better Code Organization
* Faster Development

---

# 2. Types of Components

In React Native there are mainly **three types of components**:

1. Core Components
2. Functional Components
3. Class Components

Additionally we can create **Custom Components**.

---

# 3. Core Components

Core components are **built-in components provided by React Native**.
They help developers build mobile UI easily.

### Common Core Components

| Component    | Description                                   |
| ------------ | --------------------------------------------- |
| View         | Container for other components                |
| Text         | Displays text                                 |
| Image        | Displays images                               |
| ScrollView   | Scrollable container                          |
| TextInput    | Input field for user text                     |
| Button       | Clickable button                              |
| SafeAreaView | Ensures content stays within safe screen area |

### Example

```javascript
import { SafeAreaView, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <Text>Hello React Native</Text>
    </SafeAreaView>
  );
}
```

---

# 4. Functional Components

A **Functional Component** is a JavaScript function that returns JSX.

These are the **most commonly used components in modern React and React Native**.

Functional components are simple, readable, and easier to maintain.

There are **two styles** of functional components.

---

## 4.1 Classic Functional Component

This is the **traditional way** of writing functional components.

```javascript
import { SafeAreaView, Text } from "react-native";

// Classic Functional Component
function ClassicFunctionalComponent() {
  return (
    <SafeAreaView>
      <Text>Hello From Classic Functional Component</Text>
    </SafeAreaView>
  );
}
```

### Explanation

* `function ClassicFunctionalComponent()` creates a function.
* It returns **JSX UI**.
* JSX describes what should appear on the screen.

---

## 4.2 Modern Functional Component (Arrow Function)

This is the **modern and recommended way**.

```javascript
import { SafeAreaView, Text } from "react-native";

const ModernFunctionalComponent = () => {
  return (
    <SafeAreaView>
      <Text>Hello From Modern Functional Component</Text>
    </SafeAreaView>
  );
};

export {
    ClassicFunctionalComponent,
    ModernFunctionalComponent
}
```

### Explanation

* Uses **Arrow Function syntax**
* Shorter and cleaner code
* Most React Native projects use this format

---

# 5. Class Components

A **Class Component** is created using JavaScript classes.

Class components were widely used in **older versions of React**.

Today they are considered **legacy**, but understanding them is still important.

### Example

```javascript
import React, { Component } from "react";
import { SafeAreaView, Text } from "react-native";

class ClassComponent extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Hello from Class Component</Text>
      </SafeAreaView>
    );
  }
}

export default ClassComponent;
```

### Explanation

**Component Import**

```javascript
import React, { Component } from "react";
```

* `Component` is a base class from React.

**Class Declaration**

```javascript
class ClassComponent extends Component
```

* The class inherits React features.

**Render Method**

```javascript
render()
```

* The `render()` method must return JSX.
* It defines what appears on the screen.

### Note

Class components are considered **legacy**, and most developers now prefer **functional components**.

---

# 6. Custom Components

A **Custom Component** is a component created by the developer.

It can be reused in multiple parts of an application.

Custom components help make the application **modular and organized**.

### Example

```javascript
import { Text } from "react-native";

const CustomComponent = () => {
  return (
    <Text>
      Hello Custom Component
    </Text>
  );
};

export default CustomComponent;
```

### Explanation

* This is a **user-defined component**.
* It returns JSX that displays text.
* It can be imported and used inside other components.

Example usage:

```javascript
import CustomComponent from "./CustomComponent";

<CustomComponent />
```

---

# 7. What is JSX?

**JSX (JavaScript XML)** is a syntax used in React and React Native to describe UI.

It looks similar to **HTML**, but it is actually **JavaScript code**.

JSX makes it easier to design UI elements.

### Example JSX

```javascript
<Text>Hello World</Text>
```

### JSX Behind the Scenes

The above JSX is converted into JavaScript:

```javascript
React.createElement(Text, null, "Hello World");
```

### Rules of JSX

1. JSX must return **one parent element**.
2. All tags must be **properly closed**.
3. JavaScript expressions are written inside `{ }`.

### Example

```javascript
const name = "Aminul";

<Text>Hello {name}</Text>
```

Output:

```
Hello Aminul
```

---

# Summary

Components are the **building blocks of React Native applications**.

Main types of components:

1. Core Components → Built-in components
2. Functional Components → Modern and recommended
3. Class Components → Legacy approach
4. Custom Components → User-defined reusable components

JSX helps developers create UI using **HTML-like syntax inside JavaScript**.

---
