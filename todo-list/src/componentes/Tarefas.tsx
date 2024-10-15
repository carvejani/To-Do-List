import React from 'react';
import { Task as TaskType } from '../types';

interface TaskProps {
  task: TaskType;
  onDelete: (id: number) => void;
  onEdit: (task: TaskType) => void;
  onToggleStatus: (id: number) => void; 
}

const Task: React.FC<TaskProps> = ({ task, onDelete, onEdit, onToggleStatus }) => {
  return (
    <div>
      <h3>{task.titulo}</h3>
      <p>{task.descricao}</p>
      <p>Status: {task.status ? 'Completo' : 'Incompleto'}</p>
      <p>Data de Vencimento: {new Date(task.vencimento).toLocaleDateString()}</p>
      <p>Prioridade: {task.prioridade}</p>
      <button onClick={() => onDelete(task.id)}>Deletar</button>
      <button onClick={() => onEdit(task)}>Editar</button>
      <button onClick={() => onToggleStatus(task.id)}>
        {task.status ? 'Marcar como Incompleto' : 'Marcar como Completo'}
      </button> {}
    </div>
  );
};

export default Task;
