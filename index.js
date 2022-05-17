import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js"

const diretor = new Diretor("Renata", 10000, 12345678900)
const gerente = new Gerente("Filomena", 6500, 11223456780)


diretor.cadastrarSenha(123456789)
gerente.cadastrarSenha(987654)

// const estaLogado = SistemaAutenticacao.login(diretor, 123456789)
const diretorEstaLogado = SistemaAutenticacao.login(diretor, 123456789)
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, 98765)

const novaCliente = new Cliente('Filipa', 99987655543, 45);

console.log('Dir está logado? ', diretorEstaLogado)
console.log('Gerente está logado? ', gerenteEstaLogado)

const clienteFilipa = SistemaAutenticacao.login(novaCliente, 456)
console.log('Filipa está logado? ', clienteFilipa)

