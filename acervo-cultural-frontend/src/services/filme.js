import axios from "axios";

import * as paths from './paths';

const BASE_URL = paths.acervoApi;

class FilmeAPI {
    buscarFilmes() {
        return axios.get(`${BASE_URL}/filme`)
            .then(response => response.data);
    }

    buscarFilmePorId(id) {
        return axios.get(`${BASE_URL}/filme/${id}`)
            .then(response => response.data);
    }

    excluirFilme(id) {
        return axios.delete(`${BASE_URL}/filme/${id}`)
    }

    inserirFilme(filme) {
        axios.post(`${BASE_URL}/filme`, filme)
    }

    atualizarFilme(filme) {
        axios.put(`${BASE_URL}/filme`, filme)
    }
}
export default new FilmeAPI();

/* export const buscarFilmes = () => {
    return axios.get(`${BASE_URL}/filme`)
            .then(response => response.data);
} */
