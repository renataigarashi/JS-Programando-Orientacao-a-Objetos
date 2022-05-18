/*
Ser autenticável significa ter metodo "autenticar"

ducky type
*/

export class SistemaAutenticacao {
  //Um método estático é um método que pode ser chamado diretamente da classe, sem necessidade de instanciar nenhum objeto.
  static login(autenticavel, senha) {
    if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }
  static ehAutenticavel(autenticavel) {
    // in vai verificar se a chave 'autenticar' existe dentro do objeto autenticavel
    return 'autenticar' in autenticavel && autenticavel.autenticar instanceof Function
  }
}