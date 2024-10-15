import React, { useState, useEffect } from 'react';
import { Task } from '../types';

interface TaskFormProps {
  onSubmit: (task: Task) => void;
  taskToEdit?: Task | null; 
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, taskToEdit }) => {
  const [title, setTitle] = useState(taskToEdit?.titulo || '');
  const [description, setDescription] = useState(taskToEdit?.descricao || '');
  const [dueDate, setDueDate] = useState(taskToEdit?.vencimento || '');
  const [priority, setPriority] = useState<Task['prioridade']>(taskToEdit?.prioridade || 'Baixa');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.titulo);
      setDescription(taskToEdit.descricao);
      setDueDate(taskToEdit.vencimento);
      setPriority(taskToEdit.prioridade);
    }
  }, [taskToEdit]);

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('Baixa');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      titulo: title,
      descricao: description,
      status: taskToEdit ? taskToEdit.status : false,
      vencimento: dueDate,
      prioridade: priority,
    };
    onSubmit(newTask);
    resetForm(); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
      <select value={priority} onChange={(e) => setPriority(e.target.value as Task['prioridade'])}>
        <option value="Baixa">Baixa</option>
        <option value="Media">Média</option>
        <option value="Alta">Alta</option>
      </select>
      <button type="submit">{taskToEdit ? 'Salvar Edição' : 'Salvar Tarefa'}</button>
    </form>
  );
};

export default TaskForm;
