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
