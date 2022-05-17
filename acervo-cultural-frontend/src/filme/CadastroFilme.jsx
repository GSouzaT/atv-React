/* import { useHistory } from 'react-router-dom'; */
import { useNavigate } from 'react-router-dom';
import '../assets/css/filme/cadastroFilme.css';

const CadastroFilme = props => {
    const { filme } = props;
    /* const history = useHistory();

    const voltar =() => {
        history.goBack();
    } */

    const navigate = useNavigate();

    const voltar =() => {
        navigate.back();
    }

    return (
        <>
            {filme && <div>
                <div className="campo-formulario">
                    <label>ID:</label>
                    <input type="text" className='input-formulario' value={filme.id} disabled />
                </div>
                <div className="campo-formulario">
                    <label>Título:</label>
                    <input type="text" className='input-formulario' value={filme.titulo} />
                </div>
                <div className="campo-formulario">
                    <label>Subtitulo:</label>
                    <input type="text" className='input-formulario' value={filme.subtitulo} />
                </div>
                <div className="campo-formulario">
                    <label>Diretor:</label>
                    <input type="text" className='input-formulario' value={filme.diretor} />
                </div>
                <div className="campo-formulario">
                    <button onClick={voltar}>Voltar</button>
                </div>
            </div>}
        </>
    )
}

export default CadastroFilme;