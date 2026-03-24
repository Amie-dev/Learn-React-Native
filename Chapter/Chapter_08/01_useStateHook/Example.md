Good progress 👍 — you’re very close. Let’s fix the **bugs + complete object & array logic properly**.

---

# ❌ Problems in Your Code

### 1. ❌ Wrong `Math.random` usage

```js
Math.random(*2000 to 2024*) // ❌ invalid
```

---

### 2. ❌ Multiple `setCar` calls (state override issue)

```js
setCar({...car, year: ...})
setCar({...car, model: ...}) // ❌ overwrites previous update
```

👉 Only last update applies

---

### 3. ❌ Missing `onPress` function

```js
<TouchableOpacity onPress={}> ❌
```

---

### 4. ❌ Wrong display

```js
Car Name:{car.model} // ❌ should be car.name
```

---

### 5. ❌ Array not handled (no push/pop logic)

---

# ✅ Fully Fixed & Completed Code

```js id="complete123"
import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export const CounterScreen = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  const [car, setCar] = useState({
    name: 'BMW',
    model: 200,
    year: 2000,
  });

  const [array, setArray] = useState([]);

  // Increase by 3
  const Increase3 = () => {
    setNum(prev => prev + 1);
    setNum(prev => prev + 1);
    setNum(prev => prev + 1);
  };

  // Decrease by 3
  const Decrease3 = () => {
    setNum(prev => prev - 1);
    setNum(prev => prev - 1);
    setNum(prev => prev - 1);
  };

  // ✅ Correct Car Update (Single Call)
  const ChangeCarInfo = () => {
    setCar(prev => ({
      ...prev,
      model: Math.floor(Math.random() * 1000),
      year: Math.floor(Math.random() * (2024 - 2000 + 1)) + 2000,
    }));
  };

  // ✅ Add random number to array
  const pushItem = () => {
    const randomNum = Math.floor(Math.random() * 100);
    setArray(prev => [...prev, randomNum]);
  };

  // ✅ Remove last item
  const popItem = () => {
    setArray(prev => prev.slice(0, -1));
  };

  return (
    <View style={{ padding: 20 }}>

      {/* -------- Counter Section -------- */}
      <View style={{ marginBottom: 30 }}>
        <Text>Count: {count}</Text>

        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Text>Increase</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCount(count - 1)}>
          <Text>Decrease</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCount(0)}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>

      {/* -------- Number Section -------- */}
      <View style={{ marginBottom: 30 }}>
        <Text>Number: {num}</Text>

        <TouchableOpacity onPress={Increase3}>
          <Text>Increase +3</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Decrease3}>
          <Text>Decrease -3</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setNum(0)}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>

      {/* -------- Car Object Section -------- */}
      <View style={{ marginBottom: 30 }}>
        <Text>Car Name: {car.name}</Text>
        <Text>Model: {car.model}</Text>
        <Text>Year: {car.year}</Text>

        <TouchableOpacity onPress={ChangeCarInfo}>
          <Text>Change Car Info</Text>
        </TouchableOpacity>
      </View>

      {/* -------- Array Section -------- */}
      <View>
        <Text>Current Array: {array.join(', ')}</Text>
        <Text>Length: {array.length}</Text>

        <TouchableOpacity onPress={pushItem}>
          <Text>Push</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={popItem}>
          <Text>Pop</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};
```

---

# 🔥 What You Learned (Important Concepts)

## ✅ 1. Object State Update → Single Call

```js
setCar(prev => ({
  ...prev,
  model: newValue,
  year: newValue
}));
```

👉 Never call `setState` multiple times for same object

---

## ✅ 2. Array Update (Immutable)

### Add:

```js
setArray(prev => [...prev, value]);
```

### Remove:

```js
setArray(prev => prev.slice(0, -1));
```

---

## ✅ 3. Random Number Logic

```js
Math.floor(Math.random() * max)
```

---

## ✅ 4. Functional Update = Best Practice

Used everywhere:

```js
setState(prev => ...)
```

---

# 🎯 Final Output Features

✔ Counter (+1 / -1 / reset)
✔ Number (+3 / -3 / reset)
✔ Car object updates dynamically
✔ Array push & pop working
✔ Proper re-rendering

---

# 🚀 Next Upgrade (Recommended)

If you want to go pro level:

✅ Add **FlatList for array display**
✅ Add **input field → push custom values**
✅ Add **useEffect → log changes**
✅ Convert into **real UI (buttons, styling)**

Just tell me 👍
