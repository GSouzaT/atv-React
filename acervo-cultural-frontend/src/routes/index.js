import Filme from "../pages/Filme";
import Home from "../pages/Home";
import PageCadastroFilme from "../pages/PageCadastroFilme";
import PageListaFilme from "../pages/PageListaFilme";

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/filmes",
        element: <Filme />
    },
    {
        path: "/filmes/listagem",
        element: <PageListaFilme />
    },
    {
        path: "/filmes/cadastro",
        element: <PageCadastroFilme />
    },
    {
        path: "/filmes/cadastro/:id",
        element: <PageCadastroFilme />
    }
];

export default routes;