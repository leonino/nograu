import { Endereco } from './endereco.model';

export class Entidade {
  id: string;
  nome: string;
  sigla: string;
  dataFundacao: string;
  endereco: Endereco;
  filiado: Entidade;
  reconhecimentos: Entidade[];

  constructor() {}
}
