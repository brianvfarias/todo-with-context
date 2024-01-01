import { useContext } from 'react';
import { TaskContext, TaskType } from '../../App';
import { Checker } from '../Checker'
import './style.css'
interface TaskProps {
  taskProps: TaskType
}

import { PencilSimple, Trash } from "@phosphor-icons/react";

export function Task({ taskProps }: TaskProps) {
  const { deleteTask } = useContext(TaskContext)
  return (
    <div>
      <Checker taskID={taskProps.id} />
      {!taskProps.done ? <span>{taskProps.text}</span> : <del>{taskProps.text}</del>}
      <button><PencilSimple size={20} /></button>
      <button onClick={(e) => {
        e.preventDefault()
        deleteTask(taskProps.id)
      }}><Trash size={20} /></button>
    </div>
  )
}