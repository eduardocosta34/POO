import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// cliente 1 //
const cliente1 = new Cliente('Eduardo', 13245852544);
const contaCorrenteEduardo = new ContaCorrente(cliente1);

// cliente 2 //
const cliente2 = new Cliente('Alice', 85674215486);
const contaCorrenteAlice = new ContaCorrente(cliente2);

// contaCorrenteEduardo.depositar(600);

// operações de deposito e de saque: //
// console.log(`saldo na conta de ${cliente1.nome}: ${contaCorrenteEduardo.saldo}`);
// contaCorrenteEduardo.depositar(100);
// const valorSacado = contaCorrenteEduardo.sacar(30);
// console.log(`valor sacado: ${valorSacado}`);

contaCorrenteAlice.depositar(200)

let valorTransferido = 50;
contaCorrenteAlice.transferir(valorTransferido, contaCorrenteEduardo);

console.log(`saldo na conta de ${contaCorrenteEduardo.cliente.nome}: ${contaCorrenteEduardo.saldo}`);
console.log(`saldo na conta de ${contaCorrenteAlice.cliente.nome}: ${contaCorrenteAlice.saldo}`);

console.log('Quantidade de contas correntes cadastradads em nosso banco: ', ContaCorrente.numeroDeContas)

// console.log(contaCorrenteAlice);
// console.log(contaCorrenteEduardo);