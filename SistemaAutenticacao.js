/*
Ser autenticável significa ter metodo "autenticar"
*/

export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }
  static ehAutenticavel(autenticavel) {
    // in vai verificar se a chave 'autenticar' existe dentro do objeto autenticavel
    return 'autenticar' in autenticavel
  }
}