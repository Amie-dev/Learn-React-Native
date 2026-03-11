In **React Native**, **Core Components** are the **built-in components provided by the framework** that allow you to build UI for mobile apps. They are similar to **HTML tags in web development**, but optimized for **Android and iOS native rendering**.

These components come from:

```js
import { ComponentName } from "react-native";
```

Below is a **detailed and in-depth explanation of the most important React Native Core Components**.

---

# Chapter 04 – React Native Core Components (Detailed)

## 1. View

### Definition

`View` is the **most fundamental component** in React Native.
It works like a **container** that holds other components.

It is similar to the **`<div>` element in HTML**.

### Uses

* Layout design
* Wrapping other components
* Styling UI sections
* Creating rows and columns

### Example

```js
import React from "react";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View>
      <Text>Hello React Native</Text>
    </View>
  );
}
```

### Important Properties

| Prop          | Description                    |
| ------------- | ------------------------------ |
| style         | Used to apply CSS-like styling |
| accessible    | Makes the view accessible      |
| onLayout      | Triggered when layout changes  |
| pointerEvents | Controls touch events          |

### Example with Style

```js
<View
  style={{
    backgroundColor: "blue",
    padding: 20,
    margin: 10,
  }}
>
  <Text style={{ color: "white" }}>Box</Text>
</View>
```

### Key Points

* Used for **layout and structure**
* Supports **Flexbox**
* Can contain **Text, Image, Buttons, etc**

---

# 2. Text

### Definition

`Text` component is used to **display text** in React Native.

Unlike web development, **text must always be wrapped inside `<Text>`**.

### Example

```js
import { Text } from "react-native";

<Text>Hello World</Text>
```

### Example with Styling

```js
<Text
  style={{
    fontSize: 20,
    color: "blue",
    fontWeight: "bold",
  }}
>
  React Native Text
</Text>
```

### Important Props

| Prop          | Description           |
| ------------- | --------------------- |
| style         | Text styling          |
| numberOfLines | Limit text lines      |
| ellipsizeMode | How text is truncated |
| selectable    | Allow text selection  |
| onPress       | Handle click on text  |

### Example

```js
<Text numberOfLines={2}>
This is a very long text that will be truncated.
</Text>
```

### Key Points

* Required for **all text rendering**
* Supports **nested text**

Example:

```js
<Text>
  Hello <Text style={{fontWeight:"bold"}}>World</Text>
</Text>
```

---

# 3. Image

### Definition

`Image` component is used to **display images** in the app.

Images can come from:

1. Local files
2. Internet URL
3. Base64 data

### Example (Local Image)

```js
import { Image } from "react-native";

<Image
  source={require("./assets/logo.png")}
  style={{ width: 100, height: 100 }}
/>
```

### Example (Online Image)

```js
<Image
  source={{
    uri: "https://reactnative.dev/img/tiny_logo.png",
  }}
  style={{ width: 100, height: 100 }}
/>
```

### Important Props

| Prop       | Description     |
| ---------- | --------------- |
| source     | Image source    |
| style      | Size and layout |
| resizeMode | How image fits  |
| blurRadius | Blur effect     |

### Resize Modes

```
cover
contain
stretch
center
repeat
```

Example:

```js
<Image
  source={{uri:"image-url"}}
  resizeMode="contain"
/>
```

---

# 4. ScrollView

### Definition

`ScrollView` is used when **content is larger than the screen**.

It allows the user to **scroll vertically or horizontally**.

### Example

```js
import { ScrollView, Text } from "react-native";

<ScrollView>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  <Text>Item 3</Text>
</ScrollView>
```

### Horizontal Scroll

```js
<ScrollView horizontal>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</ScrollView>
```

### Important Props

| Prop                           | Description          |
| ------------------------------ | -------------------- |
| horizontal                     | Horizontal scrolling |
| showsVerticalScrollIndicator   | Show scroll bar      |
| showsHorizontalScrollIndicator | Show horizontal bar  |
| pagingEnabled                  | Page-like scrolling  |

### Key Points

⚠️ `ScrollView` loads **all items at once**, so it is **not efficient for large lists**.

For large lists → use **FlatList**

---

# 5. TextInput

### Definition

`TextInput` allows the user to **enter text**.

Used for:

* Forms
* Login pages
* Search bars
* Chat input

### Example

```js
import { TextInput } from "react-native";

<TextInput
  placeholder="Enter your name"
/>
```

### Example with State

```js
import React, { useState } from "react";
import { TextInput, Text, View } from "react-native";

export default function App() {

  const [name, setName] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Enter name"
        onChangeText={setName}
      />
      <Text>{name}</Text>
    </View>
  );
}
```

### Important Props

| Prop            | Description      |
| --------------- | ---------------- |
| placeholder     | Input hint       |
| value           | Controlled input |
| onChangeText    | Handle typing    |
| secureTextEntry | Password field   |
| keyboardType    | Type of keyboard |

Example:

```js
keyboardType="numeric"
keyboardType="email-address"
```

---

# 6. Button

### Definition

`Button` is used to **trigger an action when pressed**.

### Example

```js
import { Button } from "react-native";

<Button
  title="Click Me"
  onPress={() => alert("Pressed!")}
/>
```

### Important Props

| Prop     | Description           |
| -------- | --------------------- |
| title    | Button text           |
| onPress  | Function when pressed |
| color    | Button color          |
| disabled | Disable button        |

Example:

```js
<Button
  title="Submit"
  color="green"
  disabled={false}
/>
```

⚠️ Default `Button` has **limited styling**.

Developers often use:

```
TouchableOpacity
Pressable
```

---

# 7. FlatList

### Definition

`FlatList` is used to **render large lists efficiently**.

Unlike `ScrollView`, it **renders only visible items**.

### Example

```js
import { FlatList, Text } from "react-native";

const data = [
  {id: "1", name: "A"},
  {id: "2", name: "B"},
  {id: "3", name: "C"},
];

<FlatList
  data={data}
  renderItem={({item}) => <Text>{item.name}</Text>}
  keyExtractor={(item) => item.id}
/>
```

### Important Props

| Prop         | Description      |
| ------------ | ---------------- |
| data         | List data        |
| renderItem   | Render each item |
| keyExtractor | Unique key       |
| horizontal   | Horizontal list  |

### Advantages

✔ Efficient
✔ Lazy loading
✔ Smooth scrolling

---

# 8. SectionList

### Definition

`SectionList` is used to **display grouped lists**.

Example:

```
Fruits
  Apple
  Mango

Vegetables
  Carrot
  Potato
```

### Example

```js
import { SectionList, Text } from "react-native";

<SectionList
  sections={[
    {title: "Fruits", data: ["Apple", "Mango"]},
    {title: "Vegetables", data: ["Carrot", "Potato"]},
  ]}
  renderItem={({item}) => <Text>{item}</Text>}
  renderSectionHeader={({section}) => (
    <Text>{section.title}</Text>
  )}
/>
```

---

# 9. SafeAreaView

### Definition

`SafeAreaView` ensures that content **does not overlap system UI** like:

* Notch
* Status bar
* Rounded screen corners

### Example

```js
import { SafeAreaView, Text } from "react-native";

<SafeAreaView>
  <Text>Hello</Text>
</SafeAreaView>
```

Used mostly in **iPhone notch devices**.

---

# 10. Pressable

### Definition

`Pressable` detects **user touch interactions**.

It replaces older components like:

```
TouchableOpacity
TouchableHighlight
```

### Example

```js
import { Pressable, Text } from "react-native";

<Pressable onPress={() => alert("Pressed")}>
  <Text>Press Me</Text>
</Pressable>
```

### Advanced Example

```js
<Pressable
  onPress={() => console.log("Pressed")}
  onLongPress={() => console.log("Long Press")}
>
  <Text>Click</Text>
</Pressable>
```

---

# 11. ActivityIndicator

### Definition

Used to show **loading spinner**.

### Example

```js
import { ActivityIndicator } from "react-native";

<ActivityIndicator size="large" color="blue" />
```

### Props

| Prop      | Description   |
| --------- | ------------- |
| size      | small / large |
| color     | spinner color |
| animating | show/hide     |

---

# 12. StatusBar

### Definition

Used to **control device status bar**.

### Example

```js
import { StatusBar } from "react-native";

<StatusBar
  backgroundColor="blue"
  barStyle="light-content"
/>
```

---

# Core Components Summary Table

| Component         | Purpose                  |
| ----------------- | ------------------------ |
| View              | Layout container         |
| Text              | Display text             |
| Image             | Show images              |
| ScrollView        | Scrollable content       |
| TextInput         | User text input          |
| Button            | Basic button             |
| FlatList          | Efficient list rendering |
| SectionList       | Grouped lists            |
| SafeAreaView      | Avoid system UI overlap  |
| Pressable         | Touch interactions       |
| ActivityIndicator | Loading spinner          |
| StatusBar         | Control status bar       |

---

If you want, I can also write the **next part of Chapter 4**, which most courses include:

1️⃣ **React Native Styling System (Very Important)**
2️⃣ **Flexbox Layout in React Native (Most Important for UI)**
3️⃣ **Dimensions API**
4️⃣ **Platform-specific components**

These are **extremely important for React Native interviews and development.**
