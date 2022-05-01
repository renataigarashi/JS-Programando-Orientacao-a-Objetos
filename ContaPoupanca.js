import { ContaCorrente } from "./ContaCorrente";

export class ContaPoupanca extends ContaCorrente{
  constructor(saldoInicial, cliente, agencia){
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }
  sacar()
  depositar()
  tranferir()
}