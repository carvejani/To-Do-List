import React from 'react';

interface FiltersProps {
  onFilterChange: (status: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  return (
    <div>
      <button onClick={() => onFilterChange('Todos')}>TODAS AS TAREFAS</button>
      <button onClick={() => onFilterChange('Completo')}>COMPLETAS</button>
      <button onClick={() => onFilterChange('Incompleto')}>INCOMPLETAS</button>
    </div>
  );
};

export default Filters;
