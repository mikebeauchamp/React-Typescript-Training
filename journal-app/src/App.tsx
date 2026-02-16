import Tabs from './components/Tabs'

const App = () => {
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
                    <Tabs />
                    {/* Form */}
                </div>
            </div>
        </>
    )
}

export default App
