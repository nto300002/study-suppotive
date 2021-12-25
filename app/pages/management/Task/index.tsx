import TaskInput from "app/core/components/management/TaskInput"
import TaskList from "app/core/components/management/TaskList"
import { Task } from "app/core/components/management/Type/Types"
import { useState } from "react"

const initialState: Task[] = [
  {
    id: 2,
    title: "次にやるやつ",
    done: false,
  },
  {
    id: 1,
    title: "はじめにやるやつ",
    done: true,
  },
]

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState(initialState)

  return (
    <div>
      <TaskInput setTasks={setTasks} tasks={tasks} />
      <TaskList setTasks={setTasks} tasks={tasks} />
    </div>
  )
}

export default Tasks
