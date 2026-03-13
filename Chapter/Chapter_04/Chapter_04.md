# React Native – Chapter 4 Notes

## Styling in React Native

Styling is used to **design the UI (User Interface)** of a mobile application.
React Native uses **JavaScript-based styling**, which is similar to CSS but written in **JS objects**.

There are several ways to apply styles in React Native:

1. **Inline Styling**
2. **StyleSheet**
3. **Common / Shared Styles**
4. **Styled Components**
5. **NativeWind (Tailwind CSS for React Native)**

---

# 1. Inline Styling

## Definition

Inline styling means **writing styles directly inside the component**.

Styles are written as **JavaScript objects** inside the `style` property.

---

## Example

```javascript
import { SafeAreaView, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 20, color: "blue" }}>
        Hello React Native
      </Text>
    </SafeAreaView>
  );
}
```

---

## Explanation

```js
style={{ fontSize: 20, color: "blue" }}
```

* `style` → React Native styling property
* `{}` → JavaScript object
* `fontSize` and `color` → style properties

---

## Advantages

* Simple
* Good for **small styles**
* Quick testing

## Disadvantages

* Hard to maintain in large projects
* Repeated code
* Poor readability

---

# 2. StyleSheet

## Definition

`StyleSheet` is a **React Native API used to organize and optimize styles**.

It improves **performance and code readability**.

---

## Example

```javascript
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Hello React Native
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  text: {
    fontSize: 20,
    color: "green"
  }
});
```

---

## Explanation

```js
StyleSheet.create()
```

Creates an optimized style object.

Example style usage:

```js
style={styles.text}
```

---

## Advantages

* Cleaner code
* Reusable styles
* Better performance
* Recommended for most projects

---

# 3. Common / Shared Styles

## Definition

Common styles are **reusable style objects used across multiple components**.

They help **avoid repeated code**.

---

## Example

### commonStyles.js

```javascript
import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },

  title: {
    fontSize: 24,
    fontWeight: "bold"
  }

});
```

---

### Using Common Styles

```javascript
import { SafeAreaView, Text } from "react-native";
import { commonStyles } from "./commonStyles";

export default function App() {
  return (
    <SafeAreaView style={commonStyles.container}>
      <Text style={commonStyles.title}>
        Welcome
      </Text>
    </SafeAreaView>
  );
}
```

---

## Benefits

* Reusable styling
* Cleaner project structure
* Easier maintenance

---

# 4. Styled Components

## Definition

**Styled Components** is a library that allows writing styles using **CSS-like syntax inside JavaScript**.

It uses **component-based styling**.

Library:

```bash
npm install styled-components
```

---

## Example

```javascript
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  color: purple;
`;

export default function App() {
  return (
    <Container>
      <Title>Hello Styled Components</Title>
    </Container>
  );
}
```

---

## Explanation

Styled components create **styled versions of React Native components**.

Example:

```js
styled.View
styled.Text
```

---

## Advantages

* Clean code
* CSS-like syntax
* Component-based styling
* Dynamic styling support

---

# 5. NativeWind (Tailwind CSS for React Native)

## Definition

**NativeWind** allows using **Tailwind CSS utility classes in React Native**.

It makes styling **fast and flexible**.

---

## Installation

```bash
npm install nativewind
```

Install Tailwind:

```bash
npm install tailwindcss
```

Create config:

```bash
npx tailwindcss init
```

---

## Example

```javascript
import { SafeAreaView, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-gray-200">
      <Text className="text-xl text-blue-600">
        Hello NativeWind
      </Text>
    </SafeAreaView>
  );
}
```

---

## Explanation

Example classes:

```text
flex-1
justify-center
items-center
text-xl
bg-gray-200
```

These are **Tailwind utility classes**.

---

## Advantages

* Very fast styling
* Less code
* Utility-first approach
* Popular in modern React Native projects

---

# Comparison of Styling Methods

| Method            | Description            | Use Case                |
| ----------------- | ---------------------- | ----------------------- |
| Inline Style      | Style inside component | Small quick styles      |
| StyleSheet        | Organized styles       | Most projects           |
| Common Styles     | Shared styles          | Large apps              |
| Styled Components | CSS-like syntax        | Component-based styling |
| NativeWind        | Tailwind CSS utilities | Fast modern styling     |

---

# Key Points

* React Native uses **JavaScript-based styling**.
* Styles are applied using the `style` property.
* `StyleSheet.create()` improves performance.
* Common styles help reuse styles across components.
* Styled Components allow **CSS-style syntax**.
* NativeWind brings **Tailwind CSS to React Native**.

---
