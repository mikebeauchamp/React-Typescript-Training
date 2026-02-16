import { useForm, type FieldValues } from 'react-hook-form'
//zod is a schema validation library that allows us to define a schema for our form data and validate it against that schema
import { z } from 'zod'
// zodResolver is a function that takes a zod schema and returns a resolver function that can be used with react-hook-form to validate the form data against the zod schema
import { zodResolver } from '@hookform/resolvers/zod'

// schema validation is a way to validate the form data against a predefined schema. it allows us to define the structure of the form data and the validation rules for each field in the schema. this way, we can ensure that the form data is valid before it is submitted to the server. in this example, we are using zod to define a schema for our form data and validate it against that schema using react-hook-form and zodResolver.
const schema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters long.'),
    age: z
        .number({ message: 'The age field is required.' })
        .min(18, 'The minimum age is 18.')
})

type FormData = z.infer<typeof schema>

const App = () => {
    // register is used to register the input fields to the form
    // register returns an object with the input field's name as the key and the input field's value as the value
    // resolver is used to validate the form data against the zod schema
    // useForm hook uses a resolver to validate the form data against the zod schema and returns an object with the form state, including any errors that may have occurred during validation
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({ resolver: zodResolver(schema) })

    const onFormSubmit = (data: FieldValues) => {
        console.log(data)
    }

    console.log(errors)

    return (
        <>
            <div className="flex flex-col h-screen items-center justify-center">
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Name</label>
                        <input
                            // resgister is used to register the input field to the form and it takes the name of the input field as an argument. it returns an object with the input field's name as the key and the input field's value as the value. we can spread this object to the input field to register it to the form
                            {...register('name')}
                            type="text"
                            id="name"
                            placeholder="Enter Name"
                            className="border border-gray-200 px-4 py-2 rounded-xl"
                        />
                        {errors.name && (
                            <p className="text-red-500">
                                {/* if there is an error for 
                                the name field, we can access the error message using errors.name.message and display it to the user */}
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="age">Age</label>
                        <input
                            {...register('age', { valueAsNumber: true })}
                            type="number"
                            id="age"
                            placeholder="Enter Age"
                            className="border border-gray-200 px-4 py-2 rounded-xl"
                        />

                        {errors.age && (
                            <p className="text-red-500">{errors.age.message}</p>
                        )}
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
