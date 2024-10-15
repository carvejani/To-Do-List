import React from 'react';
import TaskList from '../componentes/ListaTarefas';
import { Task } from '../types';
import { render, screen, fireEvent } from '@testing-library/react';


describe('TaskList', () => {
  const mockDelete = jest.fn();
  const mockEdit = jest.fn();
  const mockToggleStatus = jest.fn();
  const tasks: Task[] = [
    {
      id: 1,
      titulo: 'Tarefa 1',
      descricao: 'Descrição da tarefa 1',
      status: false,
      vencimento: '2024-10-14',
      prioridade: 'Baixa',
    },
    {
      id: 2,
      titulo: 'Tarefa 2',
      descricao: 'Descrição da tarefa 2',
      status: true,
      vencimento: '2024-10-15',
      prioridade: 'Alta',
    },
  ];

  beforeEach(() => {
    render(
      <TaskList tasks={tasks} onDelete={mockDelete} onEdit={mockEdit} onToggleStatus={mockToggleStatus} />
    );
  });

  test('deve renderizar as tarefas corretamente', () => {
    expect(screen.getByText('Tarefa 1')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 2')).toBeInTheDocument();
  });

  test('deve chamar onDelete quando o botão Deletar for clicado', () => {
    const deleteButton = screen.getAllByText('Deletar')[0];
    fireEvent.click(deleteButton);
    expect(mockDelete).toHaveBeenCalledWith(1);
  });

  test('deve chamar onEdit quando o botão Editar for clicado', () => {
    const editButton = screen.getAllByText('Editar')[0];
    fireEvent.click(editButton);
    expect(mockEdit).toHaveBeenCalledWith(tasks[0]);
  });

  test('deve chamar onToggleStatus quando o botão de status for clicado', () => {
    const toggleButton = screen.getAllByText('Marcar como Completo')[0];
    fireEvent.click(toggleButton);
    expect(mockToggleStatus).toHaveBeenCalledWith(1);
  });
});
