// A classe Conta é uma classe abstrata, pois não deve ser instanciada diretamente
export class Conta{
    constructor(saldoInicial, cliente, agencia){
      if(this.constructor == Conta){
        throw new Error('Você não deveria instanciar um objeto do tipo conta diretamente, pois essa é uma classe abstrata!')
      }
      this._saldo = saldoInicial;
      this._cliente = cliente;
      this._agencia = agencia;
    }
    // a atribuição de novoValor só será feita se ele for uma instância de cliente, algo que conseguimos verificar usando o operador instanceof.
    set cliente(novoValor){
      if(novoValor instanceof Cliente){
        this._cliente = novoValor;
      }
    }
  
    get cliente(){
      return this._cliente;
    }
    
  
    get saldo(){
      return this._saldo;
    }

    // metodo abstrato, cada conta vai ter seu proprio metodo sacar
    sacar(valor){
        throw new Error('O método sacar da conta é abstrato')
      }
      
    _sacar(valor, taxa){
      const valorSacado = taxa * valor;
      if(this._saldo >= valorSacado){
        this._saldo -= valorSacado
        return valorSacado;
      }
      // se der sucesso retorna o valorSacado, senao, retorna 0
      return 0;
    }
  
    depositar(valor){
      if(valor <= 0){
        return;
      } 
      this._saldo += valor;
    }
  
    tranferir(valor, conta){
      const valorSacado = this.sacar(valor);
      conta.depositar(valorSacado);
    }
  }