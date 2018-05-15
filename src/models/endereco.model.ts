/***********
 * URL: viacep.com.br/ws/01001000/json/
 *
 * {
 * "cep": "01001-000",
 * "logradouro": "Praça da Sé",
 * "complemento": "lado ímpar",
 * "bairro": "Sé",
 * "localidade": "São Paulo",
 * "uf": "SP",
 * "unidade": "",
 * "ibge": "3550308",
 * "gia": "1004"
 * }
 ***********/

export class Endereco {
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  unidade: string;
  ibge: string;
  gia: string

  constructor() {}
}
