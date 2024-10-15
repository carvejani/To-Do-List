import React from 'react';

interface SortingProps {
  onSortChange: (sortBy: string) => void;
}

const Sorting: React.FC<SortingProps> = ({ onSortChange }) => {
  return (
    <div>
      <button onClick={() => onSortChange('data')}>Ordenar por data</button>
      <button onClick={() => onSortChange('prioridade')}>Ordenar por Prioridade</button>
    </div>
  );
};

export default Sorting;
