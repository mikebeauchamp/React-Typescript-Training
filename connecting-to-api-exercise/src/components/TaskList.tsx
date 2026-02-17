import { useEffect, useState } from 'react'

const TaskList = ({ task }: { task: string }) => {
    const [tasks, setTasks] = useState<string[]>([])

    useEffect(() => {
        console.log('Fetching tasks...', task)
        setTasks(['Vacuum Floor', 'Wash Dishes', 'Do Laundry'])
    }, [task])

    return <div>TaskList</div>
}

export default TaskList
