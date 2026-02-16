import { useState } from 'react'
import AddJournalForm from './components/AddJournalForm'
import JournalList from './components/JournalList'
import Tabs from './components/Tabs'

const App = () => {
    const [currentTab, setCurrentTab] = useState('add')

    const handleTab = (tab: string) => {
        setCurrentTab(tab)
    }

    return (
        <>
            <div className="mx-auto flex w-[640px] flex-col py-4">
                {/* Header */}
                <div className="flex flex-col gap-2 rounded-xl bg-white p-4">
                    <header>
                        <h1 className="mb-4 border-b border-gray-300 pb-3 text-2xl font-bold">
                            Journal App
                        </h1>
                        <p>
                            Embrace the journey of self-discovery through
                            journaling.
                        </p>
                    </header>

                    {/* Tabs */}
                    <Tabs onTabChange={handleTab} />

                    {/* Form */}
                    <div className="flex flex-col gap-3 rounded-xl bg-gray-200 p-4">
                        {currentTab === 'add' ? (
                            <AddJournalForm />
                        ) : (
                            <JournalList />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
