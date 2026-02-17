import { useEffect, useState } from 'react'

const TaskList = ({ task }: { task: string }) => {
    const [tasks, setTasks] = useState<string[]>([])

    useEffect(() => {
        console.log('Fetching tasks...', task)
        setTasks(['Vacuum Floor', 'Wash Dishes', 'Do Laundry'])
    }, [task])

    return (
        <div>
            <h2>TaskList</h2>
            <ul>
                {tasks.map(t => (
                    <li key={t}>{t}</li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList
