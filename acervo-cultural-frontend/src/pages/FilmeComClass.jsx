import { Component } from "react";
import EstruturaPagina from "../components/EstrututuraPagina";
import Secao from "../components/Secao";
import CadastroFilme from "../filme/CadastroFilme";
import ListaFilme from "../filme/ListaFilme";
import FilmeAPI from '../services/filme';

class FilmeComClass extends Component {
    constructor(props) {
        super(props);

        this.state = {}

        this.editarFilme = this.editarFilme.bind(this);
    }

    editarFilme(filme) {
        console.log(this)
        this.setState({filmeEmEdicao: filme})
    }

    excluirFilme = async filmeAExcluir => {
        await FilmeAPI.excluirFilme(filmeAExcluir.id);
        this.carregarFilmes();
        /* const filmesFiltrado = 
            this.state.filmes.filter(filme => filme.id !== filmeAExcluir.id);
        this.setState({filmes: filmesFiltrado}); */
    }

    componentDidMount() {
        /* this.setState({filmes: FILMES}); */
        this.carregarFilmes();
    }

    async carregarFilmes() {
        const filmes = await FilmeAPI.buscarFilmes();
        console.log("filmes:", filmes);
        this.setState({filmes: filmes});
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Passou pelo DidUpdate: ", prevState);
        console.log("Passou pelo DidUpdate: ", this.state);
        if (prevState.filmes !== this.state.filmes) {
            this.setState({filmeEmEdicao: this.state.filmes[0]});
            console.log("Mudou os filmes")
        }
        if (prevState.filmeEmEdicao !== this.state.filmeEmEdicao) {
            console.log("Mudou o filme em edição")
        }
    }

    componentWillUnmount() {
        console.log("Componente Encerrado")
    }

    render() {
        return (
            <EstruturaPagina titulo="Filmes">
                <Secao titulo="Cadastro de Filmes">
                    <CadastroFilme filme={this.state.filmeEmEdicao} />
                </Secao>
                <Secao titulo="Listagem de Filmes" >
                    <ListaFilme filmes={this.state.filmes} editarFilme={this.editarFilme} excluirFilme={this.excluirFilme} />
                </Secao>
            </EstruturaPagina>
        );
    }
}

export default FilmeComClass;