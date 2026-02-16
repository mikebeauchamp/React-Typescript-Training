import { useEffect, useState } from 'react'
import { set } from 'zod'

const JournalList = () => {
    //useeffect is a React hook that allows you to perform side effects in function components. In this case, we are using it to retrieve journal entries from local storage when the component mounts. The empty dependency array [] ensures that this effect runs only once when the component is first rendered. the useEffect hook runs after the component has rendered, so it will log the entries to the console after they have been retrieved from local storage. This is useful for debugging and verifying that the entries are being stored and retrieved correctly.

    //we pass an empty array as the second argument to useEffect, which means that this effect will only run once when the component mounts. This is important because we only want to retrieve the journal entries from local storage when the component is first rendered, and not on every re-render. If we didn't pass an empty array, the effect would run on every render, which could lead to unnecessary performance issues and potential bugs. By using an empty dependency array, we ensure that the effect runs only once and retrieves the journal entries efficiently. otherwise, if we had dependencies in the array, the effect would run whenever those dependencies change, which is not what we want in this case since we only need to retrieve the entries once when the component mounts.
    useEffect(() => {
        const entries = JSON.parse(
            localStorage.getItem('journalEntries') || '[]'
        )

        setJournalEntries(entries)
    }, [])

    const initJournalState = {
        id: '',
        title: '',
        emotions: '',
        content: '',
        createdAt: ''
    }

    const [journalEntries, setJournalEntries] = useState([initJournalState])

    const [journal, setJournal] = useState(initJournalState)

    const onViewJournal = (journal: {
        id: string
        title: string
        emotions: string
        content: string
        createdAt: string
    }) => {
        setJournal(journal)
    }

    return (
        <>
            {journalEntries.length >= 1 && journal.id === '' && (
                <div className="grid grid-cols-2 gap-4">
                    {journalEntries.map(entry => (
                        <div
                            className="rounded-lg bg-white p-4 transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:shadow-xl"
                            key={entry.id}
                            onClick={() => onViewJournal(entry)}
                        >
                            <h3 className="mb-2 font-['Playfair_Display'] text-xl font-bold">
                                {entry.title}
                            </h3>
                            <h4>Created at: {entry.createdAt}</h4>
                        </div>
                    ))}
                </div>
            )}
            {journal.id !== '' && (
                <div className="relative flex max-h-[640px] flex-col overflow-y-scroll rounded-xl bg-white p-8">
                    <h2 className="mb-2 font-['Playfair_Display'] text-4xl font-bold">
                        {journal.title}
                    </h2>
                    <h3 className="mb-4 text-gray-400">
                        Created at: {journal.createdAt}
                    </h3>
                    <p className="text-lg break-words">{journal.content}</p>
                </div>
            )}
        </>
    )
}

export default JournalList
