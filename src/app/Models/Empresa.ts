export class Empresa{
  constructor(
    public id: number,
    public nome_fantasia: string,
    public logo_marca: string,
    public telefone: string,
    public email: string,
    public ativo: boolean,
    public usuario_id: number,
    public anuncios: [],
    public ramo_atividade_Id: number,
    public horario_funcionamento_inicio: Date,
    public horario_funcionamento_fim: Date,
    public status: string,
    public rua: string,
    public numero: string,
    public bairro: string,
    public cidade: string,
    public uf: string,
    public cep: string,
    public quantidade_anuncios: number,
    public ponto_referencia: string
  ){}
}
