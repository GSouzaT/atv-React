import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EstruturaPagina from "../components/EstrututuraPagina";
import Secao from "../components/Secao";
import CadastroFilme from "../filme/CadastroFilme";
import FilmeAPI from '../services/filme';

const PageCadastroFilme = props => {
    const [filme, setFilme] = useState();
    const { id } = useParams();
   
    useEffect(() => {
        if (!id) {
            setFilme({});
            return;
        }
        
        carregarFilmePorId(id);
    }, [id]);

    const carregarFilmePorId = async (id) => {
        const filme = await FilmeAPI.buscarFilmePorId(id);
        console.log("Filme: ", filme)
        setFilme(filme);
    }

    return (
        <EstruturaPagina titulo="Filmes">
            <Secao titulo="Cadastro de Filmes">
                <CadastroFilme filme={filme} />
            </Secao>
        </EstruturaPagina>
    );
}

export default PageCadastroFilme;