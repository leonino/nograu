import { Endereco } from './endereco.model';
import { DiaSemana } from './constantes';
import { Rito } from './rito.model';
import { Entidade } from './entidade.model';

export class Loja {
  id: string;
  numero: string;
  nome: string;
  filiacao: Entidade;
  dataFundacao: string;
  rito: Rito;
  endereco: Endereco;
  sessoes: DiaSessoes[];
}

export interface DiaSessoes {
  //Segunda a Domingo
  diaSemana: DiaSemana;
  //1ª, 2ª, 3ª, 4ª, 5ª, Todas
  semanas: string[];
}



