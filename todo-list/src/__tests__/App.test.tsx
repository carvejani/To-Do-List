import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('deve renderizar o título corretamente', () => {
    expect(screen.getByText('To-Do List')).toBeInTheDocument();
  });

  test('deve renderizar o formulário de tarefas', () => {
    expect(screen.getByPlaceholderText(/Título/i)).toBeInTheDocument();
  });

  test('deve renderizar os filtros', () => {
    expect(screen.getByText('TODAS AS TAREFAS')).toBeInTheDocument();
    expect(screen.getByText('COMPLETAS')).toBeInTheDocument();
    expect(screen.getByText('INCOMPLETAS')).toBeInTheDocument();
  });

  test('deve renderizar a opção de ordenação', () => {
    expect(screen.getByText('Ordenar por data')).toBeInTheDocument();
    expect(screen.getByText('Ordenar por Prioridade')).toBeInTheDocument();
  });
});
