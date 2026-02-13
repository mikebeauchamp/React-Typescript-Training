import { useState, type SubmitEvent } from 'react'

const App = () => {
    const [person, setPerson] = useState({ name: '', age: 0 })

    //nameRef is a reference to the input element in the form. It is created using the useRef hook from React, which allows us to access the DOM element directly. The type of the reference is specified as HTMLInputElement, which means that nameRef.current will be of type HTMLInputElement or null. This allows us to access properties and methods of the input element, such as value, without causing TypeScript errors.

    //It is important to note that when using useRef, the initial value is typically set to null, as the reference will be assigned to the DOM element after it has been rendered. In this case, both nameRef and ageRef are initialized with null, which means they will be null until they are assigned to their respective input elements. However, both references will eventually point to their respective input elements once the component has been rendered.
    // const nameRef = useRef<HTMLInputElement>(null)
    // const ageRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (event: SubmitEvent) => {
        //event.preventDefault() is used to prevent the default behavior of the form submission, which is to refresh the page. By calling this method, we can handle the form submission in our own way, such as sending the data to an API or updating the state of our application without causing a page reload.
        event.preventDefault()
        // console.log(nameRef.current?.value)
        // console.log(ageRef.current?.value)

        // const person = {
        //     name: nameRef.current?.value,
        //     age: ageRef.current?.value
        // }

        console.log(person)
    }

    return (
        <>
            <div className="flex flex-col h-screen items-center justify-center">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Name</label>
                        <input
                            //ref={nameRef}
                            onChange={event =>
                                setPerson({
                                    ...person,
                                    name: event.target.value
                                })
                            }
                            value={person.name}
                            type="text"
                            id="name"
                            placeholder="Enter Name"
                            className="border border-gray-200 px-4 py-2 rounded-xl"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="age">Age</label>
                        <input
                            //ref={ageRef}
                            onChange={event =>
                                setPerson({
                                    ...person,
                                    age: parseInt(event.target.value)
                                })
                            }
                            value={person.age}
                            type="number"
                            id="age"
                            placeholder="Enter Age"
                            className="border border-gray-200 px-4 py-2 rounded-xl"
                        />
                    </div>

                    <button className="p-4 px-6 mt-4 bg-gray-800 text-white rounded-xl">
                        Save
                    </button>
                </form>
            </div>
        </>
    )
}

export default App
