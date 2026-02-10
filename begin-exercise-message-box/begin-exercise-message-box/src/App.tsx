import { useState } from 'react'
import AlertComponent from './components/AlertComponent'

const App = () => {
    const title = 'Attention Please!'
    const message = 'React and TypeScript are fun!'

    const [showAlert, setShowAlert] = useState(false)

    const handleShowAlert = () => {
        setShowAlert(true)
    }

    return (
        <>
            <div className="flex flex-col gap-4 justify-center items-center h-screen bg-gray-200">
                {showAlert && (
                    <AlertComponent title={title}>
                        <p>{message}</p>
                    </AlertComponent>
                )}
                <button
                    className="bg-gray-700 text-white uppercase text-sm font-medium rounded-xl px-6 py-2 shadow-xl hover:bg-gray-900"
                    onClick={handleShowAlert}
                >
                    Show Alert
                </button>
            </div>
        </>
    )
}

export default App
