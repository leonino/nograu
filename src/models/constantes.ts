export const sexoMasculino = "M";
export const sexoFeminino = "F";

export enum Parentesco {
  PAI,
  MAE,
  FILHO,
  IRMAO,
  CONJUGUE,
  AVO,
  SOBRINHO,
  PRIMO,
  CUNHADO,
  AFILHADO,
  NETO,
  BISAVO,
  BISNETO,
  OUTROS
};

export const PARENTESCO = [
 'Pai', 'Mãe', 'Filho(a)', 'Irmão(ã)', 'Conjugue',
 'Avô(ó)', 'Sobrinho(a)', 'Primo(a)', 'Cunhado(a)', 'Afilhado(a)', 'Neto(a)',
 'Bisavô(ó)', 'Bisneto(a)','Outros'
];

export enum Estados {
  PA, MA, RJ, AM, SP, AP, TO, AC, RO, RR,
  CE, PE, PB, AL, BA, DF, ES, GO, MT, MS,
  MG, PR, PI, RN, RS, SC, SE
};

export const ESTADOS = [
  'Pará','Maranhão','Rio de Janeiro','Amazonas','São Paulo','Amapá', 'Tocantins',
  'Acre', 'Rondonia', 'Roraima', 'Ceará', 'Pernambuco', 'Paraíba', 'Alagoas', 'Bahia',
  'Distrito Federal', 'Espírito Santo', 'Goiás' , 'Mato Grosso', 'Mato Grosso do Sul',
  'Minas Gerais', 'Paraná', 'Piauí', 'Rio Grande do Norte', 'Rio Grande do Sul',
  'Santa Catarina', 'Sergipe'
];

export enum GrauInstrucao {
  ANALFABETO,
  BASICO_INCOMPLETO,
  BASICO_COMPLETO,
  MEDIO_INCOMPLETO,
  MEDIO_COMPLETO,
  SUPERIOR_INCOMPLETO,
  SUPERIOR_COMPLETO,
  MESTRADO_INCOMPLETO,
  MESTRADO_COMPLETO,
  DOUTORADO_INCOMPLETO,
  DOUTORADO_COMPLETO
};

export const GRAU_INSTRUCAO = [
'Analfabeto',
'Ensino Básico Incompleto',
'Ensino Básico Completo',
'Ensino Medio Incompleto',
'Ensino Medio Completo',
'Ensino Superior Incompleto',
'Ensino Superior Completo',
'Mestrado Incompleto',
'Mestrado Completo',
'Doutorado Incompleto',
'Doutorado Completo',
];

export enum DiaSemana {
  DOM, SEG, TER, QUA, QUI, SEX, SAB,
};

export const DIASEMANA = [
'Domigo', 'Segunda', 'Terça', 'Quarta', 'Sexta', 'Sábado'
];
