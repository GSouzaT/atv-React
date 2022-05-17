import { useState, useEffect } from "react";
import EstruturaPagina from "../components/EstrututuraPagina";
import Secao from "../components/Secao";
import CadastroFilme from "../filme/CadastroFilme";
import ListaFilme from "../filme/ListaFilme";
import FilmeAPI from '../services/filme';
import { FILMES } from '../util/constantes';

const Filme = (props) => {

    const [filmes, setFilmes] = useState(FILMES);
    const [filmeEmEdicao, setFilmeEmEdicao] = useState();

    const editarFilme = (filme) => {
        setFilmeEmEdicao(filme);
    }

    const excluirFilme = async filmeAExcluir => {
        await FilmeAPI.excluirFilme(filmeAExcluir.id);
        carregarFilmes();
    }

    const carregarFilmes = async () => {
        const filmes = await FilmeAPI.buscarFilmes();
        console.log("filmes:", filmes);
        setFilmes(filmes);
    }

    useEffect(() => {
        carregarFilmes();
    }, []);

    useEffect(() => {
        setFilmeEmEdicao(filmes[0]);
        return () => console.log("Componente Encerrado quando muda filmes");
    }, [filmes]);

    useEffect(() => {
        console.log("Mudou o filme em edição");
        return () => console.log("Componente Encerrado quando muda filme em edição");
    }, [filmeEmEdicao]);

    return (
        <EstruturaPagina titulo="Filmes">
            <Secao titulo="Cadastro de Filmes">
                <CadastroFilme filme={filmeEmEdicao} />
            </Secao>
            <Secao titulo="Listagem de Filmes" >
                <ListaFilme filmes={filmes} editarFilme={editarFilme} excluirFilme={excluirFilme} />
            </Secao>
        </EstruturaPagina>
    );
}

export default Filme;