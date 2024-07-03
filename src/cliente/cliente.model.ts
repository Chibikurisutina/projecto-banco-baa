import { Gerente } from "../gerente/gerente.model"

export class Cliente {
    nomeCompleto: string
    cpf: string
    endereco: string
    telefone: string
    contas: ContaBancaria[]
    gerente: Gerente

    constructor(nomeCompleto: string, cpf: string, endereco: string, telefone: string, contas: ContaBancaria[], gerente: Gerente){
        this.nomeCompleto = nomeCompleto;
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
        this.contas = contas;
        this.gerente = gerente;
    }
}