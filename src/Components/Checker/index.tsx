// import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from '@phosphor-icons/react';
import { useContext } from 'react';
import { TaskContext } from '../../App';

interface CheckerProps {
  taskID: string
}

export function Checker({ taskID }: CheckerProps) {
  const { checkAsDone } = useContext(TaskContext)
  return (<span onClick={() => {
    checkAsDone(taskID)
  }}>
    <Checkbox.Root className="CheckboxRoot" defaultChecked={false} id="c1">
      <Checkbox.Indicator className="CheckboxIndicator">
        <Check size={20} />
      </Checkbox.Indicator>
    </Checkbox.Root>
  </span>)
}
