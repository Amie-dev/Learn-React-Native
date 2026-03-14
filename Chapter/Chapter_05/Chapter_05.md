# React Native – Chapter 5 Notes

# Event Handling and User Interaction

In React Native, **event handling** allows an application to respond to **user actions** such as:

* Pressing a button
* Typing text
* Touching the screen
* Scrolling
* Swiping

These interactions make mobile apps **dynamic and interactive**.

---

# 1. Event Handling in React Native

## Definition

**Event Handling** is the process of **responding to user actions** in an application.

React Native uses **event handler functions** to handle these actions.

Example user actions:

* Pressing a button
* Entering text
* Touching a component

---

## Basic Syntax

```javascript
<Component eventName={eventHandlerFunction} />
```

Example:

```javascript
<Button title="Click Me" onPress={handleClick} />
```

Here:

* `onPress` → event
* `handleClick` → event handler function

---

## Example

```javascript
import { SafeAreaView, Button } from "react-native";

export default function App() {

  const handleClick = () => {
    alert("Button Pressed!");
  };

  return (
    <SafeAreaView>
      <Button
        title="Click Me"
        onPress={handleClick}
      />
    </SafeAreaView>
  );
}
```

### Output

When the user presses the button, a message appears:

```
Button Pressed!
```

---

# 2. Button Events

Buttons are used to trigger actions such as:

* Submitting forms
* Navigating screens
* Updating state
* Fetching data

---

## Main Button Event

| Event   | Description                      |
| ------- | -------------------------------- |
| onPress | Triggered when button is pressed |

---

## Example

```javascript
import React from "react";
import { SafeAreaView, Button, Text } from "react-native";

const ButtonExample = () => {

  const showMessage = () => {
    alert("Welcome to React Native");
  };

  return (
    <SafeAreaView>
      <Button
        title="Press Me"
        onPress={showMessage}
      />
    </SafeAreaView>
  );
};

export default ButtonExample;
```

---

## Button with State Update

```javascript
import React, { useState } from "react";
import { SafeAreaView, Button, Text } from "react-native";

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

### Output

```
Count: 0
Press button → Count: 1
Press button → Count: 2
```

---

# 3. TextInput Events

`TextInput` is used to **collect user input**.

Examples:

* Login forms
* Search bars
* Registration forms

---

## Common TextInput Events

| Event           | Description                  |
| --------------- | ---------------------------- |
| onChangeText    | Triggered when text changes  |
| onFocus         | When input field is focused  |
| onBlur          | When input field loses focus |
| onSubmitEditing | When user presses submit     |

---

## Example

```javascript
import React, { useState } from "react";
import { SafeAreaView, TextInput, Text } from "react-native";

const InputExample = () => {

  const [text, setText] = useState("");

  return (
    <SafeAreaView>

      <TextInput
        placeholder="Enter your name"
        onChangeText={(value) => setText(value)}
      />

      <Text>Your Name: {text}</Text>

    </SafeAreaView>
  );
};

export default InputExample;
```

---

## Output

User types:

```
Aminul
```

Screen shows:

```
Your Name: Aminul
```

---

# 4. Handling User Interaction

User interaction means **how users interact with UI elements**.

Common interaction components:

| Component        | Purpose                 |
| ---------------- | ----------------------- |
| Button           | Click actions           |
| TextInput        | User input              |
| TouchableOpacity | Custom clickable UI     |
| Pressable        | Advanced touch handling |
| ScrollView       | Scroll interaction      |

---

## Example using TouchableOpacity

```javascript
import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";

const TouchableExample = () => {

  const handlePress = () => {
    alert("Box Pressed!");
  };

  return (
    <SafeAreaView>

      <TouchableOpacity onPress={handlePress}>

        <Text>
          Click This Text
        </Text>

      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default TouchableExample;
```

### What Happens

When the user taps the text:

```
Box Pressed!
```

---

# 5. Passing Functions as Props

Functions can be **passed from parent components to child components using props**.

This allows child components to **trigger actions defined in the parent**.

---

## Example

### Parent Component

```javascript
import React from "react";
import { SafeAreaView } from "react-native";
import ChildComponent from "./ChildComponent";

const Parent = () => {

  const showAlert = () => {
    alert("Hello from Parent");
  };

  return (
    <SafeAreaView>
      <ChildComponent onPressButton={showAlert} />
    </SafeAreaView>
  );
};

export default Parent;
```

---

### Child Component

```javascript
import React from "react";
import { Button } from "react-native";

const ChildComponent = ({ onPressButton }) => {
  return (
    <Button
      title="Press"
      onPress={onPressButton}
    />
  );
};

export default ChildComponent;
```

---

## How It Works

```
Parent Component
      ↓
Pass Function via Props
      ↓
Child Component
      ↓
Button Press
      ↓
Parent Function Executes
```

---

# Advantages of Passing Functions

* Enables **component communication**
* Keeps code **modular**
* Improves **reusability**

---

# Key Points Summary

### Event Handling

Used to respond to **user actions**.

### Button Events

Main event:

```
onPress
```

### TextInput Events

Important events:

* `onChangeText`
* `onFocus`
* `onBlur`
* `onSubmitEditing`

### User Interaction Components

* Button
* TouchableOpacity
* Pressable
* TextInput

### Passing Functions

Functions can be passed from **parent → child components via props**.

---

# Short Interview Summary

**Event Handling** allows React Native apps to respond to user actions.

**Button Events** use `onPress`.

**TextInput Events** capture user input using `onChangeText`.

**User Interaction** is handled using components like `TouchableOpacity` and `Pressable`.

**Functions as Props** allow child components to trigger parent functions.

---

If you want, I can also give you **Chapter 4 Notes (Very Important for React Native UI)**:

* Styling in React Native
* StyleSheet API
* Flexbox Layout
* Responsive Design
* Dimensions API
* Platform-specific styling

This is the **most important chapter for building mobile UI**.
