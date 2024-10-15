import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Filters from '../componentes/Filtros';

describe('Filters', () => {
  const mockFilterChange = jest.fn();

  beforeEach(() => {
    render(<Filters onFilterChange={mockFilterChange} />);
  });

  test('deve chamar onFilterChange com "Todos" quando o botão for clicado', () => {
    fireEvent.click(screen.getByText('TODAS AS TAREFAS'));
    expect(mockFilterChange).toHaveBeenCalledWith('Todos');
  });

  test('deve chamar onFilterChange com "Completo" quando o botão for clicado', () => {
    fireEvent.click(screen.getByText('COMPLETAS'));
    expect(mockFilterChange).toHaveBeenCalledWith('Completo');
  });

  test('deve chamar onFilterChange com "Incompleto" quando o botão for clicado', () => {
    fireEvent.click(screen.getByText('INCOMPLETAS'));
    expect(mockFilterChange).toHaveBeenCalledWith('Incompleto');
  });
});
