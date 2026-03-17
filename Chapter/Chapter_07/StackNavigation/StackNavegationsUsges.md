
---

# 📘 When to Use Navigation Methods (Stack Navigation)

---

# 🔷 1. `navigation.navigate()`

## ✅ When to Use:

* Normal screen navigation
* When you don’t want duplicate screens
* When screen might already exist in stack

---

## 📌 Example:

```js
navigation.navigate('Profile');
```

---

## 🧠 Behavior:

* If screen **already exists** → go back to it
* If not → create new

---

## 🎯 Real Use Case:

* Home → Profile → Settings
* You want only **one Profile screen**

---

## ❗ Use navigate when:

✔ Avoid duplicate screens
✔ Standard app flow
✔ Switching between main screens

---

# 🔷 2. `navigation.push()`

## ✅ When to Use:

* When you need **multiple instances of same screen**

---

## 📌 Example:

```js
navigation.push('ProductDetails', { id: 1 });
navigation.push('ProductDetails', { id: 2 });
```

---

## 🧠 Behavior:

* Always creates **new screen**
* Stack keeps growing

---

## 🎯 Real Use Case:

* E-commerce app
  👉 Product → Product → Product (different items)

---

## ❗ Use push when:

✔ Same screen multiple times
✔ Dynamic content (IDs, posts, etc.)

---

# 🔥 navigate vs push (Quick Understanding)

| Case                        | Use      |
| --------------------------- | -------- |
| Open Profile once           | navigate |
| Open Product multiple times | push     |

---

# 🔷 3. `navigation.goBack()`

## ✅ When to Use:

* To go to previous screen

---

## 📌 Example:

```js
navigation.goBack();
```

---

## 🧠 Behavior:

* Pops 1 screen from stack

---

## 🎯 Real Use Case:

* Back button
* Cancel action

---

## ❗ Use goBack when:

✔ Simple back navigation
✔ No need to control stack

---

# 🔷 4. `navigation.pop()`

## ✅ When to Use:

* Remove screen(s) from stack

---

## 📌 Example:

```js
navigation.pop();      // remove 1 screen
navigation.pop(2);     // remove 2 screens
```

---

## 🧠 Behavior:

* Removes given number of screens

---

## 🎯 Real Use Case:

* Skip multiple screens
  👉 Checkout → Payment → Success → Back to Home

---

## ❗ Use pop when:

✔ Need to remove multiple screens
✔ Control stack manually

---

# 🔷 5. `navigation.replace()`

## ✅ When to Use:

* When you don’t want user to go back

---

## 📌 Example:

```js
navigation.replace('Home');
```

---

## 🧠 Behavior:

* Current screen is **replaced**
* No back option

---

## 🎯 Real Use Case:

* Login → Home
  👉 User should NOT go back to Login

---

## ❗ Use replace when:

✔ Authentication flow
✔ Splash screen
✔ Prevent back navigation

---

# 🔷 6. Quick Decision Guide 🧠

```id="decision"
Do you want duplicate screen?
    YES → push
    NO → navigate

Do you want to go back?
    YES → goBack

Do you want to remove multiple screens?
    YES → pop

Do you want to block back navigation?
    YES → replace
```

---

# 🔷 7. Real App Scenarios

---

## 📱 Scenario 1: Login Flow

```id="loginflow"
Login → Home
```

✔ Use:

```js
navigation.replace('Home');
```

👉 Prevent going back to login

---

## 📱 Scenario 2: Product App

```id="productflow"
Home → Product → Product → Product
```

✔ Use:

```js
navigation.push('Product', { id });
```

---

## 📱 Scenario 3: Settings Navigation

```id="settingsflow"
Home → Settings
```

✔ Use:

```js
navigation.navigate('Settings');
```

---

## 📱 Scenario 4: Back Button

✔ Use:

```js
navigation.goBack();
```

---

## 📱 Scenario 5: Skip Steps

```id="skipflow"
Step1 → Step2 → Step3 → Home
```

✔ Use:

```js
navigation.pop(3);
```

---

# 🔷 8. Common Mistakes ❌

❌ Using `push` for normal navigation
❌ Using `navigate` when multiple instances needed
❌ Forgetting `replace` in login flow
❌ Using `goBack` when stack doesn’t exist

---

# 🔷 9. Final Summary Table

| Method   | Use Case           | Behavior       |
| -------- | ------------------ | -------------- |
| navigate | Normal navigation  | Reuse screen   |
| push     | Multiple instances | Always new     |
| goBack   | Go to previous     | Pop 1          |
| pop      | Remove multiple    | Pop many       |
| replace  | Block back         | Replace screen |

---

# 🚀 Final Tip

👉 **90% of apps mainly use:**

* `navigate`
* `goBack`
* `replace`

👉 `push` and `pop` are used in **advanced scenarios**

---
