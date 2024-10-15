import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sorting from '../componentes/Ordenar';

describe('Sorting', () => {
  const mockSortChange = jest.fn();

  beforeEach(() => {
    render(<Sorting onSortChange={mockSortChange} />);
  });

  test('deve chamar onSortChange com "data" quando o botão for clicado', () => {
    fireEvent.click(screen.getByText('Ordenar por data'));
    expect(mockSortChange).toHaveBeenCalledWith('data');
  });

  test('deve chamar onSortChange com "prioridade" quando o botão for clicado', () => {
    fireEvent.click(screen.getByText('Ordenar por Prioridade'));
    expect(mockSortChange).toHaveBeenCalledWith('prioridade');
  });
});
