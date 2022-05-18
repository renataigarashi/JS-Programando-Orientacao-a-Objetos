export class Cliente {
  //ao colocar apenas o get, meu acessor vai poder apenas acessar o valor de CPF, mas não vai poder alterar o valor.
  get cpf(){
  }
  
  constructor(nome, cpf, senha){
    this.nome = nome;
    this._cpf = cpf;
    this._senha = senha
  }
  autenticar(senha){
    return senha == this._senha
  }
}
