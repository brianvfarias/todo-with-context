import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import { Task } from './Components/Task'
export interface TaskType {
  id: string
  text: string
  done?: boolean
}

interface TaskContextInterface {
  deleteTask: (taskID: string) => void
  checkAsDone: (taskID: string) => void
}


export const TaskContext = createContext({} as TaskContextInterface);

export function App() {
  const [taskInput, setTaskInput] = useState('')
  const [tasks, setTasks] = useState<TaskType[]>([])

  function addTask() {
    if (taskInput) {
      const newTask = { id: uuidv4(), text: taskInput.toString(), done: false }
      setTasks(state => [...state, newTask])
      setTaskInput('')
    }
  }

  function deleteTask(taskID: string) {
    const updateTasks = tasks.filter((task) => taskID !== task.id)
    setTasks(updateTasks)
  }

  function checkAsDone(taskID: string) {
    const updateTasks = tasks.map(task => {
      if (task.id === taskID) {
        task.done = task.done ? false : true
        return task
      }
      return task
    })
    setTasks(updateTasks)
  }
  return (
    <>
      <TaskContext.Provider value={{ deleteTask, checkAsDone }}>
        <div style={
          { display: "flex", alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
          <input
            placeholder='Insert Task'
            value={taskInput}
            onChange={(event) => { setTaskInput(event.target.value) }}
            onKeyDown={(e) => {// I wonder if using this is bad code
              console.log('key pressed: ' + e.key)
              if (e.key === 'Enter') return addTask()
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault()
              addTask()
            }}
          >+ Add Task</button>

          {tasks ? tasks.map((task) => {
            return <Task taskProps={task} key={task.id} />
          }) : ''}

        </div>
      </TaskContext.Provider>
    </>

  )
}


