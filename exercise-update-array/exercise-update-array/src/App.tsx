import { useState } from 'react'

const App = () => {
    const [fruits, setFruits] = useState([
        'Apple',
        'Grapes',
        'Peach',
        'Watermelon'
    ])

    const handleUpdate = () => {
        //Add an item to the array
        //setFruits([...fruits, 'Strawberry'])

        //Remove items from the array
        //setFruits(fruits.filter(fruit => fruit !== 'Grapes'))

        //Update an item in the array
        setFruits(fruits.map(fruit => (fruit === 'Peach' ? 'Mango' : fruit)))
    }

    return (
        <>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            <button onClick={handleUpdate}>Update</button>
        </>
    )
}

export default App
