# React & Form Handling Learning Notes

## useRef Hook - DOM Element References

### Understanding useRef

`nameRef` is a reference to the input element in the form. It is created using the `useRef` hook from React, which allows us to access the DOM element directly. The type of the reference is specified as `HTMLInputElement`, which means that `nameRef.current` will be of type `HTMLInputElement` or `null`. This allows us to access properties and methods of the input element, such as value, without causing TypeScript errors.

#### Code Sample:

```typescript
import { useRef } from 'react'

const MyComponent = () => {
    const nameRef = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        console.log(nameRef.current?.value)
    }

    return (
        <>
            <input ref={nameRef} type="text" placeholder="Enter name" />
            <button onClick={handleClick}>Get Value</button>
        </>
    )
}
```

---

## useRef Initialization and Lifecycle

It is important to note that when using `useRef`, the initial value is typically set to `null`, as the reference will be assigned to the DOM element after it has been rendered. In this case, both `nameRef` and `ageRef` are initialized with `null`, which means they will be null until they are assigned to their respective input elements. However, both references will eventually point to their respective input elements once the component has been rendered.

#### Code Sample:

```typescript
import { useRef, useEffect } from 'react'

const FormComponent = () => {
    const nameRef = useRef<HTMLInputElement>(null)
    const ageRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        // After render, refs will have values
        console.log(nameRef.current) // HTMLInputElement
        console.log(ageRef.current)  // HTMLInputElement
    }, [])

    return (
        <>
            <input ref={nameRef} type="text" placeholder="Name" />
            <input ref={ageRef} type="number" placeholder="Age" />
        </>
    )
}
```

---

## Form Submission - preventDefault()

`event.preventDefault()` is used to prevent the default behavior of the form submission, which is to refresh the page. By calling this method, we can handle the form submission in our own way, such as sending the data to an API or updating the state of our application without causing a page reload.

#### Code Sample:

```typescript
import { type SubmitEvent } from 'react'

const handleSubmit = (event: SubmitEvent) => {
    // Prevents the form from refreshing the page
    event.preventDefault()

    // Now we can handle the submission custom way:
    // - Send data to API
    // - Update application state
    // - Log the data
    // - Validate the data before submission

    console.log('Form submitted without page reload!')
}

return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" />
        <button type="submit">Submit</button>
    </form>
)
```

---

## Using Controlled Components (Alternative to useRef)

Instead of using `useRef`, you can use React state with controlled components for form handling:

#### Code Sample:

```typescript
import { useState, type SubmitEvent } from 'react'

const App = () => {
    const [person, setPerson] = useState({ name: '', age: 0 })

    const handleSubmit = (event: SubmitEvent) => {
        event.preventDefault()
        console.log(person) // { name: 'John', age: 25 }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={person.name}
                onChange={(e) =>
                    setPerson({ ...person, name: e.target.value })
                }
                placeholder="Enter Name"
            />
            <input
                type="number"
                value={person.age}
                onChange={(e) =>
                    setPerson({ ...person, age: parseInt(e.target.value) })
                }
                placeholder="Enter Age"
            />
            <button type="submit">Save</button>
        </form>
    )
}
```

---

## Refs vs State Hooks for Form Data - When to Use Each

While both `useRef` and `useState` can be used to handle form data, they serve different purposes and have distinct advantages and disadvantages:

### Using Refs (useRef) for Forms

**Advantages:**

- **Performance**: Refs don't trigger re-renders when their values change. Updated values are read directly without causing the component to re-render, making it more efficient for simple forms with many fields.
- **Simplicity**: Less boilerplate code needed. No need to create change handlers for each input field.
- **Direct DOM Access**: You get the actual DOM element, which can be useful for uncontrolled components or when you need direct DOM manipulation.

**Disadvantages:**

- **No Real-time Validation**: You can't validate or respond to changes while the user is typing since refs don't trigger re-renders.
- **Lost React Benefits**: You miss out on React's declarative paradigm - the UI doesn't reflect the current form state.
- **Harder to Debug**: The component state isn't visible in React DevTools since the data lives in the DOM, not in React state.

### Using State Hooks (useState) for Forms

**Advantages:**

- **Real-time Updates**: The UI updates as the user types, allowing for real-time validation, error messages, and conditional rendering.
- **Better Debugging**: Form state is tracked in React state, making it visible in React DevTools and easier to debug.
- **React Philosophy**: Follows React's declarative paradigm - the UI is a function of the component's state.
- **Formik and React Hook Form Compatibility**: Libraries like Formik and React Hook Form use state under the hood for advanced form management.

**Disadvantages:**

- **More Code**: Requires creating state variables and change handlers for each input field, leading to more boilerplate.
- **Performance Impact**: Each keystroke triggers a re-render, which can be noticeable with complex components or many form fields.

### When to Use Each

**Use Refs (useRef) when:**

- Building simple forms where you only need to read the values on submission
- Performance is critical with many form fields
- You don't need real-time validation or feedback

**Use State (useState) when:**

- You need real-time validation, error messages, or conditional rendering
- The form is part of a larger, more complex component
- You want to leverage form management libraries or need better debugging capabilities
- You want to follow React best practices and the declarative paradigm

### Recommendation

Most modern React applications favor **controlled components with state** because they align with React's philosophy and provide better user experience through real-time feedback. However, for quick, simple forms or performance-critical scenarios, **uncontrolled components with refs** can still be appropriate.

### Code Comparison: Refs vs State Hooks

#### Example 1: Using Refs (Uncontrolled Component)

```typescript
import { useRef, type FormEvent } from 'react'

const FormWithRefs = () => {
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // Access values directly from DOM via refs
        const name = nameRef.current?.value
        const email = emailRef.current?.value

        console.log('Form submitted:', { name, email })

        // Optionally reset the form manually
        nameRef.current!.value = ''
        emailRef.current!.value = ''
    }

    return (
        <form onSubmit={handleSubmit}>
            <input ref={nameRef} type="text" placeholder="Name" />
            <input ref={emailRef} type="email" placeholder="Email" />
            <button type="submit">Submit</button>
        </form>
    )
}
```

#### Example 2: Using State Hooks (Controlled Component)

```typescript
import { useState, type FormEvent } from 'react'

const FormWithState = () => {
    const [formData, setFormData] = useState({ name: '', email: '' })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        console.log('Form submitted:', formData)

        // Reset the form by updating state
        setFormData({ name: '', email: '' })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    )
}
```

#### Key Differences in the Comparison

| Aspect                           | Refs Approach             | State Approach               |
| -------------------------------- | ------------------------- | ---------------------------- |
| Re-renders on input              | No                        | Yes                          |
| Real-time access to input values | Only on demand            | Always available in state    |
| Reset form                       | Manual DOM manipulation   | Update state                 |
| Validation feedback              | Not possible in real-time | Can show errors while typing |
| Boilerplate code                 | Less code                 | More code                    |
| React DevTools integration       | Not visible               | Visible in DevTools          |
---

## Zod - Schema Validation Library

### What is Zod?

Zod is a TypeScript-first schema validation library that allows you to define and validate data structures at runtime. It provides type-safe validation for form data, API responses, and other data sources. Zod is especially useful in React forms because it ensures that your data conforms to a predefined schema before processing it.

### Why Use Zod?

**Advantages:**

- **Type Safety**: Zod automatically infers TypeScript types from your schema, eliminating the need to define types separately.
- **Runtime Validation**: Validates data at runtime, catching errors that TypeScript's compile-time checking might miss.
- **Error Messages**: Provides detailed, customizable error messages for failed validations.
- **Easy Integration**: Works seamlessly with React Hook Form and other form libraries.
- **Composable Schemas**: Build complex validation schemas by combining simple validators.
- **Zero Dependencies**: Zod has no external dependencies, keeping your bundle size small.

### Basic Usage

To use Zod, you need to:

1. Install Zod: \
pm install zod\
2. Define a schema using Zod's schema builders
3. Validate data against the schema using the \.parse()\ or \.safeParse()\ methods

### Code Example: Form Validation with Zod

\\\	ypescript
import { z } from 'zod'
import { useState, type FormEvent } from 'react'

// Define the validation schema
const userFormSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    age: z.number().min(18, 'Must be at least 18 years old').max(120, 'Invalid age'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
})

// Infer TypeScript type from the schema
type UserFormData = z.infer<typeof userFormSchema>

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        password: '',
    })
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [success, setSuccess] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }))
        }
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSuccess(false)

        try {
            // Validate the form data against the schema
            const validatedData = userFormSchema.parse({
                name: formData.name,
                email: formData.email,
                age: parseInt(formData.age),
                password: formData.password,
            })

            console.log('Form data is valid:', validatedData)
            setErrors({})
            setSuccess(true)

            // Reset form
            setFormData({
                name: '',
                email: '',
                age: '',
                password: '',
            })
        } catch (error) {
            // Handle validation errors
            if (error instanceof z.ZodError) {
                const fieldErrors: Record<string, string> = {}
                error.errors.forEach((err) => {
                    const fieldName = err.path[0]
                    fieldErrors[fieldName as string] = err.message
                })
                setErrors(fieldErrors)
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {success && <p style={{ color: 'green' }}>Form submitted successfully!</p>}

            <div>
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>

            <div>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>

            <div>
                <input
                    name="age"
                    type="number"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                />
                {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
            </div>

            <div>
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}
\\\

### Key Zod Methods

- **\.parse(data)\**: Validates data and throws an error if validation fails. Use when you expect validation to succeed.
- **\.safeParse(data)\**: Validates data and returns a result object with \success\ and \data\ or \error\ properties. Use when you want to handle errors gracefully.
- **\z.infer<typeof schema>\**: Extracts the TypeScript type from a Zod schema, ensuring your code stays in sync with your validation rules.

### Why Zod is Useful in React Forms

1. **Single Source of Truth**: Your schema defines both validation rules and TypeScript types, eliminating duplication.
2. **Real-time Feedback**: Combine with form state to show validation errors as users type.
3. **Type Inference**: Automatically generates correct TypeScript types, reducing manual type definitions.
4. **Prevents Data Corruption**: Ensures only valid data reaches your application logic or API.
5. **Integrates with Form Libraries**: Works perfectly with React Hook Form, Formik, and other form management libraries.
