
---

# 1. What is `react-hook-form`

**`react-hook-form`** is a lightweight library for managing forms in React using **React Hooks**.

It helps with:

* Form state management
* Validation
* Error handling
* Performance optimization

Official package:
`react-hook-form`

Install:

```bash
npm install react-hook-form
```

---

# 2. Why Use React Hook Form

Problems with normal React forms:

* Too many `useState`
* Re-renders on every change
* Complex validation

Example without library:

```jsx
const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
```

With `react-hook-form`:

```jsx
const { register, handleSubmit } = useForm()
```

Much cleaner.

---

# 3. Key Features

| Feature                          | Description                 |
| -------------------------------- | --------------------------- |
| Lightweight                      | Small bundle size           |
| Performance                      | Minimal re-renders          |
| Built-in validation              | Required, min, max, pattern |
| Easy integration                 | Works with UI libraries     |
| Controlled & uncontrolled inputs | Flexible                    |

---

# 4. Core Hook

## `useForm()`

Main hook to manage form.

```javascript
const {
 register,
 handleSubmit,
 formState: { errors },
 reset,
 watch
} = useForm()
```

---

# 5. Important Methods

## 1️⃣ register

Registers an input field.

```jsx
<input {...register("name")} />
```

Example:

```jsx
<input {...register("email")} />
```

---

## 2️⃣ handleSubmit

Handles form submission.

```jsx
<form onSubmit={handleSubmit(onSubmit)}>
```

Example:

```javascript
const onSubmit = (data) => {
 console.log(data)
}
```

Output:

```
{
 name: "Aminul",
 email: "aminul@email.com"
}
```

---

## 3️⃣ errors

Shows validation errors.

```jsx
{errors.name && <p>Name is required</p>}
```

---

## 4️⃣ reset()

Resets form values.

```javascript
reset()
```

Example:

```javascript
reset({
 name: "",
 email: ""
})
```

---

## 5️⃣ watch()

Watches input values.

```javascript
const name = watch("name")
```

Useful for dynamic UI.

---

# 6. Basic Example

```jsx
import { useForm } from "react-hook-form";

function MyForm() {

 const {
  register,
  handleSubmit,
  formState:{errors}
 } = useForm();

 const onSubmit = (data) => {
  console.log(data);
 };

 return (

<form onSubmit={handleSubmit(onSubmit)}>

<input
 placeholder="Name"
 {...register("name",{ required:true })}
/>

{errors.name && <p>Name required</p>}

<input
 placeholder="Email"
 {...register("email",{ required:true })}
/>

<button type="submit">
 Submit
</button>

</form>

 )
}
```

---

# 7. Validation Rules

Validation can be added inside `register`.

Example:

```jsx
<input
 {...register("username",{
  required: "Username required",
  minLength: 3,
  maxLength: 10
 })}
/>
```

---

## Common Validation Rules

| Rule      | Example                 |
| --------- | ----------------------- |
| required  | `required:true`         |
| minLength | `minLength:5`           |
| maxLength | `maxLength:10`          |
| pattern   | `pattern:/^[A-Za-z]+$/` |

Example:

```jsx
<input
 {...register("email",{
 required:"Email required",
 pattern:/^\S+@\S+$/i
 })}
/>
```

---

# 8. Custom Validation

```jsx
<input
 {...register("age",{
 validate:(value)=> value > 18
 })}
/>
```

Example with message:

```jsx
validate:(value)=> value > 18 || "Age must be above 18"
```

---

# 9. Default Values

```javascript
const { register } = useForm({
 defaultValues:{
  name:"Aminul",
  email:"aminul@email.com"
 }
})
```

---

# 10. Controlled Components

Sometimes components need `Controller`.

Example with UI library:

```jsx
import { Controller } from "react-hook-form";

<Controller
 name="email"
 control={control}
 render={({ field }) => (
  <input {...field} />
 )}
/>
```

Used for:

* Material UI
* Ant Design
* React Native TextInput

---

# 11. Form State

`formState` gives useful information.

```javascript
formState:{
 errors,
 isDirty,
 isValid,
 isSubmitting
}
```

Example:

```javascript
if(isSubmitting){
 console.log("Submitting...")
}
```

---

# 12. Nested Fields

You can create nested objects.

```jsx
<input {...register("user.name")} />
<input {...register("user.email")} />
```

Output:

```
{
 user:{
  name:"Aminul",
  email:"aminul@email.com"
 }
}
```

---

# 13. Dynamic Fields

Using `useFieldArray`.

Example:

```javascript
const { fields, append, remove } = useFieldArray({
 control,
 name:"skills"
})
```

Add field:

```javascript
append({ skill:"" })
```

Remove field:

```javascript
remove(index)
```

---

# 14. Performance Advantage

Normal React form:

```
Every keystroke → component re-render
```

React Hook Form:

```
Uses uncontrolled inputs
Minimal re-renders
Better performance
```

---

# 15. React Native Example

```jsx
import { useForm, Controller } from "react-hook-form"
import { TextInput, Button, View } from "react-native"

function App(){

const { control, handleSubmit } = useForm()

const onSubmit = data => console.log(data)

return(

<View>

<Controller
 control={control}
 name="name"
 render={({ field:{onChange,value} })=>(
<TextInput
 placeholder="Enter name"
 onChangeText={onChange}
 value={value}
/>
 )}
/>

<Button
 title="Submit"
 onPress={handleSubmit(onSubmit)}
/>

</View>

)

}
```

---

# 16. Advantages

* Less code
* Faster forms
* Easy validation
* Works with React & React Native
* Good TypeScript support

---

# 17. Limitations

* Learning curve
* Controlled component integration sometimes complex

---

# 18. Common Interview Questions

### What is react-hook-form?

A library for managing forms in React using hooks with better performance.

---

### What does `register` do?

Registers input fields and connects them to the form.

---

### What is `handleSubmit`?

Handles form submission and validation.

---

### Why is react-hook-form fast?

Because it uses **uncontrolled components and refs instead of state**.

---

# 19. Typical Folder Structure

```
src
 ├── components
 │    └── LoginForm.js
 ├── pages
 │    └── Register.js
 ├── hooks
 │    └── useAuthForm.js
```

---

# 20. When to Use React Hook Form

Use it when:

* Large forms
* Validation required
* Performance matters
* Complex input handling

---

----------------------------------------

1️⃣ **React Hook Form with React Native**
2️⃣ **Advanced validation with Zod / Yup**

These are commonly used in **production apps and interviews**.

---

# 1. React Hook Form with React Native (Complete Guide)

React Native inputs are **controlled components**, so we usually use **`Controller`** from `react-hook-form`.

## Install Packages

```bash
npm install react-hook-form
```

---

# Basic Example (React Native Form)

```jsx
import React from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";

const MyForm = () => {

  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View>

      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Enter name"
            value={value}
            onChangeText={onChange}
            style={{ borderWidth:1, padding:10, marginBottom:10 }}
          />
        )}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />

    </View>
  );
};

export default MyForm;
```

### Output

```
{name: "Aminul"}
```

---

# Important Concepts

## useForm()

Main hook.

```javascript
const { control, handleSubmit } = useForm()
```

---

## Controller

Used for React Native inputs.

```jsx
<Controller
  control={control}
  name="email"
  render={({ field }) => (
    <TextInput {...field} />
  )}
/>
```

---

## handleSubmit()

Handles form submit.

```javascript
handleSubmit(onSubmit)
```

---

## Form Errors

```javascript
const {
 control,
 handleSubmit,
 formState:{ errors }
} = useForm()
```

Example:

```jsx
{errors.name && <Text>Name required</Text>}
```

---

# Example With Validation

```jsx
import React from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";

const LoginForm = () => {

const {
 control,
 handleSubmit,
 formState:{errors}
} = useForm()

const onSubmit = data => console.log(data)

return(

<View>

<Controller
 name="email"
 control={control}
 rules={{ required:"Email is required" }}
 render={({field:{onChange,value}})=>(
<TextInput
 placeholder="Enter email"
 value={value}
 onChangeText={onChange}
/>
 )}
/>

{errors.email && <Text>{errors.email.message}</Text>}

<Button title="Submit" onPress={handleSubmit(onSubmit)} />

</View>

)

}

export default LoginForm
```

---

# 2. Advanced Validation with Zod / Yup

For complex validation we use **schema validation libraries**.

Most popular:

| Library | Use                          |
| ------- | ---------------------------- |
| Yup     | Very common                  |
| Zod     | Modern & TypeScript friendly |

---

# Install Validation Libraries

### Yup

```bash
npm install yup @hookform/resolvers
```

### Zod

```bash
npm install zod @hookform/resolvers
```

---

# Example Using Yup

## Validation Schema

```javascript
import * as yup from "yup"

const schema = yup.object({

name: yup
.string()
.required("Name is required"),

email: yup
.string()
.email("Invalid email")
.required("Email required"),

password: yup
.string()
.min(6,"Password must be 6 characters")

})
```

---

## Connect Schema to React Hook Form

```javascript
import { yupResolver } from "@hookform/resolvers/yup"

const {
 control,
 handleSubmit,
 formState:{errors}
} = useForm({

resolver: yupResolver(schema)

})
```

---

# Full React Native Example (Yup)

```jsx
import React from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required("Email required"),
  password: yup.string().min(6).required("Password required")
});

const LoginForm = () => {

const {
 control,
 handleSubmit,
 formState:{errors}
} = useForm({
 resolver:yupResolver(schema)
})

const onSubmit=data=>console.log(data)

return(

<View>

<Controller
 name="email"
 control={control}
 render={({field:{onChange,value}})=>(
<TextInput
 placeholder="Email"
 value={value}
 onChangeText={onChange}
/>
 )}
/>

{errors.email && <Text>{errors.email.message}</Text>}

<Controller
 name="password"
 control={control}
 render={({field:{onChange,value}})=>(
<TextInput
 placeholder="Password"
 secureTextEntry
 value={value}
 onChangeText={onChange}
/>
 )}
/>

{errors.password && <Text>{errors.password.message}</Text>}

<Button title="Login" onPress={handleSubmit(onSubmit)} />

</View>

)

}

export default LoginForm
```

---

# Example Using Zod

## Schema

```javascript
import { z } from "zod"

const schema = z.object({

name: z.string().min(2),

email: z.string().email(),

password: z.string().min(6)

})
```

---

## Resolver

```javascript
import { zodResolver } from "@hookform/resolvers/zod"

const form = useForm({
 resolver: zodResolver(schema)
})
```

---

# Yup vs Zod

| Feature    | Yup          | Zod       |
| ---------- | ------------ | --------- |
| Popularity | Very popular | Growing   |
| TypeScript | Limited      | Excellent |
| Syntax     | Older        | Cleaner   |

Most new projects use **Zod**.

---

# Real Production Flow

Typical login form:

```
React Native UI
      ↓
React Hook Form
      ↓
Validation (Zod/Yup)
      ↓
API Request
      ↓
Auth / Token
```

---

# Best Practices

✔ Use **Controller** for React Native
✔ Use **schema validation (Zod/Yup)**
✔ Keep forms in **separate components**
✔ Show validation messages
✔ Disable submit when invalid

---

# Example Folder Structure

```
src
 ├── components
 │    └── LoginForm.js
 ├── validation
 │    └── loginSchema.js
 ├── screens
 │    └── LoginScreen.js
```

---

# Interview Questions

### Why use React Hook Form?

Better performance and less re-rendering.

---

### Why use Controller in React Native?

React Native inputs are controlled components.

---

### Why use Zod/Yup?

To create reusable validation schemas.

---

