import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0
    agencia = 1001;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    _saldo = 0;
    get saldo(){
        return this._saldo;
    }

    constructor(cliente){
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1
    }

    depositar(valor){
        if(valor >= 0){
            this._saldo += valor;
            console.log(`${this.cliente.nome}: Deposito de ${valor} realizado com sucesso --- valor da conta atualizado: ${this._saldo}`)
            return valor;
        }else{
            console.error('valor invalido')
        }
    }

    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
            console.log(`${this.cliente.nome}: valor sacado com sucesso: ${valor} -- saldo atual ${this._saldo}`)
            return valor;
        }else{
            console.log('saldo insuficiente')
        }
    }

    transferir(valor, conta){
        if(valor <= this._saldo){
            const valorSacado = this.sacar(valor);
            conta.depositar(valorSacado)
            console.log(`Transferência de ${valor} realizado com sucesso para ${conta.cliente.nome}!!`)
        }else{
            console.log('Saldo insuficiente para transferência');
            
        }

    }
}