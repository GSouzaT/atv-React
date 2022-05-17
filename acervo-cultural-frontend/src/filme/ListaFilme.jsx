import '../assets/css/filme/listafilme.css';

const ListaFilme = props => {
    const { filmes, editarFilme, excluirFilme } = props;
    /* if (!filmes || filmes.length === 0) {
        return <span>Não existem filmes cadastrados.</span>
    } */

    return (
        <>
        {filmes && filmes.length > 0 && <div className="listagem">
            <table className="tabela">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Subtitulo</th>
                        <th>Diretor</th>
                        <th className="acoes" colSpan="2">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {filmes.map(filme => (
                        <tr key={filme.id}>
                            <td>{filme.titulo}</td>
                            <td>{filme.subtitulo}</td>
                            <td>{filme.diretor}</td>
                            <td className='acoes'><button onClick={() => editarFilme(filme)}>Editar</button></td>
                            <td className='acoes'><button onClick={(e) => excluirFilme(filme, e)}>Excluir</button></td>
                        </tr>
                    ))}
                </tbody> 
            </table>
        </div>}
        </>
    )
}

export default ListaFilme;