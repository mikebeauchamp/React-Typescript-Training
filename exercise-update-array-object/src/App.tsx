import { useState } from 'react'

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: 'Buy Vegetables',
            description: 'Need to buy veggies at the store.'
        },
        {
            id: 2,
            name: 'Exercise',
            description: 'Need to exercise for 3 hours.'
        }
    ])

    const updateTask = () => {
        // setTasks(prevTasks => {
        //     const updatedTasks = [...prevTasks]
        //     updatedTasks[0].name = 'Buy Fruits'
        //     return updatedTasks
        // })

        //return { ...task, name: 'Buy Fruits' }

        //loop through the tasks and update the task with id 1
        setTasks(
            tasks.map(task =>
                task.id === 1
                    ? {
                          ...task,
                          name: 'Buy Fruits',
                          description: 'Need to buy fruits at the store.'
                      }
                    : task
            )
        )
    }

    return (
        <>
            <div>
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>{task.name}</li>
                    ))}
                </ul>
                <button onClick={updateTask}>Update</button>
            </div>
        </>
    )
}

export default App
