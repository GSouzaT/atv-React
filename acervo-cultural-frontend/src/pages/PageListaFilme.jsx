import { useState, useEffect } from "react";
import { /* useHistory, */ useNavigate } from "react-router-dom";
import EstruturaPagina from "../components/EstrututuraPagina";
import Secao from "../components/Secao";
import ListaFilme from "../filme/ListaFilme";
import FilmeAPI from '../services/filme';

const PageListaFilme = props => {
    const [filmes, setFilmes] = useState();
    /* const history = useHistory();

    const editarFilme = (filme) => {
        history.push(`/filmes/cadastro/${filme.id}`);
    } */
    const navigate = useNavigate();

    const editarFilme = (filme) => {
        navigate.push(`/filmes/cadastro/${filme.id}`);
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

    return (
        <EstruturaPagina titulo="Filmes">
            <Secao titulo="Listagem de Filmes" >
                <ListaFilme filmes={filmes} editarFilme={editarFilme} excluirFilme={excluirFilme} />
            </Secao>
        </EstruturaPagina>
    );
}

export default PageListaFilme;