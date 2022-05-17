import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/css/tabela.css';
import './assets/css/estruturapagina.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes } from 'react-router-dom';
/* import { Switch } from 'react-router-dom'; */
import { Route } from 'react-router-dom';
import routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('paginaPrincipal'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      {/* <Switch>
        {routes.map(route => (
          <Route key={route.path}
            path={route.path} 
            component={route.component} 
            exact={route.exact} />
        ))}
      </Switch> */}
      <Routes>
        {routes.map(route => (
          <Route key={route.path}
            path={route.path} 
            element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
