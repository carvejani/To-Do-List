// App.tsx
import React, { useState, useEffect } from 'react';
import TaskList from './componentes/ListaTarefas';
import TaskForm from './componentes/FormularioTarefas';
import Filters from './componentes/Filtros';
import Sorting from './componentes/Ordenar';
import { Task } from './types';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);
  const [filter, setFilter] = useState<string>('Todos');
  const [sortBy, setSortBy] = useState<string>('data');
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    const priorityOrder = {
      'Alta': 3,
      'Media': 2,
      'Baixa': 1
    };

      const sortedTasks = [...tasks].sort((a, b) => {
      if (sortBy === 'data') {
        return new Date(a.vencimento).getTime() - new Date(b.vencimento).getTime();
      } else if (sortBy === 'prioridade') {
        return priorityOrder[b.prioridade] - priorityOrder[a.prioridade];
      }
      return 0;
    });

    const filtered = sortedTasks.filter((task) => {
      if (filter === 'Completo') {
        return task.status === true;
      } else if (filter === 'Incompleto') {
        return task.status === false;
      }
      return true; 
    });


    setFilteredTasks(filtered);
  }, [tasks, filter, sortBy]);

  const handleAddTask = (newTask: Task) => {
    if (taskToEdit) {
      const updatedTasks = tasks.map((task) => (task.id === taskToEdit.id ? newTask : task));
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setTaskToEdit(null); 
    } else {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  };

  const handleDeleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleEditTask = (task: Task) => {
    setTaskToEdit(task); 
  };

  const handleToggleStatus = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: !task.status } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm onSubmit={handleAddTask} taskToEdit={taskToEdit} />
      <Filters onFilterChange={setFilter} />
      <Sorting onSortChange={setSortBy} />
      <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} onEdit={handleEditTask} onToggleStatus={handleToggleStatus} />
    </div>
  );
};

export default App;
