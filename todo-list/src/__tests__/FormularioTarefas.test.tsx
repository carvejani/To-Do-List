import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../componentes/FormularioTarefas';
import { Task } from '../types';

describe('TaskForm', () => {
  const mockSubmit = jest.fn();

  beforeEach(() => {
    render(<TaskForm onSubmit={mockSubmit} />);
  });

  test('deve renderizar os campos do formulário corretamente', () => {
    expect(screen.getByPlaceholderText(/Título/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Descrição/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/data/i)).toBeInTheDocument();
    expect(screen.getByText(/salvar tarefa/i)).toBeInTheDocument();
  });

  test('deve chamar onSubmit com os dados corretos ao submeter o formulário', () => {
    fireEvent.change(screen.getByPlaceholderText(/Título/i), { target: { value: 'Nova Tarefa' } });
    fireEvent.change(screen.getByPlaceholderText(/Descrição/i), { target: { value: 'Descrição da nova tarefa' } });
    fireEvent.change(screen.getByLabelText(/data/i), { target: { value: '2024-10-14' } });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Alta' } });

    fireEvent.click(screen.getByText(/salvar tarefa/i));

    expect(mockSubmit).toHaveBeenCalledWith({
      id: expect.any(Number),
      titulo: 'Nova Tarefa',
      descricao: 'Descrição da nova tarefa',
      status: false,
      vencimento: '2024-10-14',
      prioridade: 'Alta',
    });
  });
});
