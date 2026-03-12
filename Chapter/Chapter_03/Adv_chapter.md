
---

# React Native Advanced Core Components Example

```javascript
import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
  Modal,
  KeyboardAvoidingView,
  StatusBar,
  RefreshControl,
  ScrollView,
  Dimensions,
  Platform,
  Linking,
  Alert,
  TextInput,
} from "react-native";

const AdvancedCoreComponents = () => {

  // State for Modal visibility
  const [modalVisible, setModalVisible] = useState(false);

  // State for loading indicator
  const [loading, setLoading] = useState(false);

  // State for RefreshControl
  const [refreshing, setRefreshing] = useState(false);

  // Device dimensions
  const { width, height } = Dimensions.get("window");

  // Refresh function
  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (

    // KeyboardAvoidingView prevents keyboard from covering inputs
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >

      {/* StatusBar controls device status bar appearance */}
      <StatusBar backgroundColor="purple" barStyle="light-content" />

      {/* ScrollView allows content scrolling */}
      <ScrollView
        contentContainerStyle={{ padding: 20 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >

        <View>

          {/* Display device screen dimensions */}
          <Text>Screen Width: {width}</Text>
          <Text>Screen Height: {height}</Text>

          {/* Platform check */}
          <Text>Running on: {Platform.OS}</Text>

          {/* Pressable component for handling touch interactions */}
          <Pressable
            onPress={() => Alert.alert("Pressed!", "You pressed the button")}
            style={{
              backgroundColor: "blue",
              padding: 10,
              marginVertical: 10,
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              Pressable Button
            </Text>
          </Pressable>

          {/* Show loading spinner */}
          <Pressable
            onPress={() => setLoading(!loading)}
            style={{
              backgroundColor: "green",
              padding: 10,
              marginVertical: 10,
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              Toggle Loading
            </Text>
          </Pressable>

          {loading && (
            <ActivityIndicator size="large" color="red" />
          )}

          {/* Button to open Modal */}
          <Pressable
            onPress={() => setModalVisible(true)}
            style={{
              backgroundColor: "purple",
              padding: 10,
              marginVertical: 10,
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              Open Modal
            </Text>
          </Pressable>

          {/* Modal component */}
          <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  padding: 20,
                  borderRadius: 10,
                }}
              >
                <Text>This is a Modal</Text>

                <Pressable
                  onPress={() => setModalVisible(false)}
                  style={{
                    marginTop: 10,
                    backgroundColor: "red",
                    padding: 10,
                  }}
                >
                  <Text style={{ color: "white" }}>Close Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          {/* TextInput example inside KeyboardAvoidingView */}
          <TextInput
            placeholder="Type something..."
            style={{
              borderWidth: 1,
              borderColor: "gray",
              padding: 10,
              marginVertical: 20,
            }}
          />

          {/* Linking example (open website) */}
          <Pressable
            onPress={() => Linking.openURL("https://reactnative.dev")}
            style={{
              backgroundColor: "orange",
              padding: 10,
            }}
          >
            <Text style={{ textAlign: "center" }}>
              Open React Native Website
            </Text>
          </Pressable>

          {/* Alert example */}
          <Pressable
            onPress={() =>
              Alert.alert(
                "Alert Title",
                "This is an alert message",
                [
                  { text: "Cancel", style: "cancel" },
                  { text: "OK", onPress: () => console.log("OK Pressed") },
                ]
              )
            }
            style={{
              backgroundColor: "black",
              padding: 10,
              marginTop: 10,
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              Show Alert
            </Text>
          </Pressable>

        </View>

      </ScrollView>

    </KeyboardAvoidingView>
  );
};

export default AdvancedCoreComponents;
```

---

# Explanation of Each Component

### 1️⃣ Pressable

Handles **touch interactions**.

Example uses:

* Buttons
* Cards
* Touchable elements

Features:

* `onPress`
* `onLongPress`
* `onPressIn`
* `onPressOut`

---

# 2️⃣ ActivityIndicator

Displays a **loading spinner**.

Example uses:

* API loading
* Screen loading
* Authentication

```js
<ActivityIndicator size="large" color="red" />
```

---

# 3️⃣ Modal

Displays **content on top of the screen**.

Used for:

* Popups
* Dialogs
* Forms

Props:

* `visible`
* `animationType`
* `transparent`

---

# 4️⃣ KeyboardAvoidingView

Prevents **keyboard from covering input fields**.

Very important for:

* Login screens
* Forms
* Chat apps

---

# 5️⃣ StatusBar

Controls **device status bar**.

Example:

```js
<StatusBar backgroundColor="purple" barStyle="light-content" />
```

Options:

* dark-content
* light-content

---

# 6️⃣ RefreshControl

Adds **pull-to-refresh functionality**.

Used inside:

```js
ScrollView
FlatList
SectionList
```

Example:

```js
<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
```

---

# 7️⃣ Dimensions

Gets **screen width and height**.

Example:

```js
const {width, height} = Dimensions.get("window");
```

Used for:

* responsive design
* layout adjustments

---

# 8️⃣ Platform

Detects **Android or iOS**.

Example:

```js
Platform.OS
```

Output:

```
android
ios
```

Example use:

```js
Platform.OS === "ios"
```

---

# 9️⃣ Linking

Used to **open external apps or URLs**.

Example:

```js
Linking.openURL("https://google.com")
```

Can open:

* websites
* phone dialer
* email
* maps

---

# 🔟 Alert

Displays **native alert dialog**.

Example:

```js
Alert.alert("Title", "Message")
```

With buttons:

```js
Alert.alert(
 "Title",
 "Message",
 [
   {text:"Cancel"},
   {text:"OK"}
 ]
)
```

---

# Advanced Core Components Summary

| Component            | Purpose                   |
| -------------------- | ------------------------- |
| Pressable            | Handle touch interactions |
| ActivityIndicator    | Loading spinner           |
| Modal                | Popup UI                  |
| KeyboardAvoidingView | Prevent keyboard overlap  |
| StatusBar            | Control device status bar |
| RefreshControl       | Pull-to-refresh           |
| Dimensions           | Screen size               |
| Platform             | Detect OS                 |
| Linking              | Open external apps/URLs   |
| Alert                | Native alert popup        |

---
