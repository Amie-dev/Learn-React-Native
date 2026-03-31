

# 📘 **Chapter 09: API Handling & Data Fetching in React Native**

---

## 🔹 9.1 Introduction to API Calls

### 📌 What is an API?

* API = **Application Programming Interface**
* Used to **fetch or send data** between frontend (React Native app) and backend (server)

### 📌 Common Use Cases

* Fetch user data
* Login authentication
* Load product lists
* Submit forms

---

## 🔹 9.2 Fetch API (Built-in Method)

### 📌 Basic Syntax

```js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

---

### 📌 Using with useEffect

```js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  return (
    <View>
      {data.slice(0,5).map(item => (
        <Text key={item.id}>{item.title}</Text>
      ))}
    </View>
  );
};
```

---

## 🔹 9.3 Async/Await (Modern Approach)

### 📌 Cleaner Syntax

```js
const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();
    setData(json);
  } catch (error) {
    console.error(error);
  }
};
```

### 📌 Use inside useEffect

```js
useEffect(() => {
  fetchData();
}, []);
```

---

## 🔹 9.4 Axios (Popular Library)

### 📌 Installation

```bash
npm install axios
```

---

### 📌 Basic Usage

```js
import axios from 'axios';

const fetchData = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setData(res.data);
  } catch (err) {
    console.log(err);
  }
};
```

---

### 📌 Why Axios?

| Feature        | Fetch  | Axios     |
| -------------- | ------ | --------- |
| JSON Parsing   | Manual | Automatic |
| Error Handling | Basic  | Better    |
| Interceptors   | ❌      | ✅         |
| Timeout        | ❌      | ✅         |

---

## 🔹 9.5 Handling Loading State

```js
const [loading, setLoading] = useState(true);

const fetchData = async () => {
  try {
    const res = await axios.get(API);
    setData(res.data);
  } catch (e) {
    console.log(e);
  } finally {
    setLoading(false);
  }
};
```

### 📌 UI Example

```js
{loading ? <Text>Loading...</Text> : <Text>Data Loaded</Text>}
```

---

## 🔹 9.6 Error Handling

```js
const [error, setError] = useState(null);

try {
  const res = await axios.get(API);
} catch (err) {
  setError("Something went wrong");
}
```

### 📌 UI

```js
{error && <Text>{error}</Text>}
```

---

## 🔹 9.7 POST Request (Sending Data)

```js
const sendData = async () => {
  try {
    const res = await axios.post('https://api.example.com/users', {
      name: 'John',
      age: 25
    });
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};
```

---

## 🔹 9.8 PUT & DELETE Requests

### 📌 Update Data

```js
axios.put(`https://api.com/users/1`, {
  name: "Updated Name"
});
```

### 📌 Delete Data

```js
axios.delete(`https://api.com/users/1`);
```

---

## 🔹 9.9 FlatList with API Data

```js
import { FlatList, Text } from 'react-native';

<FlatList
  data={data}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <Text>{item.title}</Text>
  )}
/>
```

---

## 🔹 9.10 Best Practices ⭐

### ✅ Do’s

* Use **async/await**
* Show **loading indicator**
* Handle **errors properly**
* Use **FlatList** for performance
* Keep API logic in **separate files (services)**

---

### ❌ Don’ts

* Don’t call API inside render
* Don’t ignore errors
* Don’t block UI

---

## 🔹 9.11 Folder Structure (Recommended)

```
src/
 ├── api/
 │    └── api.js
 ├── screens/
 ├── components/
```

---

## 🔹 9.12 API Service Example

```js
// api/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getPosts = () => API.get('/posts');
```

---

## 🔹 9.13 Summary

* Fetch data using **fetch or axios**
* Prefer **axios + async/await**
* Manage **loading, error, and data states**
* Display using **FlatList**
* Use **separate API service files**

---

## 🔥 Interview Questions

1. Difference between fetch and axios?
2. How to handle API errors?
3. Why use async/await?
4. What is useEffect’s role in API calls?
5. How to optimize large API lists?

