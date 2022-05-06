import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";


const client1 = new Cliente('Renata', 321654987);



const contaClient1 = new ContaCorrente(112, client1);
contaClient1.depositar(3000);
console.log("Saldo antes do saque".toUpperCase());
console.log(contaClient1);

contaClient1.sacar(100)
console.log("Saldo apos o saque".toUpperCase());
console.log(contaClient1);

// const contaPoupanca = new ContaPoupanca(200, client1, 112)
// contaPoupanca.depositar(10000);
// console.log(contaPoupanca)

// contaClient1.teste()


