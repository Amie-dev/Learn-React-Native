
---

# React Native – NativeWind Setup Guide

## What is NativeWind?

**NativeWind** is a library that allows you to use **Tailwind CSS utility classes in React Native**.

It provides:

* Utility-first styling
* Faster UI development
* Cleaner component code
* Tailwind syntax inside React Native

Example:

```jsx
<View className="flex-1 justify-center items-center bg-white">
  <Text className="text-xl font-bold text-blue-500">
    Hello NativeWind
  </Text>
</View>
```

---

# Step 1 – Install NativeWind

Install **NativeWind and its dependencies**.

```bash
npm install nativewind react-native-reanimated react-native-safe-area-context
```

Install **Tailwind CSS and Prettier plugin**.

```bash
npm install --dev tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11
```

After installing, run:

```bash
npx pod-install
```

This finishes the installation of **react-native-reanimated** (required for iOS).

---

# Step 2 – Setup Tailwind CSS

Create a Tailwind configuration file.

```bash
npx tailwindcss init
```

This will generate:

```text
tailwind.config.js
```

---

## Configure Tailwind Paths

Edit the file to include **all component paths**.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Explanation

| Option  | Purpose                         |
| ------- | ------------------------------- |
| content | Files that use Tailwind classes |
| presets | Enables NativeWind support      |
| theme   | Customize colors, fonts, etc    |
| plugins | Add Tailwind plugins            |

---

# Step 3 – Create Global CSS File

Create a file:

```
global.css
```

Add Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

These directives enable **Tailwind's core styles**.

---

# Step 4 – Add Babel Preset

Modify **babel.config.js**.

```javascript
module.exports = {
  presets: ['<existing presets>', 'nativewind/babel'],
};
```

### Purpose

The Babel preset allows **React Native to understand Tailwind className syntax**.

---

# Step 5 – Configure Metro

Create or modify:

```
metro.config.js
```

Add the NativeWind configuration.

```javascript
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = mergeConfig(getDefaultConfig(__dirname), {
  /* your config */
});

module.exports = withNativeWind(config, { input: "./global.css" });
```

### Purpose

Metro configuration allows **NativeWind to process Tailwind classes during bundling**.

---

# Step 6 – Import CSS File

Inside your **App.js or App.tsx**.

```javascript
import "./global.css";
```

This loads Tailwind styles globally.

---

# Step 7 – TypeScript Setup (Optional)

If you use **TypeScript**, create a file:

```
nativewind-env.d.ts
```

Add:

```ts
/// <reference types="nativewind/types" />
```

### Important Rules

Do NOT name the file:

```
nativewind.d.ts
```

Also avoid naming it the same as:

* a folder
* a module in node_modules

Otherwise **TypeScript will not detect the types**.

---

# Step 8 – Test NativeWind Setup

Create a simple test component.

```javascript
import "./global.css";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to NativeWind!
      </Text>
    </View>
  );
}
```

---

# Example Tailwind Classes Used

| Class          | Meaning           |
| -------------- | ----------------- |
| flex-1         | Take full space   |
| items-center   | Horizontal center |
| justify-center | Vertical center   |
| bg-white       | White background  |
| text-xl        | Large text        |
| font-bold      | Bold text         |
| text-blue-500  | Blue text         |

---

# Expected Output

You should see:

* White background
* Blue bold text
* Text centered on screen

```
Welcome to NativeWind!
```

If you see this, **NativeWind is working correctly**.

---

# Advantages of NativeWind

| Feature              | Benefit              |
| -------------------- | -------------------- |
| Utility classes      | Faster styling       |
| Tailwind syntax      | Easy to learn        |
| Clean components     | Less StyleSheet code |
| Responsive utilities | Better layouts       |
| Dark mode support    | Modern UI            |

---

# NativeWind vs StyleSheet

| Feature     | StyleSheet | NativeWind       |
| ----------- | ---------- | ---------------- |
| Syntax      | JS Object  | Tailwind Classes |
| Speed       | Moderate   | Very Fast        |
| Code Length | Longer     | Shorter          |
| Flexibility | Good       | Excellent        |

---

# Quick Example Comparison

### StyleSheet

```jsx
<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
```

### NativeWind

```jsx
<View className="flex-1 justify-center items-center">
```

NativeWind is **shorter and cleaner**.

---

# Summary

NativeWind allows using **Tailwind CSS in React Native**.

Main setup steps:

1. Install NativeWind dependencies
2. Create `tailwind.config.js`
3. Create `global.css`
4. Configure Babel
5. Configure Metro
6. Import CSS
7. Test the setup

Once configured, you can style React Native components using **Tailwind utility classes**.

---
