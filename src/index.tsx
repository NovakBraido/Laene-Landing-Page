import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Carrega os estilos
import App from './App'; // Carrega o componente principal

// Cria a raiz da aplicação na div com id="root" do seu index.html
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Renderiza o seu componente App dentro da raiz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
