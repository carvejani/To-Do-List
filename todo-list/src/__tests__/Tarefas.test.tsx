import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Task from '../componentes/Tarefas';
import { Task as TaskType } from '../types';

describe('Task', () => {
  const task: TaskType = {
    id: 1,
    titulo: 'Tarefa Teste',
    descricao: 'Descrição da tarefa teste',
    status: false,
    vencimento: '2024-10-14',
    prioridade: 'Baixa',
  };
  
  const mockDelete = jest.fn();
  const mockEdit = jest.fn();
  const mockToggleStatus = jest.fn();

  beforeEach(() => {
    render(
      <Task task={task} onDelete={mockDelete} onEdit={mockEdit} onToggleStatus={mockToggleStatus} />
    );
  });

  test('deve renderizar a tarefa corretamente', () => {
    expect(screen.getByText('Tarefa Teste')).toBeInTheDocument();
    expect(screen.getByText('Descrição da tarefa teste')).toBeInTheDocument();
    expect(screen.getByText('Incompleto')).toBeInTheDocument();
  });

  test('deve chamar onDelete quando o botão Deletar for clicado', () => {
    fireEvent.click(screen.getByText('Deletar'));
    expect(mockDelete).toHaveBeenCalledWith(task.id);
  });

  test('deve chamar onEdit quando o botão Editar for clicado', () => {
    fireEvent.click(screen.getByText('Editar'));
    expect(mockEdit).toHaveBeenCalledWith(task);
  });

  test('deve chamar onToggleStatus quando o botão de status for clicado', () => {
    fireEvent.click(screen.getByText('Marcar como Completo'));
    expect(mockToggleStatus).toHaveBeenCalledWith(task.id);
  });
});
