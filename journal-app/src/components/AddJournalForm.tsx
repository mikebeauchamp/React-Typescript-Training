import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type FieldValues } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
    title: z
        .string()
        .min(5, 'Title is required and must have at least 5 characters.'),
    emotions: z.enum(
        ['Happy', 'Neutral', 'Sad'],
        'Please specify how you are feeling today.'
    ),
    content: z
        .string()
        .min(
            128,
            'Journal entry is required and must have at least 128 characters.'
        )
})

type FormData = z.infer<typeof schema>

const AddJournalForm = () => {
    //deconstructure the useForm hook to get the necessary functions and state for form handling
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormData>({ resolver: zodResolver(schema) })

    const onFormSubmit = (data: FieldValues) => {
        const uuid = crypto.randomUUID()
        data.id = uuid

        const now = new Date()
        data.createdAt = now.toLocaleDateString('en-US', {
            year: 'numeric', //2026
            month: 'long', // February
            day: 'numeric' // 14
        })
        //get existing entries from local storage, add the new entry, and save it back to local storage. This allows us to persist journal entries across page reloads.
        const existingEntries = JSON.parse(
            localStorage.getItem('journalEntries') || '[]'
        )

        const updatedEntries = [...existingEntries, data]
        localStorage.setItem('journalEntries', JSON.stringify(updatedEntries))

        //reset the form fields after submission to clear the form for the next entry. This provides a better user experience by allowing users to quickly add multiple entries without manually clearing the form.
        reset()
    }

    return (
        <>
            <form
                className="flex flex-col gap-3"
                onSubmit={handleSubmit(onFormSubmit)}
            >
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <label
                            htmlFor="title"
                            className="font-semibold whitespace-nowrap"
                        >
                            Journal Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            placeholder="Give your journal entry a title"
                            className="input input-bordered flex-1 rounded-lg border p-2"
                            {...register('title')}
                        />
                    </div>
                    {errors.title && (
                        <span className="mt-3 font-medium text-red-500">
                            {errors.title.message}
                        </span>
                    )}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="emotions" className="form-control w-full">
                        How are you feeling today?
                    </label>
                    <select
                        id="emotions"
                        defaultValue=""
                        className="select select-bordered w-full rounded-lg border p-2"
                        {...register('emotions')}
                    >
                        <option value="" disabled>
                            Pick an emotion
                        </option>
                        <option>Happy</option>
                        <option>Neutral</option>
                        <option>Sad</option>
                    </select>
                    {errors.emotions && (
                        <span className="mt-3 font-medium text-red-500">
                            {errors.emotions.message}
                        </span>
                    )}
                </div>

                <textarea
                    id="content"
                    className="textarea textarea-bordered w-full rounded-lg border p-2"
                    placeholder="Write your journal entry here..."
                    rows={10}
                    {...register('content')}
                ></textarea>
                {errors.content && (
                    <span className="mt-3 font-medium text-red-500">
                        {errors.content.message}
                    </span>
                )}

                <button className="btn btn-primary w-full">Save Entry</button>
            </form>
        </>
    )
}

export default AddJournalForm
