import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";


const client1 = new Cliente('Renata', 321654987);



const contaClient1 = new ContaCorrente(112, client1);
contaClient1.depositar(2590);
console.log(contaClient1);

const contaPoupanca = new ContaPoupanca(200, client1, 112)
console.log(contaPoupanca)
console.log(ContaCorrente.numeroDeContas)

