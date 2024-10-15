import React from 'react';
import { Task } from '../types';
import TaskComponent from './Tarefas';

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
  onToggleStatus: (id: number) => void; 
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onEdit, onToggleStatus }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskComponent
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </div>
  );
};

export default TaskList;
