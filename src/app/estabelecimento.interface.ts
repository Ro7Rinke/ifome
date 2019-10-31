import Endereco from './endereco.interface'
import Menu from './menu.interface'
interface estabelecimento {
    categoria: string,
    endereco: Endereco,
    nome: string,
    telefone: string,
    menu: Array<Menu>
}

export default estabelecimento