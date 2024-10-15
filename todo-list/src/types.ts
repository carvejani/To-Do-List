export interface Task {
    id: number;
    titulo: string;
    descricao: string;
    status: boolean;
    vencimento: string; 
    prioridade: 'Baixa' | 'Media' | 'Alta';
  }
