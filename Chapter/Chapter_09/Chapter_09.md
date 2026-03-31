Here’s a **detailed, structured note on React Native Async Storage** (useful for study + interview + practical use):

---

# 📘 React Native Async Storage (Detailed Notes)

## 🔹 1. What is Async Storage?

**Async Storage** is a **persistent, key-value storage system** in React Native used to store data locally on the device.

* Works like browser **localStorage**, but **asynchronous**
* Stores data in **string format**
* Useful for saving:

  * User login info
  * App settings (theme, language)
  * Cached API data

---

## 🔹 2. Package Installation

Async Storage is not built-in anymore. You must install it:

```bash
npm install @react-native-async-storage/async-storage
```

or

```bash
yarn add @react-native-async-storage/async-storage
```

Then import:

```js
import AsyncStorage from '@react-native-async-storage/async-storage';
```

---

## 🔹 3. Key Features

* ✅ Asynchronous (non-blocking)
* ✅ Persistent (data remains after app restart)
* ✅ Simple key-value storage
* ❌ Not suitable for large data
* ❌ Not encrypted (use secure storage for sensitive data)

---

## 🔹 4. Core Methods

### 4.1 `setItem()` → Save Data

```js
await AsyncStorage.setItem('username', 'Aminul');
```

👉 Stores data as string

---

### 4.2 `getItem()` → Retrieve Data

```js
const value = await AsyncStorage.getItem('username');
console.log(value);
```

---

### 4.3 `removeItem()` → Delete Data

```js
await AsyncStorage.removeItem('username');
```

---

### 4.4 `clear()` → Remove All Data

```js
await AsyncStorage.clear();
```

⚠️ Clears everything

---

### 4.5 `getAllKeys()` → Get All Keys

```js
const keys = await AsyncStorage.getAllKeys();
```

---

### 4.6 `multiSet()` → Store Multiple Values

```js
await AsyncStorage.multiSet([
  ['name', 'Aminul'],
  ['age', '25'],
]);
```

---

### 4.7 `multiGet()` → Get Multiple Values

```js
const values = await AsyncStorage.multiGet(['name', 'age']);
```

---

## 🔹 5. Storing Objects (Important)

AsyncStorage only supports **strings**, so use JSON:

### Save Object

```js
const user = {
  name: 'Aminul',
  age: 25,
};

await AsyncStorage.setItem('user', JSON.stringify(user));
```

### Retrieve Object

```js
const data = await AsyncStorage.getItem('user');
const user = JSON.parse(data);

console.log(user.name);
```

---

## 🔹 6. Error Handling

Always use `try-catch`:

```js
try {
  await AsyncStorage.setItem('key', 'value');
} catch (error) {
  console.log('Error saving data', error);
}
```

---

## 🔹 7. Example: Login Persistence

```js
const loginUser = async () => {
  try {
    await AsyncStorage.setItem('isLoggedIn', 'true');
  } catch (e) {}
};

const checkLogin = async () => {
  const value = await AsyncStorage.getItem('isLoggedIn');
  if (value === 'true') {
    console.log('User already logged in');
  }
};
```

---

## 🔹 8. Best Practices

* 🔸 Always use **async/await**
* 🔸 Store only small data
* 🔸 Use meaningful keys (`user_token`, `theme_mode`)
* 🔸 Handle errors properly
* 🔸 Avoid storing sensitive data (passwords)

---

## 🔹 9. Limitations

* ❌ No encryption
* ❌ Slow for large datasets
* ❌ Not relational (no queries like database)

---

## 🔹 10. Alternatives

Use these when AsyncStorage is not enough:

* **Secure Storage** → `react-native-keychain`
* **Database** → SQLite / Realm / WatermelonDB
* **State Persistence** → Redux Persist

---

## 🔹 11. AsyncStorage vs LocalStorage

| Feature      | AsyncStorage | localStorage |
| ------------ | ------------ | ------------ |
| Async        | ✅ Yes        | ❌ No         |
| Platform     | Mobile       | Web          |
| Storage Type | Key-Value    | Key-Value    |
| Performance  | Better       | Blocking     |

---

## 🔹 12. Common Use Cases

* ✅ Authentication tokens
* ✅ Theme settings (dark/light)
* ✅ Onboarding status
* ✅ Offline data caching

---

## 🔹 13. Small Utility Wrapper (Best Practice)

```js
const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {}
};

const getData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data != null ? JSON.parse(data) : null;
  } catch (e) {}
};
```

---

## 🔹 14. When to Use AsyncStorage

Use it when:

* Data is **simple**
* No need for **security**
* No need for **complex queries**

---

## 🔚 Conclusion

Async Storage is a **simple and powerful local storage solution** for React Native apps. It’s best for **lightweight persistence**, but for complex or sensitive data, better alternatives should be used.

---

If you want, I can also create:
✅ Interview questions on AsyncStorage
✅ Real project example (Todo App / Auth Flow)
✅ Comparison with Redux Persist

Just tell me 👍
