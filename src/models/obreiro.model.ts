import { Empregador } from './obreiro.model';
import { Endereco } from './endereco.model';
import { Dependente } from './dependente.model';
import { GrauInstrucao, sexoMasculino } from './constantes';
import { Telefone } from './telefone.model';
import { LojaObreiro } from './lojaObreiro.model';

export interface Naturalidade {
  localidade: string;
  uf: string;
  nacionalidade: string;
}

export interface Rg {
  numero: string;
  orgao: string;
  dataExpedicao: string;
}

export interface TituloEleitor {
  numero: string;
  zona: string;
  secao: string;
}

export interface Empregador {
  nome: string;
  endereco: Endereco;
  telefone: Telefone;
}

export class Obreiro {
  /**
   * Chave primaria da tabela
   */
  id: string;
  /**
   * Nome completo do obreiro
   */
  nome: string;
  /**
   * Data de Nascimento do Obreiro
   * Formato: "YYYY-MM-DD"
   * String
   */
  dataNascimento: string;
  /**
   * Sexo do obreiro
   * M - Masculino / F - Feminino
   */
  sexo: string;
  /**
   * Informar o local de origem do obreiro:
   * localidade, Estado e Nacionalidade(Pais)
   */
  naturalidade: Naturalidade;
  /**
   * O Endereço esta no formato para buscar
   * por endereçador por CEP via Correios
   */
  endereco: Endereco;
  email: string;
  /**
   * Lista de telefones do obreiro
   * Definir um como o principal
   */
  telefones: Telefone[];
  dependentes: Dependente[];
  cpf: string;
  rg : Rg;
  titulo: TituloEleitor;
  tipoSanguineo: string;
  estadoCivil: string;
  dataCasamento: string;
  grauInstrucao: GrauInstrucao;
  formacaoProfissional: string;
  empregador: Empregador;

  // dados maçonicos
  grau: string;
  cim: number;
  lojas: LojaObreiro[];

  constructor(nome?: string, dataNascimento?: string, grau?: string, cim?: number, sexo?: string, id?: string) {
    this.id = (id) ? id : null;
    this.nome = (nome) ? nome : '';
    this.dataNascimento = (dataNascimento) ? dataNascimento : '';
    this.grau = (grau) ? grau : '';
    this.cim = (cim) ? cim : null;
    this.sexo = (sexo) ? sexo : sexoMasculino;
    this.naturalidade = {localidade: '', uf: '', nacionalidade: ''};
    this.rg = {numero: '', orgao: '', dataExpedicao: ''};
    this.titulo = {numero: '', zona: '', secao: ''};
    this.lojas = [new LojaObreiro()];
    this.empregador = {nome : '', endereco: new Endereco(), telefone: new Telefone() };

    this.endereco = new Endereco();
    this.telefones = [];
    this.lojas = [];
    this.dependentes = [];
  }
}
